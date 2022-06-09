import config from '../config'
import position from '../service/position';
// * 创建父级的类

export default abstract class CanvasAbstract{
  //* items是用来在不同实例中记录不同对象的数据：比如记录坦克的数量，草地的数量，子弹的轨迹等等
  protected model:IModel[] = []
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
  protected createModels(n:number,model:IModelConstructor){
    //渲染多个草坪
    position.getPosition(n).forEach((position)=>{
      const instance = new model(this.canvas,position.x,position.y)
      this.model.push(instance)

    })
  }

  protected renderModels(){
    this.model.forEach(model=>model.render())
  }



}
