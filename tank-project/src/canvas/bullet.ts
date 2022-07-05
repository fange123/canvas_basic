import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/bullet"
import tank from "./tank";
import Bullet from '../model/bullet'

//* 创建水坑的实例
export default new (class extends CanvasAbstract implements ICanvas{
  number(): number {
    return config.water.num
  }
  model(): IBulletModelConstructor {
    return model
  }


  render(): void {
    // super.createModels()
    // super.renderModels()
    setInterval(() =>{
      this.createBullet()
      this.renderModels()
    },20)
  }

  createBullet(){
    tank.models.forEach(tank=>{

    //* 如果子弹模型里面存在坦克，就不需要重复生成子弹
    const isExist =this.models.some(m=>m.tank === tank)
    if(!isExist){
    //如果不存在就新增一个子弹
    this.models.push(new Bullet(tank))

  }
  })

  }


})('bullet')



