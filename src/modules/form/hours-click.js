export function hoursClick() {
    // Seleciona todas as horas disponíveis
    const hours = document.querySelectorAll(".hour-available")

    // Adiciona um evento de click em cada hora disponível
    // available são todas as li com a class hour-available
    hours.forEach((available) => {
        // Selected é o evento de click que retorna a li depois de clicada
        available.addEventListener("click", (selected) => {

            // Remove a class hour-selected de todas as li não selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            // A partir do li clicada(selected.target), adiciona a class hour-selected  
            selected.target.classList.add("hour-selected")
        })
    })
}
// Essa função é responsável por adicionar a classe "hour-selected" 
// ao horário clicado e remover essa classe de todos os outros horários disponíveis.
