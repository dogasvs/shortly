import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href={"/"}>Features</Link>
      <Link href={"/"}>Pricing</Link>
      <Link href={"/"}>Resources</Link>
    </div>
  )
}