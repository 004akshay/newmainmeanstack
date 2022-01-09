var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

    // var positive_rate_district= coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
    // console.log(positive_rate_district);


// q2 district with highest 1 dose vaccination rate

    //   var fstDose=coivd_data.reduce((dos1,dos2)=>dos1[5]>dos2[5]?dos1:dos2)[5]
    //   console.log(fstDose);
    //   var greenDistrict=coivd_data.filter(dos=>dos[2])


// q3 district with lowest death cases

        //  var lowDeath=coivd_data.reduce((low1,low2)=>low1[3]<low2[3]?low1:low2)[1]
        //  console.log(lowDeath);

//  var lowDeath=coivd_data.reduce((ld1,ld1)=>ld1[3]<ld2[3]?ld1:ld2)
//  console.log(lowDeath);




// q4 sort district with +ve cases

 var cov=coivd_data.sort((d1,d2)=>d1[2]-d2[2])
 console.log(cov);


// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details

// q8 total nu,ber of +ve cases

// q9 total number of cured cases

// q10 cured numbers of iduky

// q11 total number of death cases