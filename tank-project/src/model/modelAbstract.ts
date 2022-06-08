import config from "../config";
import { image } from "../service/image";

//*定义模型的抽象父类，方便子类继承
export abstract class  ModelAbstract{
  constructor(protected canvas:CanvasRenderingContext2D,protected x:number, protected y:number){
      canvas.drawImage(image.get('straw')!, x,y,config.model.width,config.model.height)

  }
}
