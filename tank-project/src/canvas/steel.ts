import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/steel"

//* 创建水坑的实例
class Water extends CanvasAbstract{
  constructor(){
    super()
    super.createModels(config.steel.num,model)

  }

  render(): void {
    super.renderModels()
  }


}


export default new Water()
