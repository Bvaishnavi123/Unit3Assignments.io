var array_images_url = [
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Dfswat23Cr4sJjL-Y8W7jZdiXVttuZ_bjt72twzJ-kO3VFPT9D_kND2yQTU&s=10"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHlYUbE1r48G0l0ESeR5ngGutsPvnMUwIKA&usqp=CAU"},
    {url:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/top_grossing_bollywood_movies_of_2020.jpg"},
    {url:"https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/top_grossing_bollywood_movies_of_2020.jpg"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Dfswat23Cr4sJjL-Y8W7jZdiXVttuZ_bjt72twzJ-kO3VFPT9D_kND2yQTU&s=10"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJO8RUOYMCfh_ukxLDV-q98XbzSoUkYTBOA&usqp=CAU"},
    
   
   
]


function start()
{
    let images = document.querySelector("#imagespic")
    let i = 0;

    setInterval(function(){
       if(i==array_images_url.length)
       {
           i=0;
       }
        images.src = array_images_url[i].url
        i=i+1;

       
        
    },2000)
   
}

var movie_array = JSON.parse(localStorage.getItem("movies"))
display(movie_array)
// console.log(movie_array)

document.getElementById("sort").addEventListener("change",myfunction)

    function myfunction()
    {
      var selected = document.getElementById("sort").value;

      if(selected=="high")
      {
        movie_array.sort(function(a,b)
        {
            return b.rating - a.rating
        })

       
      }
      if(selected=="low")
      {
        movie_array.sort(function(a,b)
        {
            return a.rating - b.rating
        })

       
      }

      display(movie_array)
    }

function display(movie_array)
{
    document.querySelector("#movies").innerHTML=""
    movie_array.map(function(elem)
    {
        var div1 = document.createElement("div")
        div1.setAttribute("id","singlemovie")

        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        div3.setAttribute("id","div3")

        var images = document.createElement("img")
        images.src = elem.posterurl
        images.setAttribute("id","fit")

        var name = document.createElement("h2")
        name.textContent=elem.name
      
        var date = document.createElement("p")
        date.textContent=elem.releaseDate

        var ratings = document.createElement("p")
        ratings.textContent=elem.rating
        
       
        div2.append(images)
        div3.append(name,date,ratings)
        div1.append(div2,div3)
        document.querySelector("#movies").append(div1)

    })

    
    
}