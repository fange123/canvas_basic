import config from "../config";
import { directEnum } from "../enum/positionEnum";

//*定义模型的抽象父类，方便子类继承
export abstract class  ModelAbstract{
  public direction:directEnum = directEnum.top
  public width = config.model.width
  public height = config.model.height

  abstract image():HTMLImageElement
  public abstract canvas:ICanvas

  abstract render():void
  abstract name:string
  constructor(
    public x:number, public y:number){
      this.randomPosition()
  }

  //* 在画布渲染，不需要在模型里面渲染
  protected draw(){
      this.canvas.ctx.drawImage(this.image(), this.x,this.y,config.model.width,config.model.height)
  }
//* 随机产生方向
  protected randomPosition(){
    this.direction = Object.keys(directEnum)[Math.floor(Math.random()*4)] as directEnum
  }

  protected destroy(){
    this.canvas.removeModel(this)
  }
}
