import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import Image from 'next/image'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                {/* <Image width='110px' height='110px' src="/images/logo.svg" alt="ig.news"/> */}
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}