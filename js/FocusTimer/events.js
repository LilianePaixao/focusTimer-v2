import { controls } from './elements.js'
import { icons } from './elements.js'
import * as actions from './actions.js'


export function registerControls() {
  //serão registrados todos os cliques

  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    if(typeof actions[action]  != "function"){
      return
    }

    actions[action]()

   
  })

  
}

export function registerIcons() {
 
  icons.addEventListener('click', (event) => {
    const sounds = event.target.dataset.sounds

    if(typeof actions[sounds]  != "function"){
      return
    }

    actions[sounds]()


  })

  
}