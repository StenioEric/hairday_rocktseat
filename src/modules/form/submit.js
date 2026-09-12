import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// Date atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data mínima como a atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    // Previne que carregue a página
    event.preventDefault()


    try {
        // Recuperando o nome do cliente.
        const name = clientName.value.trim()

        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        // Verifica se o usuário selecionou um horário
        if (!hourSelected) {
            return alert("Selecione a hora")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        // Recupera a data selecionada e adiciona a hora selecionada para criar um objeto dayjs com a data e hora do agendamento
        // hour é a hora selecionada, e "hour" é a unidade de tempo
        const when = dayjs(selectedDate.value).add(hour, "hour") 


        // Gera um ID
        const id = new Date().getTime()

        console.log({
            id,
            name,
            when,
        })


    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}
