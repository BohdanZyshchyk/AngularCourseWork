export class MemeComment {
  public id: number;
  public text: string;
  public date: string;
  public userName: string;
  public userId: string;
  public memeId: string;

  constructor(Id: number, Text:string, Date: string, UserName:string, UserId: string, MemeId: string) {
    this.id = Id
    this.date = Date
    this.text = Text
    this.userName = UserName 
    this.userId = UserId
    this.memeId = MemeId
  }
}