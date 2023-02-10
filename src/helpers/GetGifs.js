
export const getGifs = async(category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=prOx3Pqz8aAJQxv3ooq9wpMvV8f0kFQ9&q=${category}&limit=10`;
    const Respuesta = await fetch( URL);
    const {data =[]} = await Respuesta.json();

    const gifs = data.map (img => {
      return{
        id: img.id,
        title:  img.title,
        url: img.images.downsized_medium.url 
      }
    })
 
  return gifs;
}
