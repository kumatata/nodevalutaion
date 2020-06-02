ajd = new Date();
const noel = new Date(ajd.getFullYear(), 11, 25);
    if (ajd.getMonth()==11 && ajd.getDate()>25) 
    {
        noel.setFullYear(noel.getFullYear()+1); 
    } 

    const sec = 1000 ;
    const jour = 1000*60*60*24;
    
    console.log(`Il reste ${Math.round((noel.getTime()-ajd.getTime())/(sec))} secondes avant Noël !`); 
    console.log(`Il reste ${Math.round((noel.getTime()-ajd.getTime())/(jour))} jours avant Noël !`); 
