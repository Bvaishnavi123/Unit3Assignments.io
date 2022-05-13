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



let movie_data = JSON.parse(localStorage.getItem("moviess"))
console.log(movie_data)
display_movie_data(movie_data)

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
    let res = await fetch(`http://www.omdbapi.com/?apikey=4572366c&s=${title}`);
    let data = await res.json();

    console.log(data.Search);
    display_movie_data(data.Search);
  } catch (error) {
    let image = document.createElement("img");
    image.src =
      "https://media.istockphoto.com/photos/studio-shot-of-a-young-woman-looking-confused-against-a-blue-picture-id1321402702?b=1&k=20&m=1321402702&s=170667a&w=0&h=HVMTAp8JNFo4lY5NJXUZcgF4AT481rHNTwxvZsu32io=";
    image.setAttribute("id", "error");
     var c = document.createElement("h1")
     c.textContent="What You Want???????"
     c.style.fontFamily="sans-serif"

    document.querySelector("#moviecontainer").append(image,c);
  }
}

function display_movie_data(data) {
  document.querySelector("#moviecontainer").textContent = "";
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

    document.getElementById("moviecontainer").append(div1);
  });
}

let user_data = JSON.parse(localStorage.getItem("data1"))
console.log(user_data)

let name1 = user_data.username
let email = user_data.email
document.getElementById("info").append(name1)
document.getElementById("mail").append(email)