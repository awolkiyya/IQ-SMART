import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrappe";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./ui/button";
import { LogIn, Menu } from 'lucide-react';
import { LoginLink,LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import ThemeSwitcher from "./ThemeSwitcher";
const NavBar = ()=>{
    return (
        <nav className="sticky h-14 top-0 bg-lightTheme-background border-b w-full bg-white dark:bg-darkTheme-background z-30">
            <MaxWidthWrapper className="w-full h-14 flex flex-row justify-between items-center">
             <Link href={"/"}> <h1 className="font-bold text-2xl text-primary ">Quill</h1></Link> 
             {/* mobile navbar */}
             <div className="hidden items-center  space-x-4 sm:flex">
                <>
                    <Link href={"/pricing"} className={cn([buttonVariants(
                        {
                            variant:"ghost",
                            size:"sm" 
                        }
                    )])}>
                    Pricing
                    </Link>
                    <LoginLink className={cn([buttonVariants({
                            variant:"ghost",
                            size:"sm" 
                        })])}>Sign In</LoginLink>
                    {/* <ThemeSwitcher/> */}
                    <RegisterLink className={cn([buttonVariants({
                            variant:"default",
                            size:"default" 
                        })])}>Get Started</RegisterLink>
                </>
             </div>
            </MaxWidthWrapper>
        </nav>
    )
}
export default NavBar;