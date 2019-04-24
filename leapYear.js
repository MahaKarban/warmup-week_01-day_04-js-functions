let year;
const leapYear =function (years){
   
    if (years/4){
      return  (true)
    }
    else if(years/100){
      return  (false)
    }
    else if(years/400){
      return (true)
    }
    else{
      return (false)
    }
}

// other solution 

const isLeapYear= function(year){
    if(year % 4 === 0){
    return (true)
    }
    else if(year % 100 !== 0){
    return (false)
    }
    else if(year % 400 === 0){
    return (true)
    }
}

// other solution 


const isLeapYear = function (year)
{
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {

    return (true);
} 
else {
    return (false);
}
}leap