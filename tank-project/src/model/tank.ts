import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  render(): void {
    super.draw(this.renderImage())
  }
//* 绘制坦克的图片要随机生成
renderImage(){
  return image.get('tank')!

}

}
