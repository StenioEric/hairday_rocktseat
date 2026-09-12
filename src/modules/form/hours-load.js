import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

// Pega o elemento pelo id "hours" do HTML
const hours = document.getElementById("hours")

// Essa função é responsável por carregar os horários disponíveis na tela, com base na data selecionada. 
// Ela verifica se cada horário está no passado ou não, e renderiza os horários disponíveis e indisponíveis na lista. 
// Além disso, adiciona um evento de clique nos horários disponíveis para permitir a seleção do horário desejado.

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => { // Itera sobre cada horário definido no array openingHours
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":") // Divide a string do horário em hora e minuto, pegando apenas a hora

        // Adiciona a hora na date e verifica se está no passado.
        const isHourFuture = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return ({
            hour,
            available: isHourFuture,
        })
    })


    // Renderizar os horários que estão disponíveis e indisponíveis na lista
    opening.forEach(({hour, available}) => {
        const li = document.createElement("li") // Cria um elemento li para cada horário

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Adiciona o evento de clique nos horários disponíveis
    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}