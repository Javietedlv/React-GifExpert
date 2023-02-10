import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

const [Images, setImages] = useState([])
const [isLoading, SetisLoading] = useState(true)


  useEffect(()=>{
    getGifs(category)
    .then(newImages => setImages(newImages));
    SetisLoading(false);    
  },[])



  return {
    // Images: Images,
    // isLoading: isLoading
    Images, 
    isLoading
  }
}

