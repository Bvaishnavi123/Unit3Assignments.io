//getdata ()

async function getdata(url)
{
    try {

        let res = await fetch(url)
    let data = await res.json()

    return data;
        
    } catch (error) {
        console.log(error)
    }
    
}




//appendData()

function appendData(data,parent)
{
    data.map((e)=>{

      let div = document.createElement("div")

      let title = document.createElement("p")
      title.textContent=e.title
      let image = document.createElement("img")
      image.src = e.image
      div.append(title,image)

      parent.append(div)
    })
  
}

export {getdata,appendData}; 