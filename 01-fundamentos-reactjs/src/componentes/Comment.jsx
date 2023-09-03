import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
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

                            <button title='Deletar comentário'>
                                <Trash size={24} />
                            </button>
                        </header>

                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>

                    <footer className={styles.like}>
                        <button>
                            <ThumbsUp /> Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
        </div>
    )
}