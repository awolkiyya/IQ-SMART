import { db } from "@/db";
import { pinecone } from "@/libs/pinecone";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Pinecone } from "@pinecone-database/pinecone";
import { createUploadthing, type FileRouter } from "uploadthing/next";
const { PDFLoader } = require('langchain/document_loaders/fs/pdf');
const { OpenAI } = require('langchain/llms/openai');
const { OpenAIEmbedding } = require('langchain/embeddings/openai');

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      console.log(req);
      // This code runs on your server before upload
      const {getUser} = getKindeServerSession();
      const user = await getUser();
      console.log(user);
      // If you throw, the user will not be able to upload
      if (!user || !user.id) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => { 
      console.log("data complated then starting to storing to database");
      const createdFile = await db.file.create({
        data:{
          userId:metadata.userId,
          key:file.key,
          fileName:file.name,
          fileUrl:file.url,
          uploadStatus:"PROCESSING"
        }
      });
      const response = await fetch(file.url,{
        method:"GET"
      });
      const loader = PDFLoader(response.blob);
      const pageLevelDocument = await loader.load();
      const pagelength = pageLevelDocument.length;
      // now vectorize(numerize and index entire document)
      const pinocone = pinecone.Index("pdf-chat");
      const embedding = new OpenAIEmbedding({
          openAiApiKey:process.env.OPEN_AI_KEY,
          
      })
      // doing everythings here
      console.log(`data info ${(await response.blob()).size}`);
      // then store this in vectore databases use here langchain

    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
