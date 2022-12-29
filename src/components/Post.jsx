import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Post({ post }) {
    const { publishedAt, author } = post;

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'as' HH:mm'h'",
        {
            locale: ptBR,
        }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    Publicado {" " + publishedDateRelativeToNow}
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
