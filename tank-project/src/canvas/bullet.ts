import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/bullet"

//* 创建水坑的实例
export default new (class Bullet extends CanvasAbstract implements ICanvas{
  number(): number {
    return config.water.num
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    super.createModels()
    super.renderModels()
  }


})('bullet')



