import type { Webflow } from '@finsweet/ts-utils'
import { launchGSAP } from './gsap'

declare const Webflow: Webflow

Webflow.push(() => {
  launchGSAP()
})
