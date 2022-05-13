async function getdata()
{
    try {
        let res = await fetch('https://api.themoviedb.org/4/list/1?api_key=75c9a8a6f7a92ea1934916945b3c3217')
        let data = await res.json()
    
        // console.log(data.results)
        return data.results
        
    } catch (error) {

        console.log(error)
        
    }
   
}
// getdata()

async function main()
{
    
        let maindata = await getdata()
        // console.log(maindata)
        append(maindata)
    
   
}
main()
function append(d)
{
   d.map(function(e)
   {
       console.log(e)

       var div1 = document.createElement("div");
       div1.setAttribute("id","singlemovie")
   
       var poster = document.createElement("img");
       poster.src = `https://image.tmdb.org/t/p/w500/${e.poster_path}`;
       poster.setAttribute("id","poster")
      
   
       var release_date = document.createElement("h3");
       release_date.textContent = e.release_date;
   
       var title = document.createElement("h1");
       title.textContent = e.original_title;
   
       let overview = document.createElement("h4")
       overview.textContent=e.overview
       overview.style.fontFamily="sans-serif"
    
   
       div1.append(title, poster, release_date,overview);
   
       document.getElementById("moviecontainer").append(div1);
   })

}
