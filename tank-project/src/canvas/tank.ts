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
    },50)
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
      this.canvas.clearRect(0,0,config.canvas.width,config.canvas.height)
    this.models.forEach(model=>{
      model.render()
      this.canvas.drawImage(model.image(),model.x,model.y,config.model.width,config.model.height)
    })
  }


}


export default new Tank()
