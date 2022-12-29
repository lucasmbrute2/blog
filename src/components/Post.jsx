import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ post }) {
    const [comments, setComments] = useState(["Muito bom", "foda"]);
    const [newCommentText, setNewCommentText] = useState("");

    const { publishedAt, author, content } = post;

    const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'as' HH:mm'h'",
        {
            locale: ptBR,
        }
    );

    const handleCommentSubmit = (e) => {
        e?.preventDefault();
        if (!newCommentText.length || comments.includes(newCommentText)) return;

        setComments([...comments, newCommentText]);
        setNewCommentText("");
    };

    const handleNewCommentChange = (e) => {
        console.log(e.target.value);
        setNewCommentText(e.target.value);
    };

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const deleteComment = (content) => {
        const commentsWithoutDeletedOne = comments.filter(
            (comment) => comment !== content
        );

        setComments(commentsWithoutDeletedOne);
    };

    const isNewCommentEmpty = newCommentText.length === 0;

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
                {content.map((item) => {
                    if (item.type === "paragraph") {
                        return <p key={item.content}>{item.content}</p>;
                    } else if (item.type === "link") {
                        return (
                            <p key={item.content}>
                                <a href="#">{item.content}</a>
                            </p>
                        );
                    }
                })}
            </div>
            <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário "
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    );
}
