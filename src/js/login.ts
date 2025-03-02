import "../css/style.css"
import {logUser} from './utils/logUser'

function login(): any {
  logUser('.input-email', '.input-password', '.email-error', '.password-error', '.btn')
}

login()