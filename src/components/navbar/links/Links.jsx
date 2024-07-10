"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);
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
    <div className={styles.container}>
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

      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return (
              <NavLink
                key={link.title}
                title={link.title}
                path={link.path}
              ></NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
