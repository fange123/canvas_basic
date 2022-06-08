import CanvasAbstract from "./canvas";
import config from '../config'

//* 创建草地的实例
class Straw extends CanvasAbstract{
  render(): void {
    super.drawModels(config.straw.num)
  }


}


export default new Straw()
