import straw from "../canvas/straw";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = straw;
  image(): HTMLImageElement {
   return image.get('straw')!
  }
  name: string = 'straw';
  render(): void {
    super.draw()
  }

}
