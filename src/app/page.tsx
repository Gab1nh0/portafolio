import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <main>
            <div className={styles.circulos}>
                <div className={styles.blur_circulo2}></div>
                <div className={styles.blur_circulo1}></div>
            </div>
        <section className={styles.inicio}>
            
            <br /><br />
            <div className={styles.inicio_info}>
                <div className={styles.inicio_nombre}><h1>Gabriel Martínez</h1>
                <div className={styles.inicio_iconos}>
                    <Link href="https://github.com/Gab1nh0"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></Link>
                    <Link href="https://www.linkedin.com/in/gabriel-martinez-rudy-2041232a5/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></Link>
                </div>
            </div>
                <p>Ingeniero de <span>Software</span></p>
                <br /><br />
                <p>
                    Hola, soy Gabo y Ingeniero de Software en proceso. Soy estudiante de Ingeniería de Software en la Universidad Tecnológica de Panamá, actualmente cursando el cuarto año. Mi pasión radica en el desarrollo web, donde he creado proyectos tanto de front-end como de back-end. Además, he explorado el análisis de datos con Python, implementando modelos de machine learning para predecir los resultados de partidos internacionales de la FIFA. Mi objetivo es consolidarme como un desarrollador full-stack, capaz de concebir y ejecutar proyectos web complejos de principio a fin con una alta calidad.
                </p>
            </div>
            <br /><br /><br /><br />
            <div><a href="https://firebasestorage.googleapis.com/v0/b/footballleague-479b8.appspot.com/o/cv_english.pdf?alt=media&token=3d86da56-b155-4ddd-8bc2-743d5d06b17a" download="GabrielMartinezCV" className={styles.btncv}>
            Descargar CV </a></div>
        </section>
        <br /><br />
        <section className={styles.section}>
            <div className={styles.section_titulo} id='habilidades'><h1>👨‍🏫Habilidades</h1></div><br /><br /><br />
            <div>    
                        <table className={styles.table}>
                            <tr>
                                <td className={styles.tdheader}>Frontend</td>
                                <td className={styles.td}>HTML</td>
                                <td className={styles.td}>CSS</td>
                                <td className={styles.td}>JavaScript</td>
                                <td className={styles.td}>TypeScript</td>
                                <td className={styles.td}>React</td>
                                <td className={styles.td}>NextJs</td>
                            
                            </tr>
                            <tr>
                                <td className={styles.tdheader}>Data Analyst</td>
                                <td className={styles.td}>Python</td>
                                <td className={styles.td}>Pandas</td>
                                <td className={styles.td}>Mathplotlib</td>
                                <td className={styles.td}>Skitlearn</td>
                                <td className={styles.td}>TensorFlow</td>
                                <td className={styles.td}>Numpy</td>
            
                            </tr>
                            <tr>
                                <td className={styles.tdheader}>Backend</td>
                                <td className={styles.td}>PHP</td>
                                <td className={styles.td}>Firebase</td>
                                <td className={styles.td}>SQL</td>
                                <td className={styles.td}>Mongo</td>
                                <td className={styles.td}>API Rest</td>
                                <td className={styles.td}>Postgre</td>
                            </tr>
                            <tr>
                                <td className={styles.tdheader}>Otros</td>
                                <td className={styles.td}>Java</td>
                                <td className={styles.td}>Android Studio</td>
                                <td className={styles.td}>Git</td>
                                <td className={styles.td}>Figma</td>
                                <td className={styles.td}>Blender</td>
                                <td className={styles.td}>Docker</td>
                                
                            </tr>       
                        </table>            
                    </div>
                    <br /><br />
        </section>
        <section className={styles.section}>


        <div className={styles.section_titulo} id='proyectos'><h1>📋Proyectos</h1></div><br /><br /><br />


        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>ML Football League.</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>TypeScript</td>
                            <td>Python</td>
                        </tr>

                        <tr>
                            <td>Firebase</td>
                            <td>Echarts</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>Plataforma que muestra el rendimiento mediante gráficas de los jugadores, se pueden comparar sus estadísticas entre ellos para ver su rendimiento en el torneo y por último tiene un API con un modelo de machine learning para la predicción de partidos internacionales.</p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/football-ml-league-brr" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
                <a href="https://football-ml-league-brr.vercel.app/" target="_blank">Ver Web <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 20 20"><path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"/><path fill="currentColor" d="m11 1l3.29 3.29l-5.73 5.73l1.42 1.42l5.73-5.73L19 9V1z"/></svg></a>
            </div>
        </div><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723954234/jnu4h2zzbep5u1xynack.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723954234/scflye04pzodnpzyc6sj.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723954234/vh78ojxpjtmeidreebme.png" alt="" />
        </div>

        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Análisis de goles esperados para un partido con Simulación de Monte Carlo</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>Simulación Monte Carlo</td>
                            <td>Python</td>
                        </tr>

                        <tr>
                            <td>Numpy</td>
                            <td>Seaborn</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>Cada tiro hecho en un partido de fútbol tiene un porcetaje para que sea gol a esta métrica se le conoce como gol esperado (xG). Utilizando una Simulación de Monte Carlo se puede llegar a realizar una predicción bastante acertada respecto a la cantidad de gol anotados por los equipos al final de partido.
                </p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/football_analyst/tree/main/xG-MonteCarlos-GoalPrediction" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
            </div>
        </div><br /><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1724001644/enijo6ahjco0o0lmiuqj.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1724001644/jfgiooftihsraf85idjz.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1724001644/ljkiv2nfhzfgor9njjk5.png" alt="" />
        </div>

        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Análisis de CONCACAF Hexagonal</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>Python</td>
                            <td>Pandas</td>
                        </tr>

                        <tr>
                            <td>Skitlearn</td>
                            <td>Data Scrap</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>Regresión lineal para analizar la relación entre la diferencia de goles, goles a favor y goles en contra respecto a las posiciones finales de cada equipo en la tabla de la hexagonal.
                    Análisis insparado por el artículo <a href="https://nhsjs.com/wp-content/uploads/2022/08/Linear_regression_with_one_variable.pdf">(Linear Regression to analyze the relationship between points and goal
                        difference in Premier League standings, Ziean Chen)</a>.
                </p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/football_analyst/tree/main/LinealRegression-Concacaf-Hexagonal-Analyst" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
            </div>
        </div><br /><br />

        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Manejo de Elementos Gráficos</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>Python</td>
                            <td>CustomTkinter</td>
                        </tr>

                        <tr>
                            <td>Mathplotlib</td>
                            <td>Numpy</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>App realizada en python para graficar puntos en un plano a mediante diferentes algoritmos de trazado de líneas y circunferencias. Los Algortimos disponibles son trazado de líneas de Bresenham y DDA, para las circunferencias se usaron punto medio de Circunferencias y Elipses.</p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/manejo-de-elementos-graficos" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
            </div>
        </div><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723959238/p1un3g96iaxkonlfryol.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723959238/vcksgfuhpmwa5rmfwihv.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723959238/tulyopxxarme43meynwh.png" alt="" />
        </div>

        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Algoritmo Cohen-Sutherland</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>Python</td>
                            <td>Mathplotlib</td>
                        </tr>

                        <tr>
                            <td>Wikipedia jejej</td>
                            <td>Numpy</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>Este algoritmo resuelve el recorte de líneas que quedan fuera de un rectángulo alineado con los ejes. Para ello divide el espacio 2D en una matriz de 9 regiones, de las cuales la única visible es la parte central (el viewport). El viewport, es la pantalla o plano de proyección. [Fuente: Wikipedia]</p>    
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/corte_de_lineas" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
            </div>
        </div><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723960592/v9ju6npnepyscqg4tpxe.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723960592/wnyohqqv71drs4k9mwv8.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723960592/jnyvmbkr90kfpiwprbqp.png" alt="" />
        </div>

        <br /><br /><br /><br /><hr /><br /><br /><br />

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
                <p>Es una app que muestra versiculos biblicos de manera aleatoria, usando la API (https://bible-api.com/).</p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/bibleverses" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
                <a href="https://bibleverses-opal.vercel.app/" target="_blank">Ver Web <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 20 20"><path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"/><path fill="currentColor" d="m11 1l3.29 3.29l-5.73 5.73l1.42 1.42l5.73-5.73L19 9V1z"/></svg></a>
            </div>
        </div><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723952242/w1ejmicr6kivemeuom4y.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723952242/nnmcfyq8fgeybrr1hi3j.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723952242/sxu8kgvmt0j68bqaznf2.png" alt="" />
        </div>

        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Ktiplex Ecommerce</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>JavaScript</td>
                            <td>React</td>
                        </tr>

                        <tr>
                            <td>Firebase</td>
                            <td>HTML</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
                <p>E-commerce para la venta de componentes de computadoras y servicio de reparaciones, se utilizaron firestore como base de datos, firebase hosting para el alojamiento de la web, firebase storage para almacenar las imagenes de los produstos y funciones para realizar los pagos del productos en el carrito.</p>
            </div>
            
            <div className={styles.proyecto_botones}>
               <a href="https://kitplex-webstore-18c93.web.app/" target="_blank">Ver Web <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 20 20"><path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"/><path fill="currentColor" d="m11 1l3.29 3.29l-5.73 5.73l1.42 1.42l5.73-5.73L19 9V1z"/></svg></a>
            </div>
        </div><br /><br />
        <div className={styles.proyecto_content_img}>
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723956728/adnsch8q8sj0pt8wleci.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723956728/usjtbzd28rrrauxrxwrz.png" alt="" />
            <img className={styles.img} src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1723956728/xlr2bxb3ufftu3n2lbtj.png" alt="" />
        </div>

        
        <br /><br /><br /><br /><hr /><br /><br /><br />

        <div className={styles.proyecto_content}>
            <div className={styles.proyecto_nombre}>
                <h3>Sistema de Matrícula con Java</h3>
                <div className={styles.proyecto_nombre_tabla}>
                    <br />
                    <table>
                        <tr>
                            <td>Java</td>
                            <td>Eclipse</td>
                        </tr>

                        <tr>
                            <td>POO</td>
                            <td>VS Code</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div className={styles.proyecto_descripcion}>
              <p> Sistema para matricular profesores, crear materias y asignarle profesores, matricula de estudiantes y que los estudiantes puedan matricular una materia correspondiente. Se creo con java y usé programación orientada a objetos para los diferentes requimientos que se esxigiron para el desarrollo de la plataforma.</p>
            </div>
            
            <div className={styles.proyecto_botones}>
                <a href="https://github.com/Gab1nh0/Academia" target="_blank">Ver Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></a>
            </div>
            </div>

        <br /><br /><br />
        

        <br /><br />
        </section>
        <br /><br /><br /><br />
        </main>   
    </>
  );
}
