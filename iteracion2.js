const express = require("express");
const app = express();

/*
#### Ejercicio 1:

En este ejercicio utilizaremos la API de [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/). Leyendo su documentación, deberás hacer lo siguiente:

Crea tres definiciones de ruta para hacer fetching a la api y devolver un response con :

- la lista de razas de todos los perros.
- la url de una imagen random de una raza.
- Una lista con todas las imágenes de una raza concreta enviada vía req.params.

Recuerda que para estos ejercicios deberás utilizar node-fetch
*/

app.get("/allBreeds", (req, res) => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/randomBreed", (req, res) => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/byBreed/:random", (req, res) => {
  fetch("https://dog.ceo/api/breed/hound/images")
    .then((response) => response.json())
    .then((data) => {
      res.json(req.params.random + data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(4001, () => console.log("Server on..."));
