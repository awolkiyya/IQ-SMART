import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import {PLAN} from "../utils/subscriptionPlans";
import { db } from "@/db";
export const getUserSubscription = async ()=>{
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    // if user is new user
    if(!user || !user.id){
         return {
            ...PLAN[0],
            isSubscribed:false,
            isPaymentFaild:false,
            paymentError:null,
            subscriptionTimeEnd:null
         }
    }
    // to the user that already registed
    const dbUser = await db.user.findFirst({
            where:{
                id:user.id
            }
    });
    if(!dbUser){
        return {
            ...PLAN[0],
            isSubscribed:false,
            isPaymentFaild:false,
            paymentError:null,
            subscriptionTimeEnd:null
         }

    }
    // if reach this please the user is exist and get subscription
     
}