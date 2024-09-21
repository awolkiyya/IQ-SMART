'use client'
import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css'; 
import {useResizeDetector} from  "react-resize-detector";
import { Input } from './ui/input';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();
const PdfRenderer = ({url}:{url:string}) => {
    const {width,ref} = useResizeDetector();
    const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className=' w-full flex flex-col rounded-2xl'>
        <div className='py-5 bg-white border px-2 font-bold text-md flex flex-row gap-3  justify-between'>
        <p>
        Page {pageNumber} of {numPages}
        </p>
        <Input
        value={pageNumber}
          onChange={(value)=>{
            if(value.target.value)setPageNumber(parseInt(value.target.value));
          }}
        className='w-12 h-8'/>
        </div>
       <div  ref={ref} className='flex-1  min-h-full'>
       <Document className={" overflow-hidden"}  file={url} onLoadSuccess={onDocumentLoadSuccess}>
        <Page width={width?width:1}  pageNumber={pageNumber} />
      </Document>
       </div>
    </div>
  );
}

export default PdfRenderer;
