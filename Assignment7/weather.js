let key = "53941fa98e9862077147a68af131b707";

let map = document.querySelector("#gmap_canvas");
var obj = [
  { day0: "SUN" },
  { day0: "MON" },
  { day0: "TUE" },
  { day0: "WED" },
  { day0: "THU" },
  { day0: "FRI" },
  { day0: "SAT" },
];
async function dailydata() {
  try {
    let city = document.getElementById("city").value;
    let res = await fetch(
      ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`
    );

    let data1 = await res.json();

    console.log(data1.list);

    sevendaydatadisplay(data1.list);
  } catch (error) {
    console.log(error);
  }
}

function sevendaydatadisplay(data1) {

  document.getElementById("sevenday").textContent=""
  // console.log(data1);
  let i = 0;
  data1.map(function (el) {
    let div1 = document.createElement("div");
    div1.setAttribute("id","eachdayweater")

    let day = document.createElement("h4");
    day.textContent = obj[i].day0;
    i++;

    let image = document.createElement("img");
    image.src = `http://openweathermap.org/img/wn/${el.weather[0].icon}.png`;

    let temp = document.createElement("h4")
    temp.textContent=`${el.main.temp}°C`

    let weather = document.createElement("h4")
    weather.textContent=el.dt_txt
   div1.append(day,image,temp,weather)
    document.getElementById("sevenday").append(div1);
  });
}

async function getWeatherData() {
  try {
    let city = document.getElementById("city").value;
    let res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric `
    );

    let data = await res.json();
    dailydata();
    display(data);
  } catch (error) {
    alert(error);
  }
}

function display(data) {
  console.log(data);

  document.getElementById("weatherinfo").textContent = "";
  //   data.map(function (elem) {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "siglecityinfo");

  let name = document.createElement("h1");
  name.textContent = data.name;

  let temp = document.createElement("h3");
  temp.textContent = `Tempreture is ${data.main.temp}°C`;
  

  let min_temp = document.createElement("h3");
  min_temp.textContent = `Minimum Tempreture is ${data.main.temp_min}°C`;

  let max_temp = document.createElement("h3");
  max_temp.textContent = `Maximum Tempreture is ${data.main.temp_max}°C`;
  
  

  let humidity= document.createElement("h3");
  humidity.textContent = `Humidity is ${data.main.humidity}`;

  let pressure = document.createElement("h3");
  pressure.textContent = ` Pressure is ${data.main.pressure}`;
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  div1.append(name, temp, humidity, pressure,min_temp,max_temp);

  document.getElementById("weatherinfo").append(div1);
  //   });
}
