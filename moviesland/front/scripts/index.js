const renderPelis = require("./renderPelis");
const axios = require("axios");
const API_URL = process.env.REACT_APP_API_URL;

const getMovies = async ()=> {
    try {
      const { data } = await axios.get(`${API_URL}/movies`);
      data.forEach(renderPelis);
    } catch (error) {
      console.log("La petición a la URL no se realizó correctamente");
      console.log(error.message);
    }
  }
  

document.addEventListener("DOMContentLoaded", ()=>{
    getMovies();
})

