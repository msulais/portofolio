import styles from '../styles/home.module.scss';
export default function Home(){
  return (
    <div className={styles.page} id="home">
      <div className={styles.decorator}>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">home</span>
        </div>
        <div className={styles.decoratorLine}></div>
      </div>
      <div className={styles.content}>
        <div>
          <h3>Hai, namaku</h3>
          <h1 translate='no'>Muhammad Sulais</h1>
          <div className={styles.navigation}>
            <a title="Home" href='/#home'>
              <span translate='no' className="material-symbols-outlined">home</span>
            </a>
            <a title="Tentang saya" href='/#about'>
              <span translate='no' className="material-symbols-outlined">account_circle</span>
            </a>
            <a title="Produkku" href='/#products'>
              <span translate='no' className="material-symbols-outlined">category</span>
            </a>
            <a title="Artikelku" href='/#articles'>
              <span translate='no' className="material-symbols-outlined">article</span>
            </a>
            <a title="Services" href='/#services'>
              <span translate='no' className="material-symbols-outlined">engineering</span>
            </a>
            <a title="End" href='/#end'>
              <span translate='no' className="material-symbols-outlined">check_circle</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}