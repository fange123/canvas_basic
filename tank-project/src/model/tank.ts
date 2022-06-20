import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import { directEnum } from "../enum/positionEnum";
import _ from 'lodash'
import config from "../config";

export default class extends ModelAbstract implements IModel{
  name: string = 'tank';

  render(): void {
    super.draw()
   this.move()
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

  if(this.isTouch(x,y)=== true){
    //~如果碰撞到了，就再次获取随机方位
    this.randomPosition()
  }else {
    this.x = x
    this.y = y
    break
  }
 }


}

//* 检测坦克是否碰撞的方法
protected isTouch(x:number,y:number):boolean{
//边界判断
if(x < 0 || x+this.width > config.canvas.width || y < 0 || y+this.height > config.canvas.height){
  return true

}
return false


}

//* 绘制坦克的图片要随机生成
image(){
  const direction = this.name + _.upperFirst(this.direction)
  //~lodash库的作用就是为了把首字母转成大写
  return image.get(direction as keyof typeof config.images)!

}



}
