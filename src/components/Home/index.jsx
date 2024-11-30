import { motion } from "framer-motion";
import styles from "./home.module.scss";

import { Download, Mail, Phone, GitHub } from "react-feather";

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Luan Pires
        </motion.h1>
      </header>

      <section className={styles.about}>
        <p>
          Sou Desenvolvedor Frontend com experiência no desenvolvimento de
          aplicações modernas e responsivas. Domino tecnologias como HTML, CSS,
          Sass, JavaScript e ReactJS.
        </p>
      </section>

      <div className={styles.buttons}>
        <a href="/cv.pdf" download className={styles.button}>
          <Download />
          <p>Download CV</p>
        </a>
        <a href="mailto:luan.94pires@gmail.com" className={styles.button}>
          <Mail />
          <p>E-mail</p>
        </a>
        <a
          href="https://wa.me/5521987112748"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <Phone />
          <p>WhatsApp</p>
        </a>
        <a
          href="https://github.com/luanpires94"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <GitHub />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
}

export default Home;
