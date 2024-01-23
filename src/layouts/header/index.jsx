import style from "./header.module.css"
import argentBankLogo from "../../assets/argentBankLogo.png"
import ConfirmationModale from "../../components/confirmationModal"
import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "../../store/loginSlice"


/**
 * Return the application's header
 * @returns { HTMLElement }
 */
function Header() {
    const state = useSelector((state) => state.login)
    const [isModalVisible, updateIsModalVisible] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(signOut())
        navigate("/")
    }

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
                        state.isConnected ?
                            <React.Fragment>
                                <Link to="/user" className={style.navItem}>
                                    <i className="fa fa-user-circle"></i>
                                    {state.user?.firstName}
                                </Link>
                                <button
                                    type="button"
                                    to="/"
                                    className={style.navItem}
                                    onClick={() => updateIsModalVisible(true)}>
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                                </button>
                            </React.Fragment>
                            :
                            <Link to="/sign-in" className={style.navItem}>
                                <i className="fa fa-user-circle"></i>
                                Sign In
                            </Link>
                    }
                </div>
            </nav>
            {isModalVisible &&
                <ConfirmationModale
                    methodOn={handleClick}
                    methodOff={() => updateIsModalVisible(false)}
                    text="Souhaitez-vous vraiment vous déconnecter ?"
                />
            }
        </header>
    )
}

export default Header