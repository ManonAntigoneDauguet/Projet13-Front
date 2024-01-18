import style from "./mainButton.module.css"
import { Link } from 'react-router-dom'


/**
 * Return the main button
 * @param { String } text 
 * @param { String } [navLink] as router path
 * @param { Boolean } [isLittleVersion]
 * @returns { HTMLElement }
 */
function MainButton({ text, navLink = "#", isLittleVersion = false }) {
    return (
        <Link
            to={navLink}
            className={style.navLink}>
            <button className={`
                ${isLittleVersion ? style.little : style.big}
                ${style.main}
            `}>
                {text}
            </button>
        </Link>
    )
}

export default MainButton