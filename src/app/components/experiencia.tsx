import styles from '../page.module.css';
import stylesTable from './components.module.css'
import React from 'react';
import Link from 'next/link';

function Experiencia() {
  return (
    <div>
        <h1 className={styles.h1}>Habilidades</h1>
        <table className={stylesTable.table}>
                            <tr>
                                <td className={stylesTable.tdheader}>Frontend</td>
                                <td className={stylesTable.td}>HTML</td>
                                <td className={stylesTable.td}>CSS</td>
                                <td className={stylesTable.td}>JavaScript</td>
                                <td className={stylesTable.td} colSpan={2}> </td>
                            </tr>

                            <tr>
                                <td className={stylesTable.tdheader}>Backend</td>
                                <td className={stylesTable.td}>PHP</td>
                                <td className={stylesTable.td}>Firebase</td>
                                <td className={stylesTable.td}>SQL</td>
                                <td className={stylesTable.td}>Mongo</td>
                            </tr>

                            <tr>
                                <td className={stylesTable.tdheader}>Framework</td>
                                <td className={stylesTable.td}>React</td>
                                <td className={stylesTable.td}>Angular</td>
                                <td className={stylesTable.td}>NextJs</td>
                                <td className={stylesTable.td} colSpan={2}> </td>
                            </tr>

                            <tr>
                                <td className={stylesTable.tdheader}>Otros Lenguajes</td>
                                <td className={stylesTable.td}>Python</td>
                                <td className={stylesTable.td}>Java</td>
                                <td className={stylesTable.td} colSpan={2}> </td>
                            </tr>       
                        </table>
    </div>
  );
}

export default Experiencia;