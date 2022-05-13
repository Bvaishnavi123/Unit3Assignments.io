let array = new createarray(329,232,313,321)


function createarray()
{
   Object.defineProperty(this,"length",{

    writable : true,
    enumerable: false

   })
  
   for(let i=0;i<arguments.length;i++)
   {
       this[i] = arguments[i]
       this.length = arguments.length
   }
}

createarray.prototype.addelement = function(x)
{
   
    let index = this.length;
    
    this[index] = x;
    this.length++
}
array.addelement(157)
array.addelement(150)
createarray.prototype.remove_element = function()
{
    let index = this.length-1;
    delete this[index]
    this.length--
   
}
array.remove_element()
array.remove_element()
function swap(arr,i,j)
{
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
createarray.prototype.reversearray=function()
{
    var x =  Object.values(this)
    var i = 0;
    var j = x.length-1;
    while(i<j)
    {
        swap(x,i,j)
        i++;
        j--
    }

    console.log(x)
}
array.reversearray()

createarray.prototype.firstelement = function()
{
    let index = this[0];
    console.log(index)
}
array.firstelement()
createarray.prototype.arrayformat = function()
{
    console.log(Object.values(array))
}

array.arrayformat()