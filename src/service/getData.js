export async function getData(){
    try{

      const response = await fetch("https://w3yz.com/api/ch")

      const data = await response.json()

      const imageList= data.products.map(item => item.imagelist[0])

      const urlList = imageList.map(item => item.url)

      return urlList

    } catch(error) {
      console.log(error)
    }
  }