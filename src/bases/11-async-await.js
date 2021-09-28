const getImagen = async() => {

try {

        const apiKey = 'RqK4YK4KN9L2bAUnn816OMy2ph0LCz2d';
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await peticion.json()

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

}catch (error) {
        console.error(error);
}

}

getImagen();

