import player from "../canvas/player";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import _ from "lodash";
import { directEnum } from "../enum/positionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = player;
  image(): HTMLImageElement {
    let direction =  this.name + _.upperFirst(this.direction)
    return image.get(direction as any)!
  }
  name: string = 'player';
  isBindEvent:boolean = false;//判断是否绑定事件
  render(): void {
    super.draw()
    if(!this.isBindEvent){
      this.isBindEvent = true;//只绑定一次，相当于一个锁
      // * 键盘事件改变方向
      document.addEventListener('keydown',(e)=>this.changeDirection(e))
      // * 键盘事件移动
      document.addEventListener('keydown',(e)=>this.move(e))
      // * 键盘事件发射子弹，按空格键发射
      document.addEventListener('keydown',(e:KeyboardEvent)=>{

        if(e.code ==='Space') bullet.addBullet()
      })

    }
  }

  changeDirection(e:KeyboardEvent){

    switch(e.code){
        case 'ArrowUp':
          this.direction = directEnum.top
          break;
        case 'ArrowRight':
          this.direction = directEnum.right
          break;
        case 'ArrowDown':
          this.direction = directEnum.bottom
          break;
        case 'ArrowLeft':
          this.direction = directEnum.left

          break;
      }
  }

  move(e:KeyboardEvent){
    let x = this.x
    let y = this.y

    switch(e.code){
        case 'ArrowUp':
          y-=10
          break;
        case 'ArrowRight':
          x+=10
          break;
        case 'ArrowDown':
          y+=10
          break;
        case 'ArrowLeft':
          x-=10
          break;

      }
//* 碰撞检测
if(util.isCanvasTouch(x,y) || util.isModelTouch(x,y)){
  //如果碰上边界或者规定的模型，就作废此次事件
  return
}
    this.x = x
    this.y = y
    this.canvas.renderModels()

  }

}
