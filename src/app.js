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

  for (let pro of pronombre) {
    for (let adje of adj) {
      for (let sus of sustantivo) {
        for (let ext of extension) {
          const dominioFinal = pro + adje + sus + ext;
          console.log(dominioFinal);
        }
      }
    }
  }
};
