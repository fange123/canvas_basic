import config from '../config'
// * 创建父级的类

export default class CanvasAbstract{
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el:HTMLCanvasElement = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ){

    // # constructor参数使用了protected（或public等），外部使用可以不用写this
    el.width = config.canvas.width
    el.height = config.canvas.height

    canvas.fillStyle = 'yellow'
    canvas.fillRect(0,0,400,400)
    app.insertAdjacentElement('afterbegin',el)

  }

}
