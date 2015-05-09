export interface IPainter {
  name: string
}

export class Painter implements IPainter {
  constructor(public name:string){}
}