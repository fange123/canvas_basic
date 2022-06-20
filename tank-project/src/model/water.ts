import water from "../canvas/water";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = water;
  image(): HTMLImageElement {
    return image.get('water')!
  }
  name: string = 'water';
  render(): void {
    super.draw()
  }

}
