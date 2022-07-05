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
  name:string
  x:number
  y:number
  width:number
  height:number
  direction: string;
  destroy:()=>void
  image():HTMLImageElement
}

interface ICanvas {
  model():IModelConstructor | IBulletModelConstructor
  number():number
  removeModel(model:IModel):void
  renderModels:()=>void
  ctx:CanvasRenderingContext2D
}
