import { getDiscoveryMovie, getPopularMovie } from "./data/dataset";
import { renderItems } from "./view";

let data = await getDiscoveryMovie()
console.log(data)
const dataOriginal = [...data ]
const ul = await renderItems(data)
const root = document.getElementById("root");
root.appendChild(ul);

const selectPopular = document.getElementById('filtroPopular')
console.log(selectPopular)
selectPopular.addEventListener("input", async () => {
    const Popularselect = selectPopular.value
    console.log(Popularselect)
    if (Popularselect == "populares") {
        data = await getPopularMovie()
        const items = await renderItems(data)
        root.textContent = ""
        root.appendChild(items)

    }
    else {
        console.log(dataOriginal)
        const todasItems = await renderItems(dataOriginal)
        data = dataOriginal
        root.textContent = ""
        root.appendChild(todasItems)
    }
})

const selectOrden = document.getElementById("ordenAsc-Desc")
console.log(selectOrden)
selectOrden.addEventListener("input", async() => {
    const ordenAz = selectOrden.value
    console.log(ordenAz)
    if (ordenAz == "asc") {
        data = data.sort((a, b) => {
            console.log(a,b)
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return -1


            }
            else {
                return 1
            }
        })
        console.log(data)
        const ordenItems=await renderItems(data)
        root.textContent=""
        root.appendChild(ordenItems)



    }
    else {
        data = data.sort((a, b) => {
            console.log(a,b)
            if (a.title.toUpperCase() < b.title.toUpperCase()) {
                return 1


            }
            else {
                return -1
            }
        })
        console.log(data)
        const ordenItems=await renderItems(data)
        root.textContent=""
        root.appendChild(ordenItems)


    }

})

