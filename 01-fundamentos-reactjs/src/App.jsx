import { Header } from "./componentes/Header.jsx"
import { Post } from "./componentes/Post.jsx"
import { Sidebar } from "./componentes/Sidebar.jsx"

import styles from "./App.module.css"
import './global.css'

// author: {avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/carlosdaniel-coder.png',
      name: 'Carlos Daniel',
      role: 'Date scientist'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-09-01 21:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/bausha2.png',
      name: 'bausha',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-09-02 22:00:00'),
  },
  
];

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          
          {posts.map(post => {
            return (
              <Post 
                author={post.author} 
                content={post.content} 
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
        
    </div>
  )

}
