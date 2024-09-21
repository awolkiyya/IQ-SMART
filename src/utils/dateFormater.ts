export const dataFormater= ({date}:{date:number})=>{
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,  // For 12-hour format, set to false for 24-hour format
      }).format(date);
 return formattedDate;
}
