import { IsNotEmpty, IsEmail } from 'class-validator'

export default class {
  @IsNotEmpty({
    message: "No ID given"
  })
  private id: String;

  @IsNotEmpty({
    message: "No username given"
  })
  private username: String;

  @IsNotEmpty()
  @IsEmail(undefined, {
    message: "Email format is not valid"
  })
  private email: String;

  constructor(username: String, email: String, id: String){
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
