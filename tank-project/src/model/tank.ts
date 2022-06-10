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

  switch (this.direction) {
    case directEnum.top:
      this.y--
      break;
    case directEnum.right:
      this.x++
      break;
    case directEnum.bottom:
      this.y++
      break;
    case directEnum.left:
      this.x--
      break;

    default:
      break;
  }
  super.draw()


}

//* 绘制坦克的图片要随机生成
image(){
  const direction = this.name + _.upperFirst(this.direction)
  //~lodash库的作用就是为了把首字母转成大写
  return image.get(direction as keyof typeof config.images)!

}



}
