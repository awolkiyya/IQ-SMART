import { trpc } from '@/app/_trpc/client';
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query';
import React from 'react';

const MessageArea = ({fileId}:{fileId:string}) => {
    // now here get the stored message in the database message table specific to the file and users
    //  trpc.GetFileSpecificMessage.useInfiniteQuery({
    //     fileId:fileId,
    //     limit:INFINITE_QUERY_LIMIT
    //  },{
    //     getNextPageParam:(lastPage)=>lastPage?.nextCursor,
    //     keepPreviouseData:true
        
    //  });
    return (
        <div>
            message display area
        </div>
    );
}

export default MessageArea;
