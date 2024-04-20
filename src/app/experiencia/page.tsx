import styles from '../page.module.css';
import stylesExperiencie from '../experiencia/experiencia.module.css';

export default function Habilidades(){
    return (
        <>
            <main className={styles.main}>
                <div className={styles.content}>
                    <h1 className={styles.h1}>Experiencia</h1>
                    <div className={stylesExperiencie.rectagulo}></div>
                    <div className={stylesExperiencie.circulo1}></div>
                    <div className={stylesExperiencie.circulo2}></div>
                    <br /><br /><br /><br /><br />
                        <div className={stylesExperiencie.timeline_container}>
                            
                            <div className={stylesExperiencie.texto}>
                            <div className={stylesExperiencie.texto_top}>
                                <h1>Kitplex</h1>
                                <p className={stylesExperiencie.fecha}>(Oct 2023 - Dic 2023)</p>
                            </div>
                                <p className={stylesExperiencie.cargo}>Full Stack Web-Developer</p>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                        <div className={stylesExperiencie.timeline_container}>
                            
                            <div className={stylesExperiencie.texto}>
                                
                                <div className={stylesExperiencie.texto_top}>
                                    <h1>Freelancer</h1>
                                    <p className={stylesExperiencie.fecha}>(Feb 2024 - Act)</p>
                                </div>
                                <p className={stylesExperiencie.cargo}>Full Stack Web-Developer</p>
                            </div>
                        </div>
                </div>
            </main>
        </>
    )
}