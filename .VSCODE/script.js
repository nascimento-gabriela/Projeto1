function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatargabi-light.png")
  } else {
    // se tiver sem lignht mode, mnter a imagem normal
    img.setAttribute("src", "./assets/avatargabi.png")
  }
}
