import styles from '../styles/products.module.scss';
import products from '../items/products.js';

export function ProductItem({
    title="",
    subtitle="",
    image={src: '/images/default.png', alt: 'No image'},
    tags=[],
    url
  }) {
  return <div className={styles.productItem}>
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
        <a target="_blank" rel="noopener noreferrer" href={url} className={styles.productItemUrl}>
          <span>Lihat</span>
          <span translate='no' className="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    }
  </div>
}

export default function Product(){
  return (
    <div className={styles.page} id="products">
      <div className={styles.decorator}>
        <div className={styles.decoratorLineTop}></div>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">category</span>
        </div>
        <div className={styles.decoratorLineBottom}></div>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Produkku</h1>
          <div className={styles.allProducts}>
            {
              products.map((value, index) =>
                <ProductItem
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