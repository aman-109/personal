
async function main(url){
    let res = await fetch(url)
    let data = res.json()

    return data
}


export default main