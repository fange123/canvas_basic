import wall from "../canvas/wall";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = wall;
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  name: string = 'wall';
  render(): void {
    super.draw()
  }

}
