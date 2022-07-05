import boss from "./canvas/boss"
import steel from "./canvas/steel"
import wall from "./canvas/wall"
import config from "./config"

// * 提取公共的碰撞检测方法
export default {

  isCanvasTouch(x:number,y:number,width=config.model.width,height=config.model.height):boolean {
    //边界判断  返回boolean
   return x < 0 || x+width > config.canvas.width || y < 0 || y+height > config.canvas.height


  },
   isModelTouch(x:number,y:number,width=config.model.width,height=config.model.height,models = [...wall.models,...steel.models,...boss.models]):IModel|undefined{
    //模型判断  返回模型
    return models.find(item=> {
      const state = x + width <= item.x || //#坦克的坐标+坦克的宽度<=被检测模型的坐标x轴📄，表示没有碰撞，其他同理
      x >= item.width + item.x ||
      y +height <= item.y ||
      y >= item.height+ item.y
    return !state

    })



}
}
