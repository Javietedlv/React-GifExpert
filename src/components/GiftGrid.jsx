
import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GiftGrid = ({category}) => { 


  const {Images, isLoading }= useFetchGifs (category);




  return (
    <>
    <h3> {category} </h3>

      {
        isLoading
        ?(<h2> Cargando... </h2>)                         //if is loading = true (Muestra mensaje)
        :null                                             //Else: null nada
      }                                                   

      <div className="card-grip" >
          {Images.map((img) =>( 
            // <li key = {id} > {title} </li>
            <GifItem 
            key = {img.id}
            {...img}  
            />
          )) }

      </div>
    </>
  )
}



