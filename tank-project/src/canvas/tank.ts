import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/tank"
import position from "../service/position";

//* 创建坦克的实例
class Tank extends CanvasAbstract implements ICanvas{
  number(): number {
    return config.tank.num
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    this.createModels()//重写，用自己的
    super.renderModels()
  }

    //* 画对象模型
  protected createModels(){
    //~ 生成草地不需要判断是否叠加，可叠加
    for (let index = 0; index < this.number(); index++) {
      const pos = position.position() ;
      const model = this.model()
      //y轴0，x轴随机生成
      const instance = new model(this.canvas,pos.x,0)
      this.models.push(instance)

    }
  }


}


export default new Tank()
