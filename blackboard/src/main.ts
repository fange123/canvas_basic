import './style.css'

// * 创建一个黑板类

class BlackBoard {

  constructor(private el = document.querySelector<HTMLCanvasElement>('#canvas')!,
  private app = el.getContext('2d')!,
  private width:number = el.width,
  private height:number = el.height){
    this.initCanvas()
    this.bindEvent()

  }

private initCanvas(){
  this.app.fillStyle = "#000"
  this.app.fillRect(0,0,this.width,this.height)

}

private bindEvent(){
  const callback = this.drawLine.bind(this)
  //* 鼠标落下开始画线
  this.el.addEventListener('mousedown',()=> {
    this.app.beginPath()
    this.app.strokeStyle = '#fff'
    this.el.addEventListener('mousemove', callback)
  })

  //* 鼠标松开停止画线,
  //* 如果只给黑板绑定鼠标抬起移除事件，那么鼠标移动到黑板外面松开就有问题了
  //* 可以把鼠标抬起事件绑定到整个document上
  document.addEventListener('mouseup', ()=> {
    this.el.removeEventListener('mousemove',callback)
  })
}

private drawLine(event:MouseEvent){
  this.app.lineTo(event.offsetX, event.offsetY)//#定义点
  this.app.stroke()//#把点连接起来


}

}


const instance = new BlackBoard()
