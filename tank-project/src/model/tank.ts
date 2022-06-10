import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import { directEnum } from "../enum/positionEnum";
import _ from 'lodash'
import config from "../config";

export default class extends ModelAbstract implements IModel{
  name: string = 'tank';

  render(): void {
    // super.draw()

    // //# 循环定时器让坦克动起来
    // setInterval(()=> {
    //   this.move()

    // },50)
  }

protected move(){
  //* 每次运动前需要清理一下画布，如果只清理坦克，坦克数量多的时候影响性能
  this.canvas.clearRect(this.x,this.y,config.model.width,config.model.height)
  switch (this.direction) {
    case directEnum.top:
      this.y-=2
      break;
    case directEnum.right:
      this.x+=2
      break;
    case directEnum.bottom:
      this.y+=2
      break;
    case directEnum.left:
      this.x-=2
      break;

    default:
      break;
  }
  //* 改变完方向再把坦克重绘一下
  super.draw(this.image())


}

//* 绘制坦克的图片要随机生成
image(){
  const direction = this.name + _.upperFirst(this.direction)
  //~lodash库的作用就是为了把首字母转成大写
  return image.get(direction as keyof typeof config.images)!

}



}
