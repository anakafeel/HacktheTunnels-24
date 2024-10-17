import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";
import { buttonVariants } from "@/components/ui/button"

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <div className="HeaderLinks">
      <Link to={"/"} className={buttonVariants({ variant: "outline" })}>Return To Menu</Link>
      <Link to={"/sitemap"} className={buttonVariants({ variant: "outline" })}>Site Map</Link>
      <Link to={"/help"} className={buttonVariants({ variant: "outline" })}>Help</Link>
      <Link to={"/login"} className={buttonVariants({ variant: "outline" })}>
        <span onClick={() => logout()}>Logout</span>
      </Link>
    </div>
  );
}

export default HeaderLinks;
