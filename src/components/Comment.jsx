import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/lucasmbrute2.png" alt="" />

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

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Lucas!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
