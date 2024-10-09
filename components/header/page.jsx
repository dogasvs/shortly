import Link from "next/link";
import Navbar from "../navbar/page";

export default function Header() {
  return (
    <div className="header">
      <div className="headerSelectedPart">
      <h1>Shortly</h1>
      <Navbar />
      </div>
      <div className="headerBtns">
        <Link className="loginBtn" href={"/login"}>Login</Link>
        <Link className="signBtn" href={"/signUp"}>Sign in</Link>
      </div> 
    </div>
  )
}