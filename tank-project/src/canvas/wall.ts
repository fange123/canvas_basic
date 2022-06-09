import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/wall"

//* 创建砖墙的实例
class Wall extends CanvasAbstract{
  number(): number {
    return config.wall.num
  }
  model(): IModelConstructor {
   return model
  }
  constructor(){
    super()
    super.createModels()

  }

  render(): void {
    super.renderModels()
  }


}


export default new Wall()
