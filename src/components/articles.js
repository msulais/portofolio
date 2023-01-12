import styles from '../styles/articles.module.scss';
export default function Articles(){
  return (
    <div className={styles.page} id="articles">
      <div className={styles.decorator}>
        <div className={styles.decoratorLineTop}></div>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">article</span>
        </div>
        <div className={styles.decoratorLineBottom}></div>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Artikelku</h1>
          <p
            style={{
              backgroundColor: '#eeeeee',
              width: 'fit-content',
              padding: '8px',
              marginLeft: '24px',
              marginTop: '24px'
            }}
          >Under development ...</p>
        </div>
      </div>
    </div>
  )
}