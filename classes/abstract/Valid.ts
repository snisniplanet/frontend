import { validate, ValidationError, validateOrReject } from 'class-validator'

export default abstract class {
  public async validate(): Promise<void>{
    return await validateOrReject(this);
  }

  public async validateSoft(): Promise<ValidationError[]>{
    return await validate(this);
  }
}
