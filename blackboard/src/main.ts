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
    this.draw()


  }

private initCanvas(){
  this.app.fillStyle = this.bgColor
  this.app.fillRect(0,0,this.width,this.height)
  this.btnDiv.classList.add('btn_div')
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

//* 设置粉笔的颜色

public setLineColor(){
  const colors = ['#2ecc71','#3498db','#ecf0f1','#f1c40f'] ;
  const container = document.createElement('div')
  container.classList.add('container')
  this.btnDiv.insertAdjacentElement('afterend',container)
  colors.forEach(color => {
    const div = document.createElement('div')
    div.style.cssText = `background-color:${color}`
    container.insertAdjacentElement('afterbegin',div)
    div.addEventListener('click', () => this.lineColor = color) ;

  })

  return this
}

//* 橡皮擦
public erase(){
  const erase = document.createElement('button')
  erase.innerText = '橡皮'
  this.btnDiv.insertAdjacentElement('afterbegin',erase)
  erase.addEventListener('click', () => {
    this.lineColor = this.bgColor
    this.app.lineWidth = 10
  })
}

//* 写字功能  使用完橡皮擦后字体变粗了，写字功能是为了恢复字体
public draw(){
  const div = document.createElement('button')
  div.innerText = '写字'
  this.btnDiv.insertAdjacentElement('afterbegin',div)
  div.addEventListener('click', () => {
    this.lineColor = '#fff'
    this.app.lineWidth = 1
  })
}

}


const instance = new BlackBoard()
instance.clear().setBgColor('#2c3e50')

instance.setLineColor()

instance.erase()
