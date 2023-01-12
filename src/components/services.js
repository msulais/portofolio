import styles from '../styles/services.module.scss';
import services from '../items/services.js';

export function ServiceItem({
    title="",
    subtitle="",
    image={src: '/images/default.png', alt: 'No image'},
    tags=[],
    url
  }) {
  return <div className={styles.serviceItem}>
    <img src={image.src} alt={image.alt} />
    { tags.length > 0 &&
      <div className={styles.tagsBox}>
        {tags.map((value) => <div key={value} className={styles.tag}> {value} </div>)}
      </div>
    }
    <h3> { title } </h3>
    <p> { subtitle } </p>
    <div style={{flex: 1} }></div>
    { url &&
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div style={{flex: 1}}></div>
        <a target="_blank" rel="noopener noreferrer" href={url} className={styles.serviceItemUrl}>
          <span>Lihat</span>
          <span translate='no' className="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    }
  </div>
}

export default function Services(){
  return (
    <div className={styles.page} id="services">
      <div className={styles.decorator}>
        <div className={styles.decoratorLineTop}></div>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">engineering</span>
        </div>
        <div className={styles.decoratorLineBottom}></div>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Services</h1>
          <div className={styles.allServices}>
            {
              services.map((value, index) =>
                <ServiceItem
                  key={index}
                  title={value.title}
                  subtitle={value.subtitle}
                  image={value.image}
                  tags={value.tags}
                  url={value.url}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}