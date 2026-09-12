import {schedulesDay} from "./schedules/load.js"

// Aguarda o carregamento completo do DOM antes de executar a função schedulesDay
document.addEventListener("DOMContentLoaded", function() { 
    schedulesDay()
})