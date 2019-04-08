import { showAlert } from "./messages";
import $ from 'jquery';

// Importar los estilos
import"./styles.scss";
document.getElementById("btn-alert").addEventListener("click",showAlert);

$('#btn-jquery').click(()=>alert("alert con funcion flecha"));