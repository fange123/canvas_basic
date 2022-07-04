import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/wall"

//* 创建砖墙的实例
export default new(class Wall extends CanvasAbstract implements ICanvas{
  number(): number {
    return config.wall.num
  }
  model(): IModelConstructor {
   return model
  }


  render(): void {
    super.createModels()
    super.renderModels()
  }


})('wall')
