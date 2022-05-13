var array_images_url = [
    {
      url: "https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZXJ0aXNlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVHlYUbE1r48G0l0ESeR5ngGutsPvnMUwIKA&usqp=CAU",
    },
    {
      url: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/top_grossing_bollywood_movies_of_2020.jpg",
    },
    {
      url: "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/top_grossing_bollywood_movies_of_2020.jpg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Dfswat23Cr4sJjL-Y8W7jZdiXVttuZ_bjt72twzJ-kO3VFPT9D_kND2yQTU&s=10",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatDy1Z2JIXRgxVepM1U_V1WHSxwYYZDhHjw&usqp=CAUg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKZfv_OGaHXpE6Zkiftzn6pr-NJmgdu-FJQ&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuDk9mOVuZ29u7RQi7yUlsTWgJ6bEeP1hLEA&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-psKSpWPyx6CooWrTXMnhCbiRoNdY1zkBQ&usqp=CAU",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4dsW75iIb2H9k1w_tI3aMgEm6Y_4yRLwug&usqp=CAU",
    },
  ];
  
  var moviedata = [
    {
      Title: " Spider-Man: No Way Home ",
      Year: "2021",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnan3-DB8cjCsxF09ja7esV_eKXgN7KriKg&usqp=CAU",
      imdbID: 8.9,
    },
    {
      Title: "Jai Bhim ",
      Year: "2021",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQY2uc9xSpojRqFR5JZN4XCuVSRvreSXgnA&usqp=CAU",
      imdbID: 8.6,
    },
    {
      Title: "Dune ",
      Year: "2021",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc-fbWhXRTiSP9pfenR8UVUHDtb0oDxn1yw&usqp=CAU",
      imdbID: 8.4,
    },
    {
      Title: "Drishyam 2 ",
      Year: "2021",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhm6ZyCRR-zVvpSK7G_7D1lA-pLQZiS51sQ&usqp=CAU",
      imdbID: 8,
    },
    {
      Title: " Soorarai Pottru ",
      Year: "2020",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2Loque1GOUurw3ImEXkaj6izOASrjREWzA&usqp=CAU",
      imdbID: 7,
    },
    {
      Title: "  The Shawshank Redemption  ",
      Year: "1994",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMKGWKdKKt0hqanF5u0qqlCbR-4FUr4_D0XQ&usqp=CAU",
      imdbID: 9,
    },
    {
      Title: "  The Godfather: Part II  ",
      Year: "1974",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6V90jF9TJwmSWPZTTM0RVx5rObB0c6KEpg&usqp=CAU",
      imdbID: 9.1,
    },
    {
      Title: "   The Hunt  ",
      Year: "2012",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7zUILVevaYw1botNWaGe_Izzt_LamSZanw&usqp=CAU",
      imdbID: 8.3,
    },
  
    {
      Title: "  Avengers: Infinity War  ",
      Year: "2018",
      Poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vj0BCrXPHLtlNXKF27oisMLYUzWPXNVvRQ&usqp=CAU",
      imdbID: 8.4,
    },
  ];
  
  // let movie_data = JSON.parse(localStorage.getItem("moviess"))
  // console.log(movie_data)
  display_movie_data(moviedata)
  
  function start() {
    var image = document.getElementById("imagespic");
    i = 0;
  
    setInterval(function () {
      if (i == array_images_url.length) {
        i = 0;
      }
  
      image.src = array_images_url[i].url;
      i = i + 1;
    }, 6000);
  }
  
  
  async function search_movie() {
    try {
      let title = document.getElementById("name").value;
      //    console.log(title)
      let res = await fetch(`https://www.omdbapi.com/?apikey=4572366c&s=${title}`);
      let data1 = await res.json();
  
      console.log(data1.Search);
      display_movie_data(data1.Search);
    } catch (error) {
      let image = document.createElement("img");
      image.src =
        "https://media.istockphoto.com/photos/studio-shot-of-a-young-woman-looking-confused-against-a-blue-picture-id1321402702?b=1&k=20&m=1321402702&s=170667a&w=0&h=HVMTAp8JNFo4lY5NJXUZcgF4AT481rHNTwxvZsu32io=";
      image.setAttribute("id", "error");
       var c = document.createElement("h1")
       c.textContent="What You Want???????"
       c.style.fontFamily="sans-serif"
  
      document.querySelector("#moviecontainer1").append(image,c);
    }
  }
  
  function display_movie_data(data) {
    document.querySelector("#moviecontainer1").textContent = "";
    data.map(function (elem) {
      var div1 = document.createElement("div");
      div1.setAttribute("id", "singelmovie");
  
      var poster = document.createElement("img");
      poster.src = elem.Poster;
      poster.setAttribute("id", "poster");
  
      var release_date = document.createElement("h3");
      release_date.textContent = elem.Year;
  
      var title = document.createElement("h1");
      title.textContent = elem.Title;
  
      var imdbID = document.createElement("p");
      imdbID.textContent = `imdbID :  ${elem.imdbID}`;
      
      if(elem.imdbID > 8)
      {
         var d = document.createElement("button").textContent="RECOMMENDED!!"
  
      }
      else{
        d=""
      }
  
      div1.append(d,title, poster, release_date, imdbID);
  
      document.getElementById("moviecontainer1").append(div1);
    });
  }

  async function main()
  {
    try {

      let name = document.getElementById("name").value
     

      let res = await  fetch(`https://www.omdbapi.com/?apikey=4572366c&s=${name}`)

      let data = await res.json()
      return data.Search
      
    } catch (error) {
      console.log(error)
    }
    
  }

  async function search()
  {
    let data = await  main()

   if(data==undefined)
   {
     return
   }
  
  

   append(data)
   
  }

  function append(d)
  {
    document.getElementById("tosearchdata").textContent=""
    // console.log(d)
    d.map(function(el)
    {
      
      let div1 = document.createElement("div")
      div1.setAttribute("id","singlesearch")

      let image = document.createElement("img")
      image.src=el.Poster
      image.setAttribute("id","images")

      let div4= document.createElement("div")
      div4.setAttribute("id","year_title")

      let year_of_release = document.createElement("p")
      year_of_release = `Year of release ${el.Year}`
      
      let br = document.createElement("br")

      let title = document.createElement("p")
      title=el.Title
     


     div4.append(title,br,year_of_release)

     div1.append(image,div4)

     document.getElementById("tosearchdata").append(div1)
     


    })
  }

  let timeID
 function debounce(func,delay)
 {
   if(timeID)
   {
     clearTimeout(timeID)
   }

   timeID =  setTimeout(function()
   {
    let name = document.getElementById("name").value
    if(name=="")
    {
      document.getElementById("tosearchdata").textContent=""
    }
    else{
     func()

    }
   },delay)
 }


