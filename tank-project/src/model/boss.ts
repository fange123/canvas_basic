import boss from "../canvas/boss";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = boss;
  image(): HTMLImageElement {
    return image.get('boss')!
  }
  name: string = 'boss';
  render(): void {
    super.draw()
  }

}
