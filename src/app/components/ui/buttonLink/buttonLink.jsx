import React from "react";
import styles from './buttonLink.module.scss'

const ButtonLink = ({ link, children}) => {
  return (
    <>
      <a className={styles.body} href={link}>
        {children}
      </a>
    </>
  );
};

export default ButtonLink;
