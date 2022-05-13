// making API call

async function makeAPICall(url)
{
    try {
        let res = await fetch(url)
        let data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}


function append(data,parent)
{
    data.map(function(el)
    {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.urls.small;

        div.append(image)
        parent.append(div)

    })
}

export {makeAPICall,append}