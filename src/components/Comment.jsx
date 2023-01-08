import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/yurisoaresm.png" />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yuri Soares</strong>

              <time title="03 de Janeiro às 17:59h" dateTime="2023-01-03 17:59:23">Cerca de 1h atrás</time>

            </div>
            
            <button title='Deletar comentário'>
                <Trash />
            </button>
          </header>

          <p>Conteúdo do comentário.</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}