import "./styles/Page.scss"
import FAB from "./components/FloatingActionButton"
import Icon from "./components/Icon"
import { useEffect, useState } from "react"
import hljs from 'highlight.js'
import Cookies from "js-cookie"
import { motion } from "framer-motion"

function Home(){
    const [theme, setTheme] = useState("light");

    function changeTheme(){
        let root = document.querySelector(":root")
        switch (theme){
            case "light":
                if (!root.classList.contains("dark")) root.classList.add("dark");
                break
            case "dark":
                if (root.classList.contains("dark")) root.classList.remove("dark");

            // no default
        }
        setTheme(theme === "dark"? "light" : "dark");
        Cookies.set("theme", theme === "dark"? "light" : "dark");
    }

    useEffect(() => {
        if (Cookies.get("theme") === "dark") setTheme("dark");
    }, []);

    return (<div id="home">
        <header className="header">
            <motion.button
                whileTap={{scale: 1.5}}
                type="button"
                onClick={changeTheme}>
                <Icon name={`${theme === "dark"? "light" : "dark"}_mode`} />
            </motion.button>
            <a href="#about">Tentang</a>
            <div className="home-divider"></div>
            <a href="#skills">Skills</a>
            <div className="home-divider"></div>
            <a href="#products">Produk</a>
            <div className="home-divider"></div>
            <a href="#services">Service</a>
        </header>
        <div className="home-full-name">
            <motion.h1
                initial={{opacity: 0, x: -32}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: .5}}
                ><span>M</span>UHAMMAD <br/> <span>S</span>ULAIS
            </motion.h1>
        </div>
    </div>)
}

function About(){
    return (<section id="about">
        <h2 className="section-header"><Icon name="info" /><span><span>T</span>ENTANG</span></h2>
        <div className="about">
            <img src="/muhammad_sulais.jpg" alt="Muhammad Sulais" />
            <div className="about-description">
                <p>
                    Namaku <span>Muhammad Sulais</span>. Biasa dipanggil <q><span>Sules</span></q>, <q><span>Sulis
                    </span></q>, maupun <q><span>Sulais</span></q> (aku pribadi lebih suka dipanggil <q><span>Sules
                    </span></q>). Lahir di <a href="https://goo.gl/maps/QnTAZJzYaDPMEh8q7"><span>Kediri, Indonesia
                    </span></a> pada tahun <span>2003</span>. Hobiku saat ini adalah <span>programming</span>,
                    <span>desain</span>, <span>anime</span>, dan <span> game</span>.
                </p>
                <p>
                    Sejauh ini aku sudah banyak belajar banyak bahasa pemrograman, framework, maupun library.
                    Aku juga sudah membuat beberapa aplikasi <span>android</span> dan beberapa <span>web</span> yang
                    bisa kalian akses melalui internet.
                </p>
                <p>
                    Dalam hal desain, aku biasanya membuat desain <span>logo</span>, <span>icon</span>, <span>
                    background</span>, <span>UI (user interface) mobile & web</span>. Dengan adanya <span>Figma</span>
                    /<span>Inkscape</span>/<span>GIMP</span>/<span>Canva</span>, aku bisa membuat desain yang wah.
                    Bisa dibilang aku buat desain karena buat kebutuhan proyek programmingku aja sebenarnya, bukan
                    untuk dijual ke orang lain. Tapi nanti mungkin lain.
                </p>
                <div className="about-socials">
                    <a href="https://github.com/msulais">Github</a>
                    <a href="https://twitter.com/muh_sulais">Twitter</a>
                    <a href="https://www.instagram.com/muh_sulais">Instagram</a>
                    <a href="https://www.facebook.com/muhammad.sulais.9">Facebook</a>
                </div>
            </div>
        </div>
    </section>)
}

function Skills(){
    const skills = [
        {
            name: "Website",
            icon: <Icon name="public" />,
            skills: ["React", "HTML", "CSS", "SCSS", "Javascript", "Vue", "Next.js", "Nuxt.js", "Node.js", "Express.js"]
        },
        {
            name: "Programming language",
            icon: <Icon name="code" />,
            skills: ["Python", "Java", "C++", "Javascript", "Dart"]
        },
        {
            name: "Design",
            icon: <Icon name="format_paint" />,
            skills: ["Figma", "Canva", "Inkscape", "GIMP"]
        },
        {
            name: "Mobile app",
            icon: <Icon name="smartphone" />,
            skills: ["Flutter"]
        },
        {
            name: "Database",
            icon: <Icon name="database" />,
            skills: ["MySQL"]
        }
    ];
    return (<section id="skills">
        <h2 className="section-header"><Icon name="emoji_objects" /><span><span>S</span>KILLS</span></h2>
        <p>Berikut adalah skill-skill yang aku kuasai saat ini</p>
        <div className="skills">
            { skills.map((item) =>
                <motion.div
                    initial={{opacity: 0, x: -32}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                    key={item.name}
                    className="skill-category">
                    <div className="skill-category-name">
                        {item.icon}
                        <h3>{ item.name }</h3>
                    </div>
                    <div className="skill">
                        { item.skills.map((skill) =>
                            <div key={skill}>{ skill }</div>
                        )}
                    </div>
                </motion.div>
            )}
        </div>
    </section>)
}

function Products(){

    const products = [
        {
            name: "Android Apps",
            description: "Beberapa aplikasi android yang aku buat dengan Flutter.",
            labels: ["Android", "Flutter"],
            link: "https://play.google.com/store/apps/dev?id=8392660381147653639",
            imageSource: "/google-console-header.png"
        },
        {
            name: "Redmerah",
            description: "Website utamaku, masih bingung mau diisi apa. Saat itu aku buat cuma buat belajar web development.",
            labels: ["Website"],
            link: "https://redmerah.com/",
            imageSource: "/redmerah.png"
        },
        {
            name: "Artic",
            description: "Web template untuk article/news/blog. Ini sebenarnya adalah template yang mau aku jual di suatu tempat. Tapi karena selalu di tolak, jadinya tidak terpakai sampai sekarang.",
            labels: ["Website", "Template"],
            link: "https://artic-delta.vercel.app/",
            imageSource: "/artic-template.png"
        }
    ];

    return (<section id="products">
        <h2 className="section-header"><Icon name="category" /><span><span>P</span>RODUK</span></h2>
        <p>Beberapa produk yang sudah aku buat</p>
        <div className="products">
            { products.map((product) =>
                <motion.div
                    initial={{opacity: 0, x: -32}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                    className="product"
                    key={product.name}>
                    <a href={product.link}>
                        <img src={ product.imageSource } alt={ product.name } />
                    </a>
                    <div className="product-labels">
                        { product.labels.map((label) =>
                            <div key={label}>{label}</div>
                        )}
                    </div>
                    <h3><a href={product.link}>{ product.name }</a></h3>
                    <p>{ product.description }</p>
                </motion.div>
            )}
        </div>
    </section>)
}

function Services(){
    const services = [
        {
            name: "I will convert your UI design to Vue, React, or HTML",
            description: "Service untuk mengubah file desain menjadi website",
            labels: ["Fiverr", "Front-End"],
            link: "https://www.fiverr.com/share/dr8y9a",
            imageSource: "/HTML.png"
        }
    ]
    return (<section id="services">
        <h2 className="section-header"><Icon name="engineering" /><span><span>S</span>ERVICE</span></h2>
        <div className="services">
            { services.map((service) =>
                <motion.div
                    initial={{opacity: 0, x: -32}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: .5}}
                    className="service"
                    key={service.name}>
                    <a href={service.link}>
                        <img src={ service.imageSource } alt={ service.name } />
                    </a>
                    <div className="service-labels">
                        { service.labels.map((label) =>
                            <div key={label}>{label}</div>
                        )}
                    </div>
                    <h3><a href={service.link}>{ service.name }</a></h3>
                    <p>{ service.description }</p>
                </motion.div>
            )}
        </div>
    </section>)
}

function End(){
    return (<section id="end">
        <h2 className="section-header"><Icon name="check_circle" /><span><span>P</span>ENUTUP</span></h2>
        <pre><code className="lang-cpp">{`#include<iostream>
#include<string>
int main(){int this_year=${new Date().getFullYear()};std::string first_name="Muhammad",last_name="Sulais",full_name=first_name+" "+last_name;std::cout<<"My full name is "<<'"'+full_name+'"'<<std::endl<<std::endl;std::cout<<"© "<<this_year<<" "+full_name+" • made with React"<<std::endl;return 0;}

/*
 * OUTPUT:
 * My full name is "Muhammad Sulais"
 *
 * © 2023 Muhammad Sulais • made with React
 */`}</code></pre>
    </section>)
}

export default function Page(){
    useEffect(() => {
        hljs.highlightAll()
    }, [])
    return (<>
        <Home />
        <About />
        <Skills />
        <Products />
        <Services />
        <End />
        <FAB />
    </>)
}
