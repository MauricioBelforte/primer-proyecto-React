import React from "react";
import Pelicula from "./pelicula";

const Peliculas = () => {
  const peliculas = [
    {
      titulo: "Terminator",
      genero: "Accion",
      director: "James Cameron",
      anio: "1996",
    },
    {
      titulo: "Ratatuille",
      genero: "Aventuras",
      director: "James Camerun",
      anio: "2000",
    },
    {
      titulo: "Avengers",
      genero: "Accion",
      director: "John Weig",
      anio: "2020",
    },
  ];

  return (
    <>
      <div>
        <h2>Peliculas</h2>
      </div>

      <div>Pelicula contenido</div>
      <br></br>
      {peliculas.map((cadaPelicula) => (
        <Pelicula datos={cadaPelicula}></Pelicula>

        /*  <> //Reemplace todos estos divs por el componente Pelicula verde de arriba
          <div>{cadaPelicula.titulo}</div>
          <div>{cadaPelicula.genero}</div>
          <div>{cadaPelicula.genero}</div>
          <div>{cadaPelicula.anio}</div>
        </> */
      ))}
    </>
  );
};

export default Peliculas;
