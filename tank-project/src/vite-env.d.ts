/// <reference types="vite/client" />
interface IModelConstructor{
  new(canvas:CanvasRenderingContext2D,x:number,y:number):IModel
}

interface IModel{
  render():void
}

interface ICanvas {
  model():IModelConstructor
  number():number
}
