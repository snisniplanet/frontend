import { IsNotEmpty, IsEmail } from 'class-validator'
import Valid from '@/classes/abstract/Valid';

export default class extends Valid{
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
    super();

    this.id = id;
    this.username = username;
    this.email = email;
  }
}
