import '../styles/globals.css';
import Link from 'next/link';
import styles from '../styles/MyApp.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContactBox}>
          <Link href="/"><a>
          <div className={styles.brandPizza}>
              <img src="/assest/images/logo.svg" alt="brand" />
              <p>pizza Shop</p>
            </div>
            </a></Link>
            <Link href="/"><a><li className={styles.navbarContact}>Home</li></a></Link>
            <Link href="/about"><a><li className={styles.navbarContact}>ABout</li></a></Link>
            
        </ul>
      </nav>
      <div className={styles.container}>
        <Component{...pageProps} />
      </div>
    </>
  )
}

export default MyApp
