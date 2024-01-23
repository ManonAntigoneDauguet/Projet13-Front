import style from "./mainButton.module.css"
import { Link } from 'react-router-dom'


/**
 * Return the main button
 * @param { String } text 
 * @param { String } [navLink="#"] as router path
 * @param { Boolean } [isLittleVersion=false]
 * @param { Function } [method] as function called on click
 * @param { Strin } [type="button"] as the type of html button
 * @returns { HTMLElement }
 */
function MainButton({ text, navLink = "#", isLittleVersion = false, method, type = "button" }) {
    return (
        <Link
            to={navLink}
            className={style.navLink}>
            <button
                className={`
                    ${isLittleVersion ? style.little : style.big}
                    ${style.main}
                `}
                onClick={method}
                type={type}
            >
                {text}
            </button>
        </Link>
    )
}

export default MainButton