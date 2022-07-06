import player from "../canvas/player";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";
import _ from "lodash";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = player;
  image(): HTMLImageElement {
    let direction =  this.name + _.upperFirst(this.direction)
    return image.get(direction as any)!
  }
  name: string = 'player';
  render(): void {
    super.draw()
  }

}
