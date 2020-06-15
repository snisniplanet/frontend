import User from '@/classes/User'

function onlyWithConstraint(errors, constraint) {
  return errors.filter((item) => {
    return item.constraints && item.constraints[constraint]
  })
}

test('Creates a new User instance', () => {
  const user = new User('username', 'email@example.com', '312441h2hgs')

  user.validate().then((errors) => {
    expect(errors.length).toBe(0)
  })
})

test('Invalid email errors', () => {
  const user = new User('username', 'invalid email', '312441h2hgs')

  user
    .validate()
    .then((errors) => {
      throw new Error("Everything is fine and it shouldn't be")
    })
    .catch((errors) => {
      errors = onlyWithConstraint(errors, 'isEmail')

      expect(errors.length > 0).toBe(true)
    })
})

test('Missing parameters errors', () => {
  const user = new User('username')

  user
    .validate()
    .then((errors) => {
      throw new Error("Everything is fine and it shouldn't be")
    })
    .catch((errors) => {
      errors = onlyWithConstraint(errors, 'isNotEmpty')
      expect(errors.length > 1).toBe(true)
    })
})

test('Missing parameters (soft) validation', () => {
  const user = new User('username')

  user.validateSoft().then((errors) => {
    errors = onlyWithConstraint(errors, 'isNotEmpty')
    expect(errors.length > 1).toBe(true)
  })
})
