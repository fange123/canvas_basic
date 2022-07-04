import bullet from "../canvas/bullet";
import config from "../config";
import { directEnum } from "../enum/positionEnum";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import util from '../util'

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = bullet;
  image(): HTMLImageElement {
    return image.get('bullet')!
  }

  constructor(public tank:IModel){
    super(tank.x+config.model.width/2,tank.y+config.model.height/2);
    this.direction =tank.direction as unknown as directEnum
  }
  name: string = 'bullet';
  render(): void {
    let x =  this.x
    let y =  this.y
    switch (this.direction) {
      case directEnum.top:
      y -= 2
        break;
      case directEnum.right:
     x += 2
        break;
      case directEnum.bottom:
      y += 2
        break;
      case directEnum.left:
      x -= 2
        break;

      default:
        break;
    }
    if(util.isCanvasTouch(x,y,2,2)){
      //移除模型
      this.destroy()
    }else{
    this.x = x
    this.y = y
    this.draw()}

  }
//* 重写draw方法，让自定义子弹的大小
   protected draw(){
      this.canvas.ctx.drawImage(this.image(), this.x,this.y,2,2)
  }

}
