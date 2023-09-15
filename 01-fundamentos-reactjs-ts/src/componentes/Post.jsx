import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [comments, setComents] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const nadaNoComentario = newCommentText.length == 0

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function fireCreateNewCommen() {
        event.preventDefault()

        setComents([...comments, newCommentText])

        setNewCommentText('')
    }

    function fireNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function onDeletarComentario(commentToDelete) {
        const listaDeComentariosSemOQueColoquei = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComents(listaDeComentariosSemOQueColoquei)
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
                        return (<p key={line.content}>{line.content}</p>)
                    } else if (line.type == 'link') {
                        return (<p key={line.content}><a href="#">{line.content}</a></p>)
                    }
                })}
            </div>

            <form onSubmit={fireCreateNewCommen} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name='comment'
                    value={newCommentText}
                    placeholder='Escreva um comentário...'
                    onChange={fireNewCommentChange} 
                    required
                />
                <footer>
                    <button type='submit' disabled={nadaNoComentario}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={content} 
                            content={comment} 
                            onDeletarComentario={onDeletarComentario} 
                        />
                    )
                })}
            </div>
        </article>
    )
}