export interface IPainter {
  name: string,
  style: string
}

export class Painter implements IPainter {
  constructor(public name:string, public style: string){}
}