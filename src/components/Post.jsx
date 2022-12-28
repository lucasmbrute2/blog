import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post({ post }) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        className={styles.avatar}
                        src="https://github.com/lucasmbrute2.png"
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
                        Acabei de subir mais um projeto no meu portifa. O nome
                        do projeto é🚀
                    </p>

                    <p>
                        <a href="#">jane.design/doctorcare</a>
                    </p>

                    <p>
                        <a href="#">
                            <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
                            <a href="#">#rocketseat</a>
                        </a>
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário " />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
