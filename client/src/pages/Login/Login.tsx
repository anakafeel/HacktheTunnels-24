import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";
import { motion } from "framer-motion";

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  const panelVariants = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Layout>
      <div className="Login">
        <motion.div
          className="Login__panel"
          initial="hidden"
          animate="show"
          variants={panelVariants}
        >
          <motion.div className="Login__panel__content" variants={staggerChildren}>
            <motion.img src="/carleton_logo_black.png" variants={staggerChildren}></motion.img>
            <motion.div className="Login__panel__content__message" variants={staggerChildren}>
              <div>Welcome to the Carleton SSO Federated Portal.</div>
              <div>
                Enter your{" "}
                <a href="https://myone.carleton.ca" target="blank">
                  MyCarletonOne
                </a>{" "}
                username and password.
              </div>
            </motion.div>
            {message && <motion.p variants={staggerChildren}>{message}</motion.p>}
            <motion.div className="Login__panel__content__input" variants={staggerChildren}>
              <input type="text" placeholder="MyCarletonOne username"></input>
              <input type="password" placeholder="Password"></input>
            </motion.div>
            <motion.div className="Login__panel__content__checkbox" variants={staggerChildren}>
              <input type="checkbox"></input>
              <label>Keep me signed in</label>
            </motion.div>
            <motion.button
              className="Login__panel__button"
              onClick={() => attemptLogin()}
              variants={staggerChildren}
            >
              Sign In
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Login;