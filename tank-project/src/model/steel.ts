import { image } from "../service/image";
import { ModelAbstract } from "./modelAbstract";

export default class extends ModelAbstract implements IModel{
  render(): void {
    super.draw(image.get('steel')!)
  }

}
