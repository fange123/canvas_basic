import config from './config'
import './style.scss'


const app:HTMLDivElement= document.querySelector('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height+'px'

