import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comments, setComents] = useState([1, 2])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function fireCreateNewCommen() {
        event.preventDefault()
        setComents([...comments, comments.length + 1])
        console.log(comments)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return (<p>{line.content}</p>)
                    } else if (line.type == 'link') {
                        return (<p><a href="#">{line.content}</a></p>)
                    }
                })}
            </div>

            <form onSubmit={fireCreateNewCommen} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Escreva um comentário...'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comments => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}