import config from '../config'
import imgUrl from  '../static/images/straw/straw.png'
// * 创建父级的类

export default class CanvasAbstract{
  //* items是用来在不同实例中记录不同对象的数据：比如记录坦克的数量，草地的数量，子弹的轨迹等等
  protected items = []
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el:HTMLCanvasElement = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ){
    this.createCanvas();
    this.drawModels()
  }

  //* 绘制canvas
  protected createCanvas(){
   this. el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin',this.el)
  }

  //* 画对象模型
  protected drawModels(){
    const img = document.createElement('img')
    img.src = imgUrl
    const position  = this.position() ;
    //# 图片加载是异步的，需要加载完再绘制
        img.addEventListener('load', () => {
          this.canvas.drawImage(img, position.x,position.y,config.model.width,config.model.height);
        });

  }

  //* 模型的随机位置的计算
  protected position(){
    return {
      x:40,
      y:80
    }
  }

}
