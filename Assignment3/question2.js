let arr = new myarr(1,2,3,4,5,6,7,8);
console.log(Object.values(arr))
// console.log(arr)
function myarr()
{
    Object.defineProperty(this,"length",{
         writable : true,
         enumerable:false,
    })

   for(let i=0;i<arguments.length;i++)
   {
      this[i]=arguments[i]
      this.length=arguments.length
   }

   
}

// let my_arr = new creatarr("raj","suresh","bablu");
// console.log(Object.values(my_arr)  )
// function creatarr()
// {
//     Object.defineProperty(this,"length",{
//         writable : true,
//         enumerable : false,
//     })
//     for(var i=0;i<arguments.length;i++)
//     {
//         this[i] =arguments[i]
//         this.length = arguments.length
//     }

// }