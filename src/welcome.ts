import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const setWelcomeRoom = () => {
  titleAnimation()
  textAnimation()
  openDoor()
}

const titleAnimation = () => {
  const section = document.querySelector('#section_hero') as HTMLElement
  const helper = document.querySelector('.helper_gsap') as HTMLElement
  const text = section.querySelector('#hero_color_trigger') as HTMLElement

  const colors = ['black', 'white', 'black', '#00FF19', 'black']
  const directions = ['to left', 'to bottom', 'to right', 'to top']
  const textColors = ['white', 'black', 'white', 'black', 'black']

  ScrollTrigger.create({
    trigger: section,
    start: `top top`,
    end: `${(colors.length - 2) * 150}vh top`,
    pin: true,
    scrub: true,
  })

  colors.slice(0, -1).forEach((color, index) => {
    gsap.to(section, {
      backgroundColor: color,
      scrollTrigger: {
        trigger: helper,
        start: `${index * 150}vh top`,
        end: `${(index + 1) * 150}vh top`,
        scrub: true,
        onUpdate: (self) => {
          const progress = Number(self.progress.toFixed(2))

          section.style.background = `linear-gradient(${directions[index]}, ${colors[index + 1]} ${progress * 100}%, ${colors[index]} ${progress * 100}%)`
          text.style.background = `linear-gradient(${directions[index]}, ${textColors[index + 1]} ${progress * 100}%, ${textColors[index]} ${progress * 100}%)`
          text.style.backgroundClip = 'text'
          text.style.color = 'transparent'
        },
      },
    })
  })
}

const textAnimation = () => {
  const section = document.querySelector('.section_text') as HTMLElement
  const text = section.querySelector('.text_change') as HTMLElement
  gsap.set(section, { y: '-40vh', zIndex: 100 })
  text.innerText = ''

  const texts = [
    'Until the end',
    '',
    "But it won't be that easy",
    '',
    'Sometimes, you will be block',
  ]

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: '10% 40%',
      end: '=+1500',
      scrub: true,
      pin: true,
      id: 'text',
    },
  })

  texts.forEach((str, index) => {
    timeline.to(
      text,
      {
        text: { value: str, delimiter: '' },
        duration: 1,
      },
      index,
    )
  })
}

const openDoor = () => {
  const doorHitbox = document.querySelector('.door_hit-box') as HTMLElement
  const doorOpen = document.querySelector('.door_open') as HTMLElement
  const doorClose = document.querySelector('.door_close') as HTMLElement

  gsap.defaults({
    ease: 'linear',
    duration: 0.5,
  })

  const openAnimation = () => {
    gsap.to(doorOpen, {
      opacity: 1,
    })
    gsap.to(doorClose, {
      opacity: 0,
    })
  }

  doorHitbox.addEventListener('click', openAnimation)
}
