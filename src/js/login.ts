import "../css/style.css"
import {logUser} from './utils/logUser'

function login(): any {
  const user = logUser('john@example.com', 'pass', '.email-error', '.password-error', '.btn')

  console.log(user)
}

login()