import { getUrlImg } from "./view"


test('deberia retornar la imagen del poster',()=>{
    const resultadoFinal = "https://image.tmdb.org/t/p/w500/prueba"
    const pruebaFuncion = getUrlImg('/prueba')

    expect(pruebaFuncion).toBe(resultadoFinal)
})