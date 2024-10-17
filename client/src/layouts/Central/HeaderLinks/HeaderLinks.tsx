import { Link } from "react-router-dom";
import "./HeaderLinks.style.scss";
import { useAccountContext } from "@/context";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

function HeaderLinks() {
  const { logout } = useAccountContext();
  return (
    <motion.div
      className="HeaderLinks"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <Link to={"/"} className={buttonVariants({ variant: "outline" })}>Return To Menu</Link>
      </motion.div>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <Link to={"/sitemap"} className={buttonVariants({ variant: "outline" })}>Site Map</Link>
      </motion.div>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <Link to={"/help"} className={buttonVariants({ variant: "outline" })}>Help</Link>
      </motion.div>
      <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
        <Link to={"/login"} className={buttonVariants({ variant: "outline" })}>
          <span onClick={() => logout()}>Logout</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HeaderLinks;