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
    this.renderModels()

    setInterval(()=> {
      this.renderModels()
    },config.timeout)
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

   //* 将模型渲染到画布上
  protected renderModels(){
     //* 每次运动前需要清理一下画布，如果只清理坦克，坦克数量多的时候影响性能
      this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
      super.renderModels()
  }


}


export default new Tank()
