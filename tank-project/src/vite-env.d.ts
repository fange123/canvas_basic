/// <reference types="vite/client" />
interface IModelConstructor{
  new(x:number,y:number):IModel
}
interface IBulletModelConstructor{
  new(tank:IModel):IModel
}

interface IModel{
  render():void
  tank?:IModel
  x:number
  y:number
  width:number
  height:number
  direction: string;
  image():HTMLImageElement
}

interface ICanvas {
  model():IModelConstructor | IBulletModelConstructor
  number():number
  ctx:CanvasRenderingContext2D
}
