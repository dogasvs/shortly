import Link from "next/link";
import Navbar from "../navbar/page";
import { createClient } from "@/utils/supabase/server";
import signOut from "@/actions/auth";

export default async function Header() {
  const supabase = createClient();
  const {data: {user}, error} = await supabase.auth.getUser();
  console.log(user);

  return (
    <div className="header">
      <div className="headerSelectedPart">
      <Link href={"/"}> <h1>Shortly</h1> </Link> 
      <Navbar />
      </div>

        { user ? (
           <div className="userBtns">
            <p>{user.user_metadata.firstName} {user.user_metadata.lastname}</p>
            <form action={signOut}>
              <button className="logOut">Log out</button>
            </form>
         </div>
        ) : (
          <div className="headerBtns">
            <Link className="loginBtn" href={"/login"}>Login</Link>
            <Link className="signBtn" href={"/signUp"}>Sign in</Link>
          </div> 
        )}
    </div>
  )
}