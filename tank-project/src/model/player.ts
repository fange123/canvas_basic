import player from "../canvas/player";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import _ from "lodash";
import { directEnum } from "../enum/positionEnum";

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
      document.addEventListener('keydown',(e)=>this.changeDirection(e))

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


      this.canvas.renderModels()


  }

}
