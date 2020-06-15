import User from '@/classes/User'
import { validate } from "class-validator"

function onlyWithConstraint(errors, constraint){
  return errors.filter(item => {
    return (item.constraints && item.constraints[constraint])
  })
}

test('Creates a new User instance', () => {
  let user = new User('username', 'email@example.com', '312441h2hgs')

  validate(user).then(errors => {
    expect(errors.length).toBe(0)
  })
})

test('Invalid email errors', () => {
  let user = new User('username', 'invalid email', '312441h2hgs')

  validate(user).then(errors => {
    errors = onlyWithConstraint(errors, 'isEmail')

    expect(errors.length > 0).toBe(true)
  })
})

test('Missing parameters errors', () => {
  let user = new User('username')

  validate(user).then(errors => {
    errors = onlyWithConstraint(errors, 'isNotEmpty')
    expect(errors.length > 1).toBe(true)
  })
})
