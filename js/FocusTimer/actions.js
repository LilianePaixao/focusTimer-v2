import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.toggle('running')
  timer.updateDisplay()
}

export function plusFive(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.plusFive()
}


export function minusFive(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.minusFive()
}

export function tree(){
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute){
    sounds.tree.play()
    return
  }

  sounds.tree.pause()
}

export function rain(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.rain.play()
    return
  }

  sounds.rain.pause()
}

export function store(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.cafe.play()
    return
  }
  sounds.cafe.pause()

}

export function fire(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    sounds.fire.play()
    return
  }
  sounds.fire.pause()
}