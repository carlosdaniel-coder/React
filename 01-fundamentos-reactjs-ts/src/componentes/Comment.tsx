import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeletarComentario: (comment: string) => void;
}

export function Comment({ content, onDeletarComentario }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function fireDeleteComment() {
        onDeletarComentario(content)
    }

    function fireLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/bausha2.png" />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Devon</strong>
                                <time title='11 de Maio às 08:13h' dateTime='2023-05-11 08:13:30'>Cerca de 1h atrás</time>
                            </div>

                            <button onClick={fireDeleteComment} title='Deletar comentário'>
                                <Trash size={24} />
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>

                    <footer className={styles.like}>
                        <button onClick={fireLikeComment}>
                            <ThumbsUp /> Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
        </div>
    )
}