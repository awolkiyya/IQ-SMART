"useClient"
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button, buttonVariants } from './ui/button';
import { Dialog, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { DialogContent } from './ui/dialog';
import Dropzone, {useDropzone} from 'react-dropzone'
import { Cloud, File } from 'lucide-react';
import { maxFileSize } from '@/utils/constant';
import { ByteToMb } from '@/utils/byteToMb';
import { useUploadThing } from '@/utils/uploadthing';
import { toast } from 'react-toastify';
import { useToast } from '@/hooks/use-toast';
import { trpc } from '@/app/_trpc/client';
const UplaodDropZone = ({setIsOpen}:{setIsOpen:any})=>{
    const { toast } = useToast();
    const [isDraged,setIsDraged]= useState(false);
    const {startUpload} = useUploadThing("pdfUploader");
    const handleDrop = async (acceptedFiles: File[]) => {
            // then hundle here all logic one by one 
            // 1.upload the file to cloud
            // 2. store file information to the database by trpc
            console.log(acceptedFiles);
            const res = await startUpload(acceptedFiles);
            if(!res){
                toast({
                    title: "Some Error Happen",
                    description: "File is not uploaded",
                    variant:"destructive"
                  })
            }
            toast({
                title: "Success",
                description: "File is  uploaded",
                variant:"default"
              })
            setIsOpen(false); 
            
    };
    return <Dropzone multiple={false} 
          accept={{ 'application/pdf': ['.pdf'] }} // Accept only PDF files
          onDrop={handleDrop} // Handle dropped file(s)
          maxSize={maxFileSize}
        >
        {
            ({getRootProps,getInputProps,acceptedFiles})=>(
                <div {...getRootProps()} className={cn(['max-w-[400px] border h-64 m-4 border-dashed flex flex-col items-center justify-center border-gray-5' ])} >
                    <div className='flex flex-col items-center justify-center'>
                        <Cloud className='text-primary'/>
                        <h1 className='text-md text-black/50 font-bold'> Click here or Drag and Drop To upload your file</h1>
                        <h1 className='text-sm text-black/25 font-bold'> Max {ByteToMb({number:maxFileSize})} MB size</h1>
                    </div>
                    <div className='max-w-[300px] flex flex-col sm:flex-row overflow-x-auto mt-4 border p-2 rounded-lg shadow-sm'>
                    {acceptedFiles.map((file: File) => (
                        <>
                        <File className='text-primary'/>
                        <div key={file.name} className='mx-1'>
                            <p className='text-ellipsis overflow-hidden font-light text-sm'>{file.name}</p>
                            <p className='text-primary font-light text-sm'>{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                        </>
                    ))}
                    </div>
                    <input {...getInputProps()}/>

                </div>
            )
        }
    </Dropzone>
}
const UploadFileButton = () => {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={(value)=>{
            setIsOpen(value); }}>
        <DialogTrigger asChild>
            <Button className={cn(['text-white border p-2 bg-primary',buttonVariants({
                    size:"sm"
            })])} onClick={()=>{setIsOpen(!isOpen)}} >Upload Pdf</Button>
        </DialogTrigger>
        <DialogContent>
            <UplaodDropZone setIsOpen={setIsOpen}/>
        </DialogContent>
    </Dialog> 
    );
}

export default UploadFileButton;
