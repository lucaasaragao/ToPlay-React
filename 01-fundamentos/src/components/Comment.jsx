import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/lucaasaragao.png"/>
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Magno</strong>
              <time>Cerca de 1 atras </time>
            </div>
            <button title='Deletar comentario'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Lucas, Parabens</p>

        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
          </footer>
      </div>
    
    </div>

  )
}