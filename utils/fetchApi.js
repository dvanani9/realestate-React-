import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async(url)=>{
      const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fda2cf7df9msh454534a361650e0p1a07a1jsn0885ff88abdd',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        });
      return data;
  }

