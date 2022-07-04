import bullet from "../canvas/bullet";
import config from "../config";
import { directEnum } from "../enum/positionEnum";
import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  public canvas: ICanvas = bullet;
  image(): HTMLImageElement {
    return image.get('bullet')!
  }

  constructor(public tank:IModel){
    super(tank.x+config.model.width/2,tank.y+config.model.height/2);
    this.direction =tank.direction as unknown as directEnum
  }
  name: string = 'bullet';
  render(): void {
    super.draw()
  }

}
