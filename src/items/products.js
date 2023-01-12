class Image {
  /**
   * @param {string} src
   * @param {string} alt
   */
  constructor(src, alt) {
    this.src = src;
    this.alt = alt;
  }
}

class Product {
  /**
   * @param {string} title
   * @param {string} subtitle
   * @param {Image} image
   * @param {string[]} tags
   * @param {string} url
   */
  constructor(title, subtitle, image, tags, url){
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.tags  = tags;
    this.url   = url;
  }
}

let androidApp = [
  new Product(
    'Aplikasi Android',
    'Berbagai aplikasi Android yang aku buat dengan Flutter',
    new Image('/images/bg/android.png', 'Aplikasi Android'),
    ['Android', 'Discontinued'],
    'https://play.google.com/store/apps/dev?id=8392660381147653639'
  ),

  new Product(
    'Gambar dan vektor',
    'Berbagai gambar dan vektor yang aku publish di Shutterstock',
    new Image('/images/bg/shutterstock.png', 'Shutterstock'),
    ['Shutterstock'],
    'https://www.shutterstock.com/g/Muhasa+Photos'
  )
]

let products = [
  ...androidApp
];


export default products;