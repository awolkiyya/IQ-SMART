'use client'
import React from 'react';
import { Check } from 'lucide-react';
import Future from '@/components/FutureList';
import {Stripe} from "stripe";
const Page = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col items-center justify-start mt-10 mx-1'>
            <h1 className='font-bold text-1xl text-primary'>
                Pricing
            </h1>
            <h1 className='font-extrabold text-4xl md:text-5xl mb-5 text-center '>Choose the right plan for you</h1>
            <h1 className='font-light text-sm  text-black/50 mt-2 text-center px-2'>Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</h1>

            <div className='flex flex-col md:flex-row w-full justify-center items-center gap-3 p-5'>
                <div className='flex flex-col justify-start items-start  md:min-w-[400px] min-h-[400px] min-w-full border-1 rounded-md bg-white shadow-sm p-5'>
                    <h1 className=' w-full text-lg font-light hover:underline hover:text-primary '>Free Plan</h1>
                    <div className='min-h-[300px]'>
                   <h1 className='font-bold text-4xl'>Free</h1> 
                   <h1 className=''>it is free for one month only </h1>
                   <div className='flex flex-col py-5 gap-2'>
                   <Future futureName="5 products"/>
                   <Future futureName="Up to 1,000 subscribers"/>
                   <Future futureName="Basic analytics"/>
                   <Future futureName="48-hour support response time"/>
                    
                   </div>
                    </div>
                    <div className='w-full  bg-primary text-center p-2 rounded-md text-white text-md font-bold'>
                         Get Started
                     </div>
                </div>
                <div className='flex flex-col justify-strat items-start p-5 md:min-w-[400px] min-h-[400px] min-w-full border-1 rounded-md bg-white shadow-sm'>
                    <h1 className=' w-full text-lg font-light hover:underline hover:text-primary '>Pro Plan</h1>
                    <div className='min-h-[300px]'>
                   <h1 className='font-bold text-4xl'>$14<span className='text-primary'> /</span><span className='font-light text-sm'> month</span></h1> 
                   <h1 className=''>$14  paid annually</h1>
                   <div className='flex flex-col py-5 gap-2'>
                   <Future futureName="25 products"/>
                   <Future futureName="Unlimited subscribers"/>
                   <Future futureName="Advanced analytics"/>
                   <Future futureName="48-hour support response time"/>
                   <Future futureName='Marketing automations'/>
                    
                   </div>
                    </div>
                    <div className='w-full  bg-primary text-center p-2 rounded-md text-white text-md font-bold hover:cursor-pointer' onClick={ ()=>{
                    }}>
                         Pay Plan
                     </div>
                </div>
               
            </div>
        </div>
    );
}

export default Page;
