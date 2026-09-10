import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Date atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como a atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne que carregue a página
    event.preventDefault()


    console.log("Enviado!")
}
