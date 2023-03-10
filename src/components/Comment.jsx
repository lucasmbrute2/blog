import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    const handleRemoveComment = (e) => {
        e.preventDefault();
        onDeleteComment(content);
    };

    // const handleLikeButton = (e) => {
    //     e.preventDefault();
    //     setLikeCount(likeCount + 1);
    // };

    return (
        <div className={styles.comment}>
            <Avatar
                className={styles.avatar}
                hasBorder={false}
                src="https://github.com/lucasmbrute2.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContentWrapper}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luana Lima</strong>
                            <time
                                title="11 de Maio as 8:13h"
                                dateTime="2022-05-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            onClick={handleRemoveComment}
                            title="Deletar comentário"
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
