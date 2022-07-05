import CanvasAbstract from "./canvas";
import model from "../model/boss"
import config from "../config";

//* 创建boss的实例
export default new(class Boss extends CanvasAbstract implements ICanvas{
  number(): number {
    return 0
  }
  model(): IModelConstructor {
    return model
  }


  render(): void {
    this.createModels()
    super.renderModels()
  }

    protected createModels(){
   [{
    x:config.canvas.width/2-config.model.width/2,y:config.canvas.height-config.model.height
  }].forEach((position)=>{
      const model = this.model()as IModelConstructor
      const instance = new model(position.x,position.y)
      this.models.push(instance)

    })
  }


})('boss')
