'use client'
import React, { useState } from 'react';
import MaxWidthWrapper from './maxWidthWrappe';
import UploadFileButton from './UploadFileButton';
import Link from 'next/link';
import { File, Ghost, Loader2 } from 'lucide-react';
import { Timer } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { DialogContent, DialogHeader } from './ui/dialog';
import { Button, buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { dataFormater } from '@/utils/dateFormater';
import { trpc } from '@/app/_trpc/client';
import { toast } from 'react-toastify';
const Dashboard = () => {
    const [isopen,setIsOpen] = useState(false);
    const {data:files,isLoading} = trpc.GetAllUserFile.useQuery(); // here get all user specific files
    console.log(files);
    const deletePdfMutation = trpc.DeletePdfFile.useMutation();

  const handleDelete = (id: string) => {
    deletePdfMutation.mutate({ id }, {
      onSuccess: () => {
       toast.success('PDF file deleted successfully!');
      },
      onError: (error) => {
        toast.error('Failed to delete PDF file:', error);
      },
    });
  };
    
    return (
       <MaxWidthWrapper>
        <main className='mx-0 flex-1 max-w-max-w-7xl'>
            <div className=' flex-col flex gap-5 sm:flex-row mt-8 justify-between border-b-2 pb-3 mb-3' >
                <h1 className=' text-4xl font-bold'>My File</h1>
                <UploadFileButton/>
            </div>
           
               {
                files && files.length !== 0?(
                    <div className='grid grid-1 md:grid-cols-2 gap-10'>
                {files.sort((a, b) => {
                    return new Date(b.updatedAt).getTime()-new Date(a.createdAt).getTime();
                }).map((file) => {
                    const updateDate = dataFormater({date:Number.parseInt(file.updatedAt)});
                    return (
                        <div className='px-5 py-2 flex flex-col shadow-lg rounded-lg '>
                <Link href={`/dashboard/${file.id}`}>
                    <div className='flex flex-row w-full gap-2  border-b-2 py-5 justify-start items-start '>
                        <File className='text-primary'/>
                        <h1>{file.fileName}</h1>
                    </div>
                    </Link>
                    <div className='flex flex-row justify-between items-start mt-2'>
                        <div className='flex flex-row'>
                            
                                <Timer className='border p-1 mr-2 rounded-sm text-primary'/>
                               
                            <h1 className='text-[0.5rem] text-center font-bold text-primary sm:text-sm'>{updateDate}</h1>
                        </div>
                        <div>
                        <Dialog open={isopen} onOpenChange={(changed)=>{
                                     if(!changed){
                                        setIsOpen(changed);
                                     }     
                            }}>
                                <DialogTrigger asChild>
                                <Trash2 className='border w-12 p-1 mr-2 rounded-sm text-red-400 hover:p-0 hover:cursor-pointer' onClick={()=>{
                                    console.log(isopen);
                                     setIsOpen(!isopen);
                                }} />
                             
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader className='text-2xl'>
                                        Are You Sure To Delete
                                    </DialogHeader>
                                    <div className='flex flex-col items-center gap-3 md:items-start'>
                                        <h1 className='text-sm font-light'>this action can't be undone</h1>
                                        <Button className={cn([buttonVariants({
                                            variant:"default",
                                            size:"sm"
                                        })])} onClick={()=>{
                                            handleDelete(file.id);
                                            setIsOpen(!isopen);
                                        }}>
                                            Yes
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            
                        </div>
                    </div>
                    </div>
                    );
                })
                }
                </div>)
                : isLoading?(<div className='flex flex-col justify-center items-center'>
                     <Loader2/>
                     <h1>Loading ...</h1>
                </div>): (<div className=' max-w-7xl flex flex-col gap-3 items-center justify-center'> 
                    <Ghost className='w-20 h-10'/>
                    <h1 className='font-light text-sm'>No file Uploded Yet,Please Uploade Now</h1>
                </div>)
                
               }
            
        </main>
       </MaxWidthWrapper>
    );
}

export default Dashboard;
