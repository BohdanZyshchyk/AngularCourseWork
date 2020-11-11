export class Meme {
  public id: number;
  public title: string;
  public date: string;
  public image: string;
  public rating: number;
  public isUpvoted:boolean;
  public isDownvoted:boolean;

  constructor(Id: number, Title:string, Date: string, Image: string, Rating: number) {
    this.id = Id
    this.date = Date
    this.title = Title
    this.image = Image
    this.rating = Rating
    this.isUpvoted = false;
    this.isDownvoted = false;
  }
}