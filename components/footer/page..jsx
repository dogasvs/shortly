import Facebook from "@/svgs/facebook/page";
import Instagram from "@/svgs/instagram/page";
import Pinterest from "@/svgs/pinterest/page";
import Twitter from "@/svgs/twitter/page";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h1>Shortly</h1>
      </div>
        <div className="footerLinks">
          <div className="Item">
            <strong>Features</strong>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>

          <div className="Item">
            <strong>Resources</strong>
            <p>Blog</p>
            <p>Developers</p>
            <p>Support</p>
          </div>

          <div className="Item">
            <strong>Company</strong>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="socialMedia">
          <Facebook />
          <Twitter />
          <Instagram />
          <Pinterest />
        </div>
    </div>
  )
}