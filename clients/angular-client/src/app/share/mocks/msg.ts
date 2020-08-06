export class Msg {
  user: string;
  content: string;

  constructor(user: string, content: string) {
    this.user = user;
    this.content = content;
  }
}
