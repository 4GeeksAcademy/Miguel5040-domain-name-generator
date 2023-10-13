/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronombre = ["el", "nuestro"];
  let adj = ["gran", "pequeño"];
  let sustantivo = ["tigre", "gato"];
  let extension = [".com", ".net", ".io", ".es"];

  for (let i = 0; i < pronombre.length; i++) {
    for (let e = 0; e < adj.length; e++) {
      for (let a = 0; a < sustantivo.length; a++) {
        for (let u = 0; u < extension.length; u++) {
          const dominioFinal =
            pronombre[i] + adj[e] + sustantivo[a] + extension[u];
          console.log(dominioFinal);
        }
      }
    }
  }
};
