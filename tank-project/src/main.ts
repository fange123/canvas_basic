import config from './config'
import straw from'./canvas/straw'
import './style.scss'
//* 游戏开始前需要加载贴图等资源
import { promise } from './service/image'
import wall from './canvas/wall'


const app:HTMLDivElement= document.querySelector('#app')!
app.style.width = config.canvas.width +'px'
app.style.height = config.canvas.height+'px'

async function bootstrap(){
  //promise是数组
  await Promise.all(promise);
  //* 加载完了 可以在image这个Map里面拿图片资源了

  straw.render()//先加载贴图，再加载画布
  wall.render()//渲染砖墙


}

bootstrap()



