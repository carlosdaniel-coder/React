import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import React from 'react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.pexels.com/photos/3201630/pexels-photo-3201630.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=-2" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/carlosdaniel-coder.png" />

                <strong>Carlos Daniel</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}