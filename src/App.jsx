import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Yuri Soares"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex autem cum id, nemo quae perspiciatis. Natus, incidunt vitae ex enim quas iste temporibus nesciunt sint illo. Molestiae soluta dolore inventore."   
          />
          <Post 
            author="Linus Torvalds"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur excepturi earum atque, voluptate ipsa reprehenderit quidem, optio mollitia quos officiis natus velit inventore molestias consectetur. Vel maxime rerum iusto ullam!
            "   
          />
        </main>
      </div>
    </div>
  )
}

