import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/wall"

//* 创建砖墙的实例
class Wall extends CanvasAbstract{
  constructor(){
    super()
    super.createModels(config.wall.num,model)

  }

  render(): void {
    super.renderModels()
  }


}


export default new Wall()
