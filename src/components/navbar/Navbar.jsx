import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div>
        <div>
          <Links className={styles.link} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
