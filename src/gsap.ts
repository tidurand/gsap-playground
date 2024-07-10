import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { setWelcomeRoom } from './welcome'
import { setHideSections } from './set'

export const launchGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, Observer, TextPlugin)
  setHideSections()
  setWelcomeRoom()
  //tutorial()
  //first puzzle
}
