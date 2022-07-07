import config from "../config";
import { directEnum } from "../enum/positionEnum";
import audio from "../service/audio";

//*定义模型的抽象父类，方便子类继承
export abstract class  ModelAbstract{
  public direction:directEnum = directEnum.top
  public width = config.model.width
  public height = config.model.height

  abstract image():HTMLImageElement
  public abstract canvas:ICanvas

  abstract render():void
  abstract name:string
  constructor(
    public x:number, public y:number){
      this.randomPosition()
  }

  //* 在画布渲染，不需要在模型里面渲染
  protected draw(){
      this.canvas.ctx.drawImage(this.image(), this.x,this.y,config.model.width,config.model.height)
  }
//* 随机产生方向
  protected randomPosition(){
    this.direction = Object.keys(directEnum)[Math.floor(Math.random()*4)] as directEnum
  }

  public destroy(){
    this.canvas.removeModel(this)
    this.canvas.renderModels()
  }

   //爆炸效果
  protected blast(model:IModel){
    audio.blast();
  //* 因为图片要一个一个显示，所以要使用promise最合适
    [...Array(8).keys()].reduce((promise,index)=>{
      return new Promise((resolve)=> {
      setTimeout(() => {
          const img = new Image();
        img.src = `./src/static/images/blasts/blast${index}.gif`
        img.addEventListener('load',()=> {
      //* 图片加载完毕，在画布上渲染，加载下一张图片
      this.canvas.ctx.drawImage(img,model.x,model.y,model.width,model.height);
        resolve(promise)
    })
      }, 100);

      })
    },Promise.resolve())

  }


}
