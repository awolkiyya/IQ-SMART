
import { trpc } from '@/app/_trpc/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {notFound, redirect} from "next/navigation"
import { db } from '@/db';
import { FileVideo } from 'lucide-react';
import FileViewer from '@/components/FileViewer';
const Page =  async ({ params }: { params: { fileId: string }}) => {
    console.log(params.fileId);
    const { getUser } = getKindeServerSession();
    const user = await getUser();
   
  if (!user || !user.id) redirect ('/auth-callback?origin=dashboard')

  const file = await db.file.findFirst({
    where: {
      id: params.fileId
    }
  })
  if(!file) notFound();
    return (
      <div className='flex-1 flex flex-col md:flex-row max-w-full min-h-screen mx-3 sm:mx-10 my-2'>
          <FileViewer fileUrl={file.fileUrl} fileId={file.id}/>
      </div>
    );
}

export default Page;
