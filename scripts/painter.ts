import { TypedList } from "./helpers";

export interface IPainter {
  name: string,
  style: string,
  examples: TypedList<string>
}

export class Painter implements IPainter {
  constructor(public name: string, public style: string, public examples: TypedList<string>) { }
}