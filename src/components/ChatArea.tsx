'use client'
import React from 'react';
import { Input } from './ui/input';
import { Check, Loader2, Send, WandIcon, XCircle } from 'lucide-react';
import MessageArea from './MessageArea';
import ChatInput from './chat/ChatInput';
import { trpc } from '@/app/_trpc/client';
interface ChatAreaProperties {
    fileId:string,
}
const ChatArea = ({fileId}:ChatAreaProperties) => {
    const {data,isLoading} = trpc.GetPdfStatus.useQuery({fileId});
    if(isLoading){
         return < div className='min-h-screen md:h-full flex flex-col gap-1 justify-center items-center'>
               <Loader2 className='animate-spin'/>
               <h1 className='font-bold'>Loading...</h1>
               <h4 className='font-light text-sm'>We are loading Your PDF</h4>
               <ChatInput isDisabled={false}/>
         </div>
    }
    else if(data?.status == "PROCESSING"){
        return < div className='min-h-screen md:h-full flex flex-col gap-1 justify-center items-center'>
        <WandIcon className='text-green-600'/>
        <h1 className='font-bold'>Preparing...</h1>
        <h4 className='font-light text-sm'>We are Preparing Your PDF</h4>
        <ChatInput isDisabled={false}/>
    </div>
    }
    else if(data?.status == "FAILD"){
        return < div className='min-h-screen md:h-full flex flex-col gap-1 justify-center items-center'>
        <XCircle className='text-red-600'/>
        <h1 className='font-bold '>Faild</h1>
        <h4 className='font-light text-red-600 text-sm'>Sorry, We can't Loading Your PDF</h4>
        <ChatInput isDisabled={false}/>
    </div>
    }
    // here need some logic
    return (
        <div className='w-full min-h-screen md:h-full p-5 flex-1 flex flex-col justify-between items-stretc'>
            <MessageArea/>
            
        </div>
    );
}

export default ChatArea;
