import { Check } from 'lucide-react';
import React from 'react';

const Future = ({futureName}:{futureName:string}) => {
    return (
        <h1 className='flex flex-row gap-2'>
            < Check  className='text-primary'/>
            {futureName}
        </h1>
    );
}

export default Future;
