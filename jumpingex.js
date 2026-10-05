// for(let i=0;i<=10;i++)
// {
//     // if(i==5)
//     // {
//     //     break;
//     // }
//     console.log(i);
//     if(i==5)
//     {
//         break;
//     }
// }

// let i =1;
// while(i<=5)
// {
//     console.log(i);
//     if(i==3)
//     {
//         break;
//     }
//     i++;
    
// }

// for(let i = 22;i<=30;i++)
// {
//     if(i%5===0)
//     {
//         console.log(i);
//         break;
        
//     }
// }


// let i =22;
// while(i<=30)
// {
//     if(i%5===0)
//     {
//         console.log(i);
//         break;
       
        
//     }
//      i++;
// }


// let i =59;
// while(i>=50)
// {
//     if(i%4===0)
//     {
//         console.log(i);
//         break;
        
//     }
//     i--;
// }

// let start = 10;
// let end = 20;
// let count =0;

// for(let i = start;i<=end;i++)
// {
//     console.log(start);
//     count++;
    
//     if(count ===3)
//     {
//         break;
//     }
    
//     start++;
// }


// let i =25;
// let count =0;
// while(i>=13)
    
// {
   
//     if(i%2==0)
//     {
//         console.log(i);
//         count++;
        
//     }
//     if(count ==2)
//     {
//         break;
//     }
   
//     i--;

// }


// for(let i=1;i<=10;i++)
// {
//     if(i==3)
//     {
//         continue;
//     }
//     console.log(i);
    
// }

// for(let j=20;j<=30;j++)
// {
//     if(j==30)
//     {
//         continue;
//     }
//     console.log(j);
    
// }

// let unlucky = 2025;
// for(let i=2000;i<=2026;i++)
// {
//     if(i===unlucky)
//     {
//         continue;
//     }
//     console.log(i);
    
// }


// let start =2000;

// let unlucky_year = 2025;
// while(start<=2026)
// {
//     if(start == unlucky_year)
//     {
//         start+=1;
//         continue;
//     }
//     console.log(start);
//     start++;
    
// }


// let j =1;
// while(j<=10)
// {
//     if(j==3)
//     {
//         continue;
//     }
//     j++;
//     console.log(j);

    
// }


// let i =10;

// do{
//     console.log(i);
//     i--;
    
// }while(i>=5);


let ans;

do{
    let n = parseInt(prompt("Enetr a number to checek even or odd"));
    if(n%2===0)
    {
        alert("even");
        
    }
    else{
        alert("odd");
    }

    ans = prompt("Want to continue(Y/N)");
}while(ans==="Y");