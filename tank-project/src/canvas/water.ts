import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/water"

//* 创建水坑的实例
class Water extends CanvasAbstract{
  number(): number {
    return config.water.num
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


export default new Water()
