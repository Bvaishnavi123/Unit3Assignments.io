async function getdata(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

function append(data,parent)
{
    data.map(function(el)
    {
        let div = document.createElement("div")

        let title = document.createElement("p")
        title.textContent=el.title

        let image = document.createElement("img")
        image.src = el.image
        image.setAttribute("id","images")

        div.append(title,image)
        parent.append(div)
    })
}

export{getdata,append}