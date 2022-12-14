import data from '@begin/data'
import { validate } from 'isemail'

export async function post (req) {
  let email = req.body.email
  if (validate(email)) {
    await data.set({ table: 'emails', key: email })
    return {
      location: '/?success=1'
    }
  }
  else {
    return {
      location: '/',
      session: {
        email,
        problem: 'invalid email'
      }
    }
  }
}
