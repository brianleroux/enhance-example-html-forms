import data from '@begin/data'

export async function get (req) {
  let emails = await data.get({ table: 'emails' })
  let success = !!req.query.success
  let { problem, email, ...session } = req.session
  return {
    session,
    json: { success, problem, email, emails }
  }
}
