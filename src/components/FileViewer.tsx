import React from 'react';
import PdfRenderer from './PdfRenderer';
import ChatArea from './ChatArea';

const FileViewer = ({fileUrl,fileId}:{fileUrl:string,fileId:string}) => {
    return (
        <>
           {/* left side bar */}
            <div className='w-full md:w-[60%] min-h-full border-t  border-'>
                <PdfRenderer url={fileUrl}/>
            </div>
             {/* right side bar */}
            <div className='border w-full md:w-[40%]  min-h-screen'>
                <ChatArea fileId={fileId}/>
                
            </div>
        </>
    );
}

export default FileViewer;
