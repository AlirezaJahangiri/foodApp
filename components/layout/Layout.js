import styles from "./Layout.module.css";
import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2>FoodApp</h2>
        </div>
        <div className={styles.menu}>
          <span>Menu</span>
          <span>Category</span>
        </div>
      </div>

      {/* between */}
      <div className={styles.container}>{children}</div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerTitle}>
          <h2>FoodApp</h2>
          <p className={styles.footerSlogan}>
            Delicious recipes, fresh ingredients, and daily meal inspiration.
            Cook better, eat happier.
          </p>
          <p className={styles.rights}>© 2025 FoodApp. All rights reserved.</p>
          <div className={styles.socialTags}></div>
        </div>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <span>Home</span>
          <span>Menu</span>
          <span>Categories</span>
          <span>About-us</span>
        </div>
      </div>
      <div className={styles.creator}>
        <p>
          Made with ❤️ by
          <span>
            {<Link href="https://t.me/AlirezaJhg">Alireza Jahangiri</Link>}
          </span>
        </p>
      </div>
    </>
  );
}

export default Layout;
