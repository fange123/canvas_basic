import config from "../config";
import { image } from "../service/image";

//*定义模型的抽象父类，方便子类继承
export abstract class  ModelAbstract{
  abstract render():void
  constructor(
    protected canvas:CanvasRenderingContext2D,protected x:number, protected y:number){

  }

  protected draw(){
      this.canvas.drawImage(image.get('straw')!, this.x,this.y,config.model.width,config.model.height)
  }
}
