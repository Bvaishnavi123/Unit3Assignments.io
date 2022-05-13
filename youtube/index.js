// youtube key = AIzaSyCuQE_L3Ac84gDynBNShds26HKN9ie6ogo


// AIzaSyCXdiWT__y119UuDrdpuFbTy2Z6a_VuFP8


async function getdata()
{
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCuQE_L3Ac84gDynBNShds26HKN9ie6ogo`)

    let data = await res.json()
    console.log(data)
}
getdata()
