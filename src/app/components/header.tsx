import styles from '../components/header.module.css'
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles.headercontent}>
        <div>
            <Link className={styles.logo} href="/">Gabo.</Link>
        </div>

        <div className={styles.iconos}>
          
          <Link href="/experiencia">Experiencia</Link>
          <Link href="/habilidades">Habilidades</Link>
          <Link href="/proyectos">Proyectos</Link>
        </div>
      
    </header>
  );
}

export default Header;