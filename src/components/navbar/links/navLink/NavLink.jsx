"use client";
import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ title, path }) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
