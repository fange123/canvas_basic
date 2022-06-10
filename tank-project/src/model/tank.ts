import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import { directEnum } from "../enum/positionEnum";
import _ from 'lodash'
import config from "../config";

export default class extends ModelAbstract implements IModel{
  name: string = 'tank';

  protected direction:directEnum = directEnum.top
  render(): void {
    this.randomPosition()
    super.draw(this.renderImage())
  }
//* 绘制坦克的图片要随机生成
renderImage(){
  const direction = this.name + _.upperFirst(this.direction)
  //~lodash库的作用就是为了把首字母转成大写
  return image.get(direction as keyof typeof config.images)!

}

//* 随机产生方向

randomPosition(){
  this.direction = Object.keys(directEnum)[Math.floor(Math.random()*4)] as directEnum
}

}
