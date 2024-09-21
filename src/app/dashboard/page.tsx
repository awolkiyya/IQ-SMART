import { LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';
import {redirect} from "next/navigation";
import { db } from '@/db';
import Dashboard from '@/components/Dashboard';
// this is the server side component every logic is done in the server side not in the client side
const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
   
  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })
  if(!dbUser) redirect('/auth-callback?origin=dashboard')
   return (
       <>
           <Dashboard/>
       </>
   
    );
}

export default Page;
