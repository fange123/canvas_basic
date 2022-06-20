import steel from "../canvas/steel";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = steel;
  image(): HTMLImageElement {
   return image.get('steel')!
  }
  name: string = 'steel';
  render(): void {
    super.draw()
  }

}
