import style from "./header.module.css"
import argentBankLogo from "../../assets/argentBankLogo.png"
import React from "react"
import { Link } from 'react-router-dom'
import { useState } from "react"


/**
 * Return the application's header
 * @returns { HTMLElement }
 */
function Header() {
    const [connected, updateConnected] = useState(true)
    const [userName, updateUserName] = useState("Tony")

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
                <div className={style.signInContainer}>
                    {
                        connected ?
                        <React.Fragment>
                            <Link to="/user" className={style.navItem}>
                                <i className="fa fa-user-circle"></i>
                                {userName}
                            </Link>                            
                            <Link to="/" className={style.navItem}>
                                <i className="fa fa-sign-out"></i>
                                Sign Out
                            </Link> 
                        </React.Fragment>
                        : 
                        <Link to="/sign-in" className={style.navItem}>
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>

                    }

                </div>
            </nav>
        </header>
    )
}

export default Header