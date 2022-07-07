import CanvasAbstract from "./canvas";
import model from "../model/player"
import config from "../config";

//* 创建玩家坦克的实例
export default new(class Player extends CanvasAbstract implements ICanvas{
  number(): number {
    return 0
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    this.createModels()
    super.renderModels()
  }


  protected createModels(){

    [{
      x:config.canvas.width/2+3*config.model.width,y:config.canvas.height-config.model.height
    }].forEach((position)=>{
      const model = this.model()as IModelConstructor
      const instance = new model(position.x,position.y)
      this.models.push(instance)

    })
  }


})('player')
