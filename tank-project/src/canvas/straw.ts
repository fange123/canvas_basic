import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/straw"

//* 创建草地的实例
class Straw extends CanvasAbstract{
  render(): void {
    super.drawModels(config.straw.num,model)
  }


}


export default new Straw()
