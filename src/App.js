import 'react-modern-drawer/dist/index.css'
import "./styles/page.scss"
import lang from "./data/languages"
import products from './data/products'
import skills from "./data/skills"
import { useEffect, useState } from "react"
import hljs from 'highlight.js'
import Cookies from "js-cookie"
import { mdiWeatherSunny, mdiWeatherNight, mdiTranslate, mdiMenu } from '@mdi/js'
import Icon from '@mdi/react';
import Menu, { MenuItem } from "./components/menu"
import locales from "./data/locales"
import Drawer from 'react-modern-drawer'

function Home({locale, setLocale, theme, setTheme}){
    const [open, setOpen] = useState(false)

    function changeTheme(){
        let root = document.querySelector(":root")
        switch (theme){
            case "light":
                if (!root.classList.contains("dark")) root.classList.add("dark")
                break
            case "dark":
                if (root.classList.contains("dark")) root.classList.remove("dark")

            // no default
        }
        setTheme(theme === "dark"? "light" : "dark")
        Cookies.set("theme", theme === "dark"? "light" : "dark")
    }

    function changeLocale(locale){
        Cookies.set('lang', locale)
        document.querySelector(":root").setAttribute('lang', locale)
        setLocale(locale)
    }

    function toggleDrawer(){
        setOpen(!open)
    }

    useEffect(() => {
        if (Cookies.get("theme") === "dark") setTheme("dark")
    })

    return (<section id="home">
        <Drawer
            open={open}
            onClose={toggleDrawer}
            direction='right'
            className='drawer'>
            <a href="#about"   onClick={toggleDrawer}>{lang['top-bar']['about'   ][locale]}</a>
            <a href="#skills"  onClick={toggleDrawer}>{lang['top-bar']['skills'  ][locale]}</a>
            <a href="#my-works"onClick={toggleDrawer}>{lang['top-bar']['my-works'][locale]}</a>
            <div>
                <p>{lang['top-bar']['language'][locale]}</p>
                <button type="button" data-selected={locale === 'id'? '' : undefined} onClick={(ev) => changeLocale('id')}>Indonesia</button>
                <button type="button" data-selected={locale === 'en'? '' : undefined} onClick={(ev) => changeLocale('en')}>English</button>
            </div>
        </Drawer>
        <header className="top-bar">
            <button type="button" onClick={changeTheme}>
                { theme === "light"
                    ? <Icon path={mdiWeatherNight} />
                    : <Icon path={mdiWeatherSunny} />
                }
            </button>
            <nav className="top-bar-menu">
                <a href="#about"   >{lang['top-bar']['about'   ][locale]}</a>
                <a href="#skills"  >{lang['top-bar']['skills'  ][locale]}</a>
                <a href="#my-works">{lang['top-bar']['my-works'][locale]}</a>
                <Menu>
                    <p><Icon path={mdiTranslate} /> {locales[locale]}</p>
                    <MenuItem selected={locale === 'id'} onClick={(ev) => changeLocale('id')} text="Indonesia" />
                    <MenuItem selected={locale === 'en'} onClick={(ev) => changeLocale('en')} text="English" />
                </Menu>
            </nav>
            <button type="button" onClick={toggleDrawer} className="top-bar-menu-btn">
                <Icon path={mdiMenu} />
            </button>
        </header>
        <div className="home-name">
            <h1>
                <svg viewBox="0 0 194 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="194" y="51" width="142" height="36" rx="8" transform="rotate(90 194 51)" fill="#00A811"/>
                    <rect x="36" width="193" height="36" rx="8" transform="rotate(90 36 0)" fill="#00A811"/>
                    <path d="M114.602 36.1031L-1.52588e-05 36.103L-1.28019e-05 8.00001C-1.24157e-05 3.58173 3.58171 1.31825e-05 7.99999 1.35687e-05L106.602 2.21888e-05C111.021 2.25751e-05 114.602 3.58175 114.602 8.00002L114.602 36.1031Z" fill="#1CDC30"/>
                    <path d="M194 87L79 87L79 51L186 51C190.418 51 194 54.5817 194 59L194 87Z" fill="#1CDC30"/>
                    <path d="M115 51L115 185C115 189.418 111.418 193 107 193L87 193C82.5817 193 79 189.418 79 185L79 51L115 51Z" fill="#00A811"/>
                </svg>
                &nbsp;UHAMMAD
                <br/>
                <svg viewBox="0 0 167 194" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.52588e-05" y="1.90735e-06" width="130.17" height="36.103" rx="8" fill="#00A811"/>
                    <path d="M51.008 78H158.273C162.691 78 166.273 81.5817 166.273 86V106.103C166.273 110.521 162.691 114.103 158.273 114.103H51.008V78Z" fill="#00A811"/>
                    <path d="M158.273 78.4993C162.691 78.4993 166.273 82.081 166.273 86.4993L166.273 185.102C166.273 189.52 162.691 193.102 158.273 193.102L138.17 193.102C133.751 193.102 130.17 189.52 130.17 185.102L130.17 78.4993L158.273 78.4993Z" fill="#1CDC30"/>
                    <path d="M36.103 1.90735e-06L36.103 114.602L8 114.602C3.58172 114.602 2.77653e-06 111.021 2.96966e-06 106.602L7.2797e-06 8C7.47283e-06 3.58172 3.58173 4.85797e-07 8.00001 6.78926e-07L36.103 1.90735e-06Z" fill="#1CDC30"/>
                    <path d="M36.103 164.999C36.103 160.58 39.6848 156.999 44.103 156.999H166.273V185.102C166.273 189.52 162.691 193.102 158.273 193.102H44.103C39.6848 193.102 36.103 189.52 36.103 185.102V164.999Z" fill="#00A811"/>
                </svg>
                &nbsp;ULAIS
            </h1>
        </div>
    </section>)
}

function About({locale}){

    const status = [
        lang['about']['student'][locale],
        lang['about']['mobile-web-developer'][locale],
    ]

    const socials = [
        {
            name: 'Github',
            link: 'https://github.com/msulais'
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/muh_sulais'
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/muh_sulais'
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/muhammad.sulais.9'
        },
    ]

    return (<section id="about">
        <div className="card-decoration" data-position="left"><div /><div /><div /><div /></div>
        <div className="card about-card">
            <div>
                <img className="about-image" src="/muhammad_sulais.jpg" alt="Muhammad Sulais" />
                <div className="about-status">
                    { status.map((value) => <div key={value}>{value}</div>) }
                </div>
            </div>
            <div className="about-description">
                <h2 className="section-title">
                    <span>{lang['about']['about-me'][locale].substring(0, 1)}</span>{lang['about']['about-me'][locale].substring(1).toUpperCase()}
                </h2>
                <div>
                    <p dangerouslySetInnerHTML={{__html: lang['about']['profile-description'][locale]}}></p>
                    <div>
                        { socials.map((social) => <a
                            key={social.name}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={social.link}>{social.name}</a>)}
                    </div>
                </div>
            </div>
        </div>
        <div className="card-decoration" data-position="right"><div /><div /><div /><div /></div>
    </section>)
}

function Skills({locale, theme}){
    return (<section id="skills">
        <h2 className="section-title">
            <span>{lang['skills']['skills'][locale].substring(0, 1)}</span>{lang['skills']['skills'][locale].substring(1).toUpperCase()}
        </h2>
        <div className="center">
            <div className="skills">
                { skills.map((skill) => <div key={skill.name}>
                    <div style={{
                        color: theme === 'light'? skill.color : skill.color_dark,
                        backgroundColor: theme === 'light'? skill.background_color : skill.background_color_dark
                    }}>{skill.name}</div>
                    <div>{skill.progress}</div>
                </div>)}
            </div>
        </div>
    </section>)
}

function MyWorks({locale}){
    return (<section id="my-works">
        <div className="my-works">
            <h2 className="section-title">
                <span>{lang['my-works']['my-works'][locale].substring(0, 1)}</span>{lang['my-works']['my-works'][locale].substring(1).toUpperCase()}
            </h2>
            <div>
                { products.map((product) => <a
                    key={product.link}
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prod">
                        <img src={product.image} alt={product.name} />
                        <p className="prod-category">{product.category}</p>
                        <p className="prod-name">{product.name}</p>
                        <p className="prod-description">{product.description(locale)}</p>
                    </a>
                )}
            </div>
        </div>
    </section>)
}

function End({locale}){
    return (<section id="end">
        <div className="card end-card">
            <p>© {new Date().getFullYear()} Muhammad Sulais</p>
            <p>{lang['end']['last-update'][locale]}: {new Date(2023, 4, 17).toLocaleDateString(locale)}</p>
        </div>
    </section>)
}

export default function Page(){
    const [locale, setLocale] = useState('en')
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        hljs.highlightAll()
        setLocale(document.querySelector(':root').getAttribute('lang') ?? 'en')
    }, [])
    return (<>
        <Home locale={locale} setLocale={setLocale} theme={theme} setTheme={setTheme} />
        <About locale={locale} />
        <Skills locale={locale} theme={theme} />
        <MyWorks locale={locale} />
        <End locale={locale} />
    </>)
}
