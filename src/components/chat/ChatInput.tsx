import React from 'react';
import { Input } from '../ui/input';
import { Send } from 'lucide-react';

const ChatInput = ({isDisabled}:{isDisabled:boolean}) => {
    return (
        <div className=' my-1  mx-1 flex flex-row items-center justify-center'>
                <Input
                className='border-none'
                />
                <div className='w-13 '>
                <Send className='ml-3 my-1 w-10 h-10 text-primary border p-1'/>
                </div>
             </div>
    );
}

export default ChatInput;
