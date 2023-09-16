import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {

    const [comments, setComents] = useState([
        'Post muito bacana, hein?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const nadaNoComentario = newCommentText.length == 0

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function fireCreateNewCommen(event: FormEvent) {
        event.preventDefault()

        setComents([...comments, newCommentText])

        setNewCommentText('')
    }

    function fireNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    function onDeletarComentario(commentToDelete: string) {
        const listaDeComentariosSemOQueColoquei = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComents(listaDeComentariosSemOQueColoquei)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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
                            key={comment} 
                            content={comment} 
                            onDeletarComentario={onDeletarComentario} 
                        />
                    )
                })}
            </div>
        </article>
    )
}