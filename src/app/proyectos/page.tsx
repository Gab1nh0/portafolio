import styles from '../page.module.css';

export default function Proyectos(){
    return(
        <>
            <main className={styles.main}>
                
                <div className={styles.content}>
                    <h1 className={styles.h1}>Proyectos</h1>
                    <br /><br /><br />
                    <div className={styles.proyecto_content}>
                        <div className={styles.proyecto_nombre}>
                            <h3>Kitplex</h3>
                            <div className={styles.proyecto_nombre_tabla}>
                                <br />
                                <table>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>React</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>Firebase</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className={styles.proyecto_descripcion}>
                            <p>E-commerce para una tienda de zapatillas online, se aplicaron el uso de apis y cookies. Una base de datos administrada con MySql, el leguaje a para interactuar con lo base de datos fue php, mientras que para el front-end no utilizamos un framework sino que usamos html simple.</p>
                        </div>
                        <div className={styles.proyecto_botones}>
                            <a href="https://kitplex-webstore-18c93.web.app/" target="_blank">Ver Web <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 20 20"><path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"/><path fill="currentColor" d="m11 1l3.29 3.29l-5.73 5.73l1.42 1.42l5.73-5.73L19 9V1z"/></svg></a>
                        </div>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className={styles.proyecto_content}>   
                        <div className={styles.proyecto_nombre}>
                            <h3>SneakerHeads</h3>
                            <div className={styles.proyecto_nombre_tabla}>
                                <br />
                                <table>
                                    <tr>
                                        <td>PHP</td>
                                        <td>CSS</td>
                                    </tr>
                                    <tr>
                                        <td>HTML</td>
                                        <td>My SQL</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className={styles.proyecto_descripcion}>
                            <p>E-commerce para una tienda de zapatillas online, se aplicaron el uso de apis y cookies. Una base de datos administrada con MySql, el leguaje a para interactuar con lo base de datos fue php, mientras que para el front-end no utilizamos un framework sino que usamos html simple.</p>
                        </div>
                        <div className={styles.proyecto_botones}>
                            <a href="https://github.com/Gab1nh0/SneakerHeads" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
                        </div>
                    </div>
                        <br /><br /><br /><br /><br />
                    <div className={styles.proyecto_content}>
                        <div className={styles.proyecto_nombre}>
                            <h3>Bible Verses</h3>
                            <div className={styles.proyecto_nombre_tabla}>
                                <br />
                                <table>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>Nextjs</td>
                                    </tr>
                                    <tr>
                                        <td>Tailwind</td>
                                        <td>Axios</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className={styles.proyecto_descripcion}>
                            <p>Es una app que muestra versiculos biblicos de manera random, usando la API (https://bible-api.com/).</p>
                        </div>
                        <div className={styles.proyecto_botones}>
                            <a href="https://github.com/Gab1nh0/bibleverses" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
                            <a href="https://bibleverses-opal.vercel.app/" target="_blank">Ver Web <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 20 20"><path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"/><path fill="currentColor" d="m11 1l3.29 3.29l-5.73 5.73l1.42 1.42l5.73-5.73L19 9V1z"/></svg></a>
                        </div>
                    </div>

                </div>  
                
                          
            </main>
            
        </>
    )


}