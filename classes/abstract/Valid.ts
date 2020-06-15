import { validate, ValidationError } from 'class-validator'

export default abstract class {
  public async validate(): Promise<ValidationError[]>{
    return await validate(this);
  }
}
