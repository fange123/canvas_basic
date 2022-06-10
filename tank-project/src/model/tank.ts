import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import { directEnum } from "../enum/positionEnum";

export default class extends ModelAbstract implements IModel{

  protected direction:directEnum = directEnum.top
  render(): void {
    super.draw(this.renderImage())
  }
//* 绘制坦克的图片要随机生成
renderImage(){
  const direction = this.randomPosition()
  return image.get('tankTop')!

}

//* 随机产生方向

randomPosition(){
  this.direction = Object.keys(directEnum)[Math.floor(Math.random()*4)] as directEnum
}

}
