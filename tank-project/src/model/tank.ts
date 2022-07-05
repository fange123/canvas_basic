import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import { directEnum } from "../enum/positionEnum";
import _ from 'lodash'
import config from "../config";
import tank from "../canvas/tank";
import util from "../util";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = tank;
  name: string = 'tank';

  render(): void {
   this.move()
   //* 增加坦克向下移动的概率
   if(Math.floor((Math.random()+1) * 5) > 8){
    this.direction = directEnum.bottom

   }
  }

protected move(){
 while(true){
  let x = this.x
  let y = this.y
  switch (this.direction) {

    case directEnum.top:
      y--
      break;
    case directEnum.right:
      x++
      break;
    case directEnum.bottom:
      y++
      break;
    case directEnum.left:
      x--
      break;

    default:
      break;
  }

  super.draw()

  if(util.isModelTouch(x,y) || util.isCanvasTouch(x,y)){
    //~如果碰撞到了，就再次获取随机方位
    this.randomPosition()
  }else {
    this.x = x
    this.y = y
    break
  }
 }


}



//* 绘制坦克的图片要随机生成
image(){
  const direction = this.name + _.upperFirst(this.direction)
  //~lodash库的作用就是为了把首字母转成大写
  return image.get(direction as keyof typeof config.images)!

}



}
