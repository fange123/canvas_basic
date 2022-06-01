import './style.css'

// * 创建一个黑板类

class BlackBoard {

  constructor(private el = document.querySelector<HTMLCanvasElement>('#canvas')!,
  private app = el.getContext('2d')!,
  private width:number = el.width,
  private height:number = el.height,
  private btnDiv:HTMLDivElement = document.createElement('div'),
  private bgColor='#000',
  private lineColor='#fff',
  ){
    this.initCanvas()
    this.bindEvent()

  }

private initCanvas(){
  this.app.fillStyle = this.bgColor
  this.app.fillRect(0,0,this.width,this.height)
  this.btnDiv.style.cssText='margin-top:10px'
  this.el.insertAdjacentElement('afterend',this.btnDiv)

}

private bindEvent(){
  const callback = this.drawLine.bind(this)
  //* 鼠标落下开始画线
  this.el.addEventListener('mousedown',()=> {
    this.app.beginPath()
    this.app.strokeStyle = this.lineColor
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

//* 设置背景颜色的操作
public setBgColor(color:string){
  this.bgColor = color
  this.app.fillStyle = color;
  this.app.fillRect(0,0,this.width,this.height)
   return this
}

//* 清屏操作
public clear() {
  const el = document.createElement('button')
  el.innerText = '清屏'
  this.btnDiv.insertAdjacentElement('afterbegin',el)
  el.addEventListener('click', ()=>{
    this.app.fillStyle=this.bgColor
    this.app.fillRect(0,0,this.width,this.height)
  })
  //* 返回this可以进行链式操作
  return this



}

}


const instance = new BlackBoard()
instance.clear().setBgColor('green')
