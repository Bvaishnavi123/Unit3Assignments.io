let key = "53941fa98e9862077147a68af131b707";


let map = document.querySelector("#gmap_canvas")

// async function dailydata()
// {
//     let city = document.getElementById("city").value;
//     let res = await fetch(
//       ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key} `
//     );

//     let data = await res.json(); 

//     console.log(data)
// }


async function getWeatherData() {

  try {
    let city = document.getElementById("city").value;
    let res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric `
    );

    let data = await res.json();
    // dailydata()
    display(data);
  } catch (error) {
    alert(error);
  }
}

function display(data) {
  // console.log(data);

  document.getElementById("weatherinfo").textContent=""
//   data.map(function (elem) {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "siglecityinfo");

    let name = document.createElement("h1");
    name.textContent = data.name;

    let temp = document.createElement("h3");
    temp.textContent = `Tempreture is ${data.main.temp}°C`;

    let humidity = document.createElement("h3");
    humidity.textContent = `Humidity is ${data.main.humidity}`;

    let pressure = document.createElement("h3");
    pressure.textContent =` Pressure is ${data.main.pressure}`;
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    div1.append(name, temp, humidity, pressure);
    
    document.getElementById("weatherinfo").append(div1);
//   });
}
