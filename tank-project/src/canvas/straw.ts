import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/straw"

//* 创建草地的实例
class Straw extends CanvasAbstract{
  number(): number {
    return config.straw.num
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    super.createModels()
    super.renderModels()
  }


}


export default new Straw()
