async function fetchPokemon () {
  for (let i = 1; i <= 20; i++) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(res => res.json())
      .then(data => pokemon(data))
      .catch(e => console.log(e))
  }
}

function pokemon (data) {
  // Contenedor padre
  const contenedorPokemon = document.querySelector(".contenedor-pokemon")

  // Div contenido
  const divContenido = document.createElement("div")

  // Div Imagen
  const divPokemonImg = document.createElement("div")
  divPokemonImg.classList.add("pokemon-img")

  // Imagen del pokemon
  const imagen = document.createElement("img")
  imagen.src = `${data.sprites.front_default}`
  divPokemonImg.appendChild(imagen)

  // Div Data
  const divPokemonData = document.createElement("div")
  divPokemonData.classList.add("pokemon-data")

  // Nombre, Id y Tipos del pokemon
  const nombre = document.createElement("h2")
  nombre.classList.add("nombre")

  const id = document.createElement("span")

  const divPokemonIdNombre = document.createElement("div")
  divPokemonIdNombre.classList.add("pokemon-id-nombre")

  if (data.id.toString().length < 2) {
    id.textContent = `#0${data.id}`
  } else {
    id.textContent = `#${data.id}`
  }
  divPokemonIdNombre.appendChild(id)

  nombre.textContent = data.name
  divPokemonIdNombre.appendChild(nombre)

  divPokemonData.appendChild(divPokemonIdNombre)

  // Tipos
  const tipos = data.types.map(array => array.type.name)
  const divTipos = document.createElement("div")
  divTipos.classList.add("pokemon-tipos")

  for (let i = 0; i < tipos.length; i++) {
    const span = document.createElement("span")
    span.classList.add("tipo" ,`${tipos[i]}`)
    span.textContent = tipos[i].toUpperCase()
    divTipos.appendChild(span)
  }
  divPokemonData.appendChild(divTipos)

  // Append
  divContenido.append(divPokemonImg, divPokemonData)
  contenedorPokemon.appendChild(divContenido)
}

fetchPokemon()
