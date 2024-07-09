import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];

  // TEMP VARIABLES
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return (
          <NavLink
            key={link.title}
            title={link.title}
            path={link.path}
          ></NavLink>
        );
        // return (<navLink title={link.title} path={link.path}}/>);
      })}
      {session ? (
        <>
          {isAdmin && <NavLink title="Admin" path="/admin"></NavLink>}
          <button className={styles.auth_btn}>Logout</button>
        </>
      ) : (
        <NavLink title="Login" path="/login"></NavLink>
      )}
    </div>
  );
};

export default Links;
