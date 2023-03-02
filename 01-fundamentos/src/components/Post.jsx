import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post (){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucaasaragao.png"/>
          <div className={styles.authorInfo}>
            <strong>Lucas Magno</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time>Publicado ha 1 hora</time>
      </header>

        <div className={styles.content}>
          <p>Fala galera</p>
          <p>Acabei de terminar meu curso de iniciacao no react</p>
          <p><a href="">Vem ver como ficou!</a></p>
          <p><a href="">#code</a></p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu comentario</strong>

          <textarea
          placeholder='Deixe um comentario'
          />
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
  )
}