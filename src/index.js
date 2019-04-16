import * as THREE from 'three'
import Rellax from 'rellax'
import 'normalize.css'

import '../lib/inviewport.min'
import './index.scss'

const rellax = new Rellax('.rellax')
const lyric = document.getElementById('lyric')

window.addEventListener('scroll', function() {
  if (lyric.inViewport(0.5, 0.5)) {
    lyric.classList.replace('hidden', 'fade')
  }
})
