import style from "./header.module.css"
import argentBankLogo from "../../assets/argentBankLogo.png"
import { Link } from 'react-router-dom'


/**
 * Return the application's header
 * @returns { HTMLElement }
 */
function Header() {
    return (
        <header>
            <nav>
                <Link to="/" className={style.logo}>
                    <img
                        className={style.logo_image}
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to="/sign-in" className={style.navItem} href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header