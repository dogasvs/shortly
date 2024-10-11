import { signUp } from "@/actions/auth";

export default function SignUpPage() {
  return (
    <form className="signUpForm" action={signUp}>
      <label htmlFor="firstname">Firstname</label>
      <input type="text" name="firstname" placeholder="Firstname" /> <br />
      <label htmlFor="lastname">Lastname</label>
      <input type="text" name="lastname" placeholder="Lastname" />  <br />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="usermail@gmail.com" />  <br />
      <label htmlFor="password">password</label>
      <input type="password" name="password" placeholder="********" />
      <button>Sign up</button> 
    </form>
  )
}