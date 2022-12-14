import xss from 'xss'

export default function signup ({ html, state }) {
  if (state.store.success) {
    return html`<p>thx for signing up</p>`
  }
  let style = state.store.problem? 'border: 1px solid red;' : ''
  let value = xss(state.store.email)
  console.log({ value })
  return html`
    <form action=/signup method=post>
      <!-- things to add: required, type=email, placeholder -->
      <input type=text name=email style="${style}" value="${value}">
      <button>sign up</button>
    </form>
  `
}
