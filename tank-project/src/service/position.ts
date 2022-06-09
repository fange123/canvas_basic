import config from "../config";

type positionType = {x:number,y:number}

class Position {
   collection:positionType[] = []

  //* 批量随机生成,但是随机生成坐标可能有重复的，会导致贴图重叠
  public getPosition(n:number){
    const collection = [] as {x: number, y: number}[]
    for (let index = 0; index < n; index++) {
      //* 做个判断，不重复才push
      while(true){
        const position = this.position()
        // ~要从整个的collection里面做比较
        const exist = this.collection.some(p=>p.x == position.x && p.y == position.y )
        if(!exist){
          collection.push(position)
          this.collection.push(position)
          break;
        }
      }

    }
      console.log(this.collection);

    return collection

  }

  //* 模型的随机位置的计算
  protected position(){
    return {
      x:Math.floor(Math.random()*(config.canvas.width/config.model.width))*config.model.width,
      //* 画布要在上下留出一部分距离
      y:Math.floor(Math.random()*(config.canvas.height/config.model.height-5))*config.model.height+2*config.model.height,
    }
  }


}

export default new Position()
