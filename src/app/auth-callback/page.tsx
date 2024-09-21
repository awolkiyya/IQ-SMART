'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { trpc } from '../_trpc/client';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

const Page = () => {
    const router = useRouter()

  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

 const {data}=  trpc.authCallback.useQuery(undefined,{
    retry: true,
    retryDelay: 500,
  });
  console.log(data);
  if (data?.success) {

      router.push(origin ? `/${origin}` : '/dashboard');
  } else  {
      // sign in first provide the toast
      router.push('/');
      toast.warning("you should be logged in first ,try again after logged in");
    
  }


  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}
    

export default Page;
