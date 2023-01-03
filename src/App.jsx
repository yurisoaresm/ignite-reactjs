import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Yuri Soa" 
        content="Lorem insptus ands astu riosn dalisetr amaunto" 
      />
    </div>
  )
}
