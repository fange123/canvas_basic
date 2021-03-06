import CanvasAbstract from "./canvas";
import config from '../config'
import model from "../model/bullet"
import tank from "./tank";
import Bullet from '../model/bullet'
import player from "./player";
import audio from "../service/audio";

//* 创建 子弹的实例
export default new (class extends CanvasAbstract implements ICanvas{
  intervalId = 0
  number(): number {
    return config.water.num
  }
  model(): IBulletModelConstructor {
    return model
  }


  render(): void {
    // super.createModels()
    // super.renderModels()
    this.intervalId = setInterval(() =>{
      this.createBullet()
      this.renderModels()
    },50)//子弹的渲染时间
  }

  stop(){
    clearInterval(this.intervalId)
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

  //* 添加玩家子弹
  addBullet(){
    audio.fire()
    this.models.push(new Bullet(player.models[0]))
  }


})('bullet')



