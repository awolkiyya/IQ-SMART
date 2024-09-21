import MaxWidthWrapper from "@/components/maxWidthWrappe";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <MaxWidthWrapper className={"flex flex-col justify-center items-center text-center mt-12 mb-20 sm:mt-40 "}>
          <div className="flex flex-row justify-between gap-2 items-center border rounded-lg px-10 py-1">
              <div className="font-bold hover:cursor-pointer">👋 Quill is Now Public</div>
              {/* <img src="./assets/icons/facebook.png"/> */}
          </div>
          <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold">
            Chat with your <span className="text-primary underline">Document</span> in seconds.
           </h1>
           <p className="max-w-prose mt-6 text-zinc-400 sm:text-lg">
              Quill allows you to have conversations with any PDF document. Simplify upload your first and start asking questions right way.
           </p>
           <Link href={"/dashboard"} className={cn(["flex flex-row justify-center items-center gap-2 mt-5 ", buttonVariants()])}>
              Get Started
              <ArrowRight/>
            </Link>
    </MaxWidthWrapper>
    <div className="p-3 mx-5 mb-10 lg:mx-40 flex flex-col justify-center items-center rounded-lg shadow-sm border">
      <Image
       src={"/assets/images/dashboard-preview.jpg"}
       alt="product preview"
       width={1024}
       height={500}
       quality={100}
      />
    </div>
    <div className="max-w-7xl flex flex-col mt-20 mx-4 items-start justify-between lg:mx-40 ">
      <h1 className="md:text-center font-bold text-3xl md:text-4xl lg:text-5xl">
        Start Chatting in minutes
      </h1>
      <p className="max-w-prose mt-6 text-zinc-400 sm:text-lg">
              Quill allows you to have conversations with any PDF document. Simplify upload your first and start asking questions right way.
      </p>
      <ul className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 md:border-t-2  border-zinc-300 py-2">
          <span className="text-sm font-medium text-primary">Step 1</span>
          <span className="text-bold font-medium ">Sign up for an account</span>
          <span className="text-sm font-light ">Ether starting out with a free plan or choose our pro plan</span>
        </div>
      </li>
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 md:border-t-2 border-zinc-300 py-2">
          <span className="text-sm font-medium text-primary">Step 2</span>
          <span className="text-bold font-medium ">Sign up for an account</span>
          <span className="text-sm font-light ">Ether starting out with a free plan or choose our pro plan</span>
        </div>
      </li>
      <li className="md:flex-1">
        <div className="flex flex-col space-y-2 md:border-t-2 border-zinc-300 py-2">
          <span className="text-sm font-medium text-primary">Step 3</span>
          <span className="text-bold font-medium ">Sign up for an account</span>
          <span className="text-sm font-light ">Ether starting out with a free plan or choose our pro plan</span>
        </div>
      </li>
      </ul>
      

    </div>
    <div className="p-3 mx-5 mb-10 lg:mx-40 flex flex-col justify-center items-center rounded-lg shadow-sm border">
      <Image
       src={"/assets/images/file-upload-preview.jpg"}
       alt="product preview"
       width={1024}
       height={500}
       quality={100}
      />
    </div>
    </>
    
  );
}
