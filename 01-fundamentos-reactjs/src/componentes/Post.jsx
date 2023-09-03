import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {

    console.log(props)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/EliasGcf.png" />
                    <div className={styles.authorInfo}>
                        <strong>Carlos Daniel</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='2022-01-23 00:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Escreva um comentário...'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}