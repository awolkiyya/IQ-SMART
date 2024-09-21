import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcudure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
 import { string, z } from 'zod';
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query';
export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user || !user.id || !user.email)
    return { success: false };

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    })

    if (!dbUser) {
      // create user in db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      })
      return { success: true }
    }

    return { success: true }
  }),
  GetAllUserFile:privateProcudure.query(async ({ctx})=>{
          
          const {userId} = ctx;
          console.log(userId);
        
          return await db.file.findMany(
            {
              where:{
                userId:userId
              }
            }
          );
  }),
  GetFile:privateProcudure.input(z.object({id:z.string()})).mutation( async({input})=>{
    const {id} = input;
    return await db.file.findFirst({
      where:{
        id:id
      }
    });
  }),
  GetPdfStatus:privateProcudure.input(z.object({fileId:z.string()})).query(async({input,ctx})=>{
    const {fileId} = input;
    console.log(fileId);
    const file = await db.file.findFirst({
      where:{
        id:fileId,
      }
    });
    if(!file) return {status:"PENDING" as const}
    return {status:file.uploadStatus};
  }),
  DeletePdfFile :privateProcudure
  .input(z.object({ id: z.string() })) // Expecting an ID as a string
  .mutation(async ({ input }) => {
    const { id } = input;
    // Perform the deletion logic here (e.g., delete from database or file storage)
   
    return  await db.file.delete({
      where:{
        id:id
      }
    });;
  }),
  GetFileSpecificMessage:privateProcudure.input(
    z.object({limit:z.number(),fileId:z.string(),cursor:z.string()})
    ).query(({input,ctx})=>{
    // print here the list of input come from the client
    const userId = ctx;
    const {fileId,cursor}= input;
    const maxLimit = input.limit??INFINITE_QUERY_LIMIT; // the best logic i get hint
      // await db.message. from message get the all information

  }),

});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;