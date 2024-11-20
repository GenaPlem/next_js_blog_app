import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/hennadii.png"
          alt="An image showing Hennadii"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hennadii</h1>
      <p>I blog about web development and I'm passionate about Next.js</p>
    </section>
  );
}
