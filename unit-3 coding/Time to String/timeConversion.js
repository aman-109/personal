

function convertTime(milSec){
    let ms= milSec % 1000;
    
    milSec=(milSec-ms)/1000;

    let sec=milSec%60;

    milSec=(milSec-sec)/60;

    let min = milSec%60;

    let hrs= (milSec-min)/60;

    if(hrs>1 && min>1 && sec>0){
        return `${hrs} Hours ${min} Minutes ${sec} Seconds`
    }
    else if(min==1)
    {
        return `${min} Minute`

    }
    else if(hrs==0 && min >1 && sec==0)
    {
        return `${min} Minutes`

    }
    else if(hrs==1 && min==0 && sec==0)
    {
        return `${hrs} Hour`

    }

   else if(hrs==0 && min>1 && sec>0){
    return `${min} Minutes ${sec} Seconds`

   }
   else if(hrs==0 && min==0 && sec>0){
    return `${sec} Seconds`

   }
}

export default convertTime