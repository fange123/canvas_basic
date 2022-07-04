import bullet from "../canvas/bullet";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = bullet;
  image(): HTMLImageElement {
    return image.get('bullet')!
  }
  name: string = 'bullet';
  render(): void {
    super.draw()
  }

}
