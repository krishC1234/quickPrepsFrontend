export class Place {
  //properties
  public title: string;
  public imageUrl: string;
  public description: string;
  public review: string;
  public cost: string;
  public show: boolean;

  //methods
  public constructor(t: string, i: string, d: string, r: string, c: string) {
    this.title = t;
    this.imageUrl = i;
    this.description = d;
    this.review = r;
    this.cost = c;
    this.show = false;
  }
}
