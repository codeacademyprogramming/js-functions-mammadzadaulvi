// const findeven = (...num) => {
//     let even = num[0];
//     for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 1) {
//         even = num[i];
//        }
//     }
//     return even;
// }

// console.log(findeven(21,33,67,543,654,543));



// const findodd = (...num) => {
//     let even = num[0];
//     for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 == 0) {
//         even = num[i];
//        }
//     }
//     return even;
// }

// console.log(findodd(222,34,56,1,12));




function prime(a)
{
    if (a===1){
    return false;
  }
  
  else
  {
    for(let i = 2; i < a; i++)
    {
      if(a % i === 0)
      {
        return false;
      }
    }
    
    return true;  
  }
}

console.log(prime(2));

