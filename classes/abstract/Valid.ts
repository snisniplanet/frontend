import { validate } from 'class-validator'

export default abstract class {
  public validate(){
    return validate(this);
  }
}
