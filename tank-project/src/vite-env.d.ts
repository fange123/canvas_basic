/// <reference types="vite/client" />
interface IModelConstructor{
  new(x:number,y:number):IModel
}

interface IModel{
  render():void
  x:number
  y:number
  width:number
  height:number
  image():HTMLImageElement
}

interface ICanvas {
  model():IModelConstructor
  number():number
  ctx:CanvasRenderingContext2D
}
