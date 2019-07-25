export function SetImages(images) {
    let newImages = []

    for(let i = 0; i < images.length; i++) {
        newImages.push({
            source: {
                uri: images[i],
            }
        })
    }

    return newImages
}