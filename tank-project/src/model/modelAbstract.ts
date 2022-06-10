import config from "../config";

//*定义模型的抽象父类，方便子类继承
export abstract class  ModelAbstract{
  abstract render():void
  abstract name:string
  constructor(
    protected canvas:CanvasRenderingContext2D,protected x:number, protected y:number){

  }

  protected draw(img:HTMLImageElement){
      this.canvas.drawImage(img, this.x,this.y,config.model.width,config.model.height)
  }
}
