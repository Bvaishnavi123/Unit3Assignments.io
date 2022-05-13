// function greet()
// {
//     let n="naman"

//     return function()
//     {
//         console.log(n)
//     }
// }

// var x = greet()
// x()
 
async function searchmovie()
{
    try {
        let movie = document.getElementById("query").value
       let res = await fetch(`https://www.omdbapi.com/?apikey=4572366c&s=${movie}`)
       let data = await res.json()
       return data.Search
    } catch (error) {
        console.log(error)
    }
    


}

async  function main()
{
    let data = await searchmovie()

    if(data==undefined)
    {
        return
    }
    // console.log(data)
    append(data)

}

function append(movies)
{
    document.getElementById("movies").textContent=""
   movies.map(function(e)
   {
       let p = document.createElement("p")
       p.textContent=e.Title

       document.getElementById("movies").append(p)
   })
}

let timer_ID;
function debounce(func,delay)
{
    if(timer_ID)
    {
        clearTimeout(timer_ID)
    }
    timer_ID=  setTimeout(function()
    {
        func()
    },delay)
}

