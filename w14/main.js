function renderPhotos(photos) {
    photos.forEach((img) => {
        if (img.albumId === 1) {
            const imgEl = document.createElement("img");
            imgEl.setAttribute("src", img.thumbnailUrl);
            document.getElementById("output").appendChild(imgEl);
        }
    })
}

async function getPhotos() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const result = await data.json()
        renderPhotos(result)
        console.log(`SUCCESS: Images were fetched`)
    } catch(e) {
        console.log(`ERROR: ${e}`)
    }
}

getPhotos()

