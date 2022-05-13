import navbar from "./components/navabar.js";
// console.log(navbar)

import {getdata,appendData} from "./scripts/showdata.js"


let navbar_div = document.getElementById("navbar-container")
navbar_div.innerHTML=navbar()


let url ="https://fakestoreapi.com/products/category/electronics"

let res = await getdata(url)
// console.log(res)
let parent = document.getElementById("data")

appendData(res,parent)

