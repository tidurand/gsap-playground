import { gsap } from 'gsap'

export const setHideSections = () => {
  const sectionDev = document.querySelector('.section_dev') as HTMLElement
  gsap.set(sectionDev, { display: 'none' })
}
