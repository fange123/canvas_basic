import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/wall"

//* 创建砖墙的实例
export default new(class Wall extends CanvasAbstract implements ICanvas{
  number(): number {
    return config.wall.num
  }
  model(): IModelConstructor {
   return model
  }


  render(): void {
    super.createModels()
    this.createBossWall()
    super.renderModels()
  }

  //绘制boss的墙
  createBossWall(){

    const cw = config.canvas.width
    const ch = config.canvas.height
    const mw = config.model.width
    const mh = config.model.height


    //* 生成墙的一些坐标位置
 const pos = [
    {
      x:cw/2-2*mw,y:ch-mh
    },
    {
      x:cw/2-2*mw,y:ch-2*mh
    },
    {
      x:cw/2-2*mw,y:ch-3*mh
    },
    {
      x:cw/2-mw,y:ch-3*mh
    },
    {
      x:cw/2,y:ch-3*mh
    },
    {
      x:cw/2+mw,y:ch-3*mh
    },
    {
      x:cw/2+mw,y:ch-2*mh
    },
    {
      x:cw/2+mw,y:ch-mh
    },
    {
      x:cw/2+mw,y:ch
    },
]
    pos.forEach((position)=>{
      const model = this.model()as IModelConstructor
      const instance = new model(position.x,position.y)
      this.models.push(instance)

    })


  }


})('wall')
