

// export const GifItem = ({img}) => {
  export const GifItem = ({title,url,id}) => {
  
  // console.log(img.title,img.url);
  // console.log({title,url,id});

  return (
    <div className="card">

        <img src={url} alt={title} />

    </div>
    
  )
}
{/* <li key = {id} > {title} </li> */}