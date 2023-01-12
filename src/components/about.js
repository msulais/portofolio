import styles from '../styles/about.module.scss';
export default function About(){
  return (
    <div className={styles.page} id="about">
      <div className={styles.decorator}>
        <div className={styles.decoratorLineTop}></div>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">account_circle</span>
        </div>
        <div className={styles.decoratorLineBottom}></div>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Tentang saya</h1>
          <div className={styles.aboutMe}>
            <img src="/images/muhammad_sulais.jpg" alt="Muhmammad Sulais" className={styles.aboutMeImage} />
            <div className={styles.aboutMeDescription}>
              <p>
              Konnichiwa... Namaku <strong>Muhammad Sulais</strong>.
              Aku lahir tahun 2003 di Indonesia dan termasuk rakyat Indonesia.
              Hobiku adalah programming, video games, dan designing.
              Sejauh ini aku sudah banyak belajar tentang bahasa
              pemrograman, web development, mobile development, atau
              lain sebagainya yang berhubungan dengan programming.
              Untuk designing biasanya buat background vektor atau
              buat UI desain.
              <br />
              <br />

              Walaupun aku hobi main video games, tapi sebenarnya aku
              jarang bermain video games. Entahlah... Mungkin karena
              cuma main sendiri? Mungkin sih.
              </p>
              <div className={styles.mediaSocial}>
                <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/muhammad.sulais.9'>
                  <img src="/images/logo/facebook_logo.png" alt="muhammad.sulais.9 | Muhammad Sulais | Facebook" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/muh_sulais'>
                  <img src="/images/logo/instagram_logo.png" alt="muh_sulais | Muhammad Sulais | Instagram" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/muh_sulais'>
                  <img src="/images/logo/twitter_logo.png" alt="muh_sulais | Muhammad Sulais | Twitter" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/msulais'>
                  <img src="/images/logo/github_logo.png" alt="msulais | Muhammad Sulais | Github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}