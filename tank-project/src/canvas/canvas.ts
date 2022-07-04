import config from '../config'
import position from '../service/position';
// * 创建父级的类

// ~抽象类有两个非常典型的特点：

// ~1.不能实例化
// ~2.抽象类的非抽象继承子类必须重写抽象类的所有抽象方法

export default abstract class CanvasAbstract{
  //* items是用来在不同实例中记录不同对象的数据：比如记录坦克的数量，草地的数量，子弹的轨迹等等
  public models:IModel[] = []
  abstract number():number
  abstract model():IModelConstructor
  //定义一个抽象方法
  abstract render():void;
  constructor(
    protected name:string,
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el:HTMLCanvasElement = document.createElement('canvas'),
    public ctx = el.getContext('2d')!
  ){
    this.createCanvas();
  }

  //* 绘制canvas
  protected createCanvas(){
   this. el.width = config.canvas.width
    this.el.height = config.canvas.height
    this.el.setAttribute('name',this.name)
    this.app.insertAdjacentElement('afterbegin',this.el)
  }

  //* 画对象模型
  protected createModels(){
    //渲染多个草坪
    position.getPosition(this.number()).forEach((position)=>{
      const model = this.model()
      const instance = new model(position.x,position.y)
      this.models.push(instance)

    })
  }

  //* 将模型渲染到画布上
  protected renderModels(){
    this.models.forEach(model=>{
      model.render()
    })
  }



}
