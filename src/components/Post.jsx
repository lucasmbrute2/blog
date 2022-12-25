import styles from "./Post.module.css";

export function Post() {
    return (
        <div className={styles.post}>
            <article>
                <header>
                    <div className={styles.author}>
                        <img
                            className={styles.avatar}
                            src="https://github.com/lucasmbrute2.png"
                            alt="Profile photo"
                        />
                        <div className={styles.authorInfo}>
                            <strong>Lucas Dantas</strong>
                            <span>Web Developer</span>
                        </div>
                    </div>

                    <time
                        title="11 de Maio as 8:13h"
                        dateTime="2022-05-11 08:13:30"
                    >
                        Publicado há 1h
                    </time>
                </header>

                <div className={styles.content}>
                    <p>
                        <p>Fala galeraa 👋</p>

                        <p>
                            Acabei de subir mais um projeto no meu portifa. É um
                            projeto que fiz no NLW Return, evento da Rocketseat.
                            O nome do projeto é DoctorCare 🚀
                        </p>

                        <p>
                            <a href="#">jane.design/doctorcare</a>
                        </p>

                        <p>
                            <a href="#">
                                <a href="#">#novoprojeto</a>{" "}
                                <a href="#">#nlw</a> <a href="#">#rocketseat</a>
                            </a>
                        </p>
                    </p>
                </div>
            </article>
        </div>
    );
}
