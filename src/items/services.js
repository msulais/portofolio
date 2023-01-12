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

class Service {
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

let fiverr = [
  new Service(
    'I will create a webpage using vue',
    'Jasa membuat webpage menggunakan VueJs',
    new Image('/images/bg/fiverr-create-webpage-vue.png', 'I will create a webpage using vue'),
    ['Fiverr', 'Webpage', 'Vue'],
    'https://www.fiverr.com/teloer'
  ),

  new Service(
    'I will create a webpage using react',
    'Jasa membuat webpage menggunakan ReactJs',
    new Image('/images/bg/fiverr-create-webpage-react.png', 'I will create a webpage using react'),
    ['Fiverr', 'Webpage', 'React'],
    'https://www.fiverr.com/teloer'
  ),

  new Service(
    'I will create a webpage using html, css, javascript only',
    'Jasa membuat webpage hanya menggunakan HTML, CSS, dan javascript (tanpa framework)',
    new Image('/images/bg/fiverr-create-webpage-html-css-javascript.png', 'I will create a webpage using html, css, javascript only'),
    ['Fiverr', 'Webpage', 'HTML', 'CSS', 'Javascript'],
    'https://www.fiverr.com/teloer'
  ),
]

let services = [
  ...fiverr
];


export default services;