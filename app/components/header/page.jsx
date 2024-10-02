import Navbar from "../navbar/page";

export default function Header() {
  return (
    <div className="header">
      <div className="headerSelectedPart">
      <h1>Shortly</h1>
      <Navbar />
      </div>
      <div className="headerBtns">
        <button className="loginBtn">Login</button>
        <button className="signBtn">Sign in</button>
      </div> 
    </div>
  )
}