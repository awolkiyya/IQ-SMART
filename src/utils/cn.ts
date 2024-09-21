import clsx from "clsx";
import { ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassArray[]){
    console.log(twMerge(clsx(inputs)));
    return twMerge(clsx(inputs));
}