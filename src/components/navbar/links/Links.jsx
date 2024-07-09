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
    </div>
  );
};

export default Links;
