import config from '../config'
import { image } from '../service/image';
// * 创建父级的类

export default abstract class CanvasAbstract{
  //* items是用来在不同实例中记录不同对象的数据：比如记录坦克的数量，草地的数量，子弹的轨迹等等
  protected items = []
  //定义一个抽象方法
  abstract render():void;
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el:HTMLCanvasElement = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ){
    this.createCanvas();
  }

  //* 绘制canvas
  protected createCanvas(){
   this. el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.app.insertAdjacentElement('afterbegin',this.el)
  }

  //* 画对象模型
  protected drawModels(n:number,model:any){
    //渲染多个草坪
    this.positionCollection(n).forEach((position)=>{
      new model(this.canvas,position.x,position.y)
    })
  }

  //* 批量随机生成,但是随机生成坐标可能有重复的，会导致贴图重叠
  protected positionCollection(n:number){
    const collection = [] as {x: number, y: number}[]
    for (let index = 0; index < n; index++) {
      //* 做个判断，不重复才push
      while(true){
        const position = this.position()
        const exist = collection.some(p=>p.x == position.x && p.y == position.y )
        if(!exist){
          collection.push(this.position())
          break;
        }
      }
    }
    return collection

  }

  //* 模型的随机位置的计算
  protected position(){
    return {
      x:Math.floor(Math.random()*(config.canvas.width/config.model.width))*config.model.width,
      y:Math.floor(Math.random()*(config.canvas.height/config.model.height))*config.model.height,
    }
  }

}
