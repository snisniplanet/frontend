import User from '@/classes/User'
import { validate } from "class-validator";

test('creates a new User instance', () => {
  let user = new User('username', 'email@example.com', '312441h2hgs');

  validate(user).then(errors => {
    expect(errors.length).toBe(0)
  })
})
