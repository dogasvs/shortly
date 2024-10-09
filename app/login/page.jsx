import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="loginContainer">

    <form className="loginForm">
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required placeholder="usermail@gmail.com" />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" required placeholder="*****" />
      <button formAction={ login }>Log in</button>
    </form>
    </div>
  )
}