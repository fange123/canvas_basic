import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/straw"

//* 创建草地的实例
class Straw extends CanvasAbstract{
  constructor(){
    super()
    super.createModels(config.straw.num,model)

  }

  render(): void {
    super.renderModels()
  }


}


export default new Straw()
