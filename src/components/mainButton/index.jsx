import style from "./mainButton.module.css"
import { Link } from 'react-router-dom'


/**
 * Return the main button
 * @param { String } text 
 * @param { String } [navLink] as router path
 * @param { Boolean } [isUnderlined] 
 * @param { Boolean } [isLittleVersion]
 * @returns { HTMLElement }
 */
function MainButton({ text, navLink = "#", isUnderlined = false, isLittleVersion = false }) {
    return (
        <Link
            to={navLink}
            className={isUnderlined ? style.underlined : style.notUnderlined}>
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