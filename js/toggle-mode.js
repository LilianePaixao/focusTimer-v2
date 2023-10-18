//true é verdadeiro pq está sem a classe light
let darkMode = true

const buttonTo = document.getElementById('toggle-mode')

buttonTo.addEventListener('click', (event) =>{
  //pegar html geral
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'light': 'dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado !`

  //quando eu clicar outra vez, é necessário variar o modo
  darkMode = !darkMode
})
