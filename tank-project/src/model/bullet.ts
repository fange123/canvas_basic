import bullet from "../canvas/bullet";
import config from "../config";
import { directEnum } from "../enum/positionEnum";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import util from '../util'
import wall from "../canvas/wall";
import water from "../canvas/water";
import steel from "../canvas/steel";
import boss from "../canvas/boss";
import tank from "../canvas/tank";
import player from "../canvas/player";

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
    const step = this.tank.name === 'player' ? 20 : 1
    switch (this.direction) {
      case directEnum.top:
      y -= step
        break;
      case directEnum.right:
     x += step
        break;
      case directEnum.bottom:
      y += step
        break;
      case directEnum.left:
      x -= step
        break;

      default:
        break;
    }

    const touchModel = util.isModelTouch(x,y,2,2,[...wall.models,...water.models,...steel.models,...boss.models,...tank.models,...player.models])//子弹碰到了应该消失掉的模型
    if(util.isCanvasTouch(x,y,2,2)){
      //移除模型
      this.destroy()
    }else if(touchModel && touchModel.name !== this.tank.name){//子弹不能打爆自己或者队友
      this.destroy()
      //  子弹碰到steel类型的模型的墙不可以被销毁
      if(touchModel.name !== 'steel') touchModel.destroy()//模型自我销毁
      this.blast(touchModel)
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
