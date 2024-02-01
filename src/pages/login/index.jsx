import style from "./login.module.css"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
// redux and API
import { useDispatch } from "react-redux"
import { postData, postToken } from "../../store/loginSlice"
import { getUser, getToken } from "../../services/callAPI.service"
// components
import MainButton from "../../components/mainButton"


/**
 * Return the sign in page
 * @returns { HTMLElement }
 */
function Login() {
    const emailInput = useRef(null)
    const passwordInput = useRef(null)
    const [emailInput_error, updateEmailInput_error] = useState(false)
    const [passwordInput_error, updatePasswordInput_error] = useState(false)
    const [isSending, updateIsSending] = useState(false)
    const [user, updateUser] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        // change the title of the page
        document.title = " Argent Bank - Connection"
    })

    const handleSubmit = () => {
        // add submit conditions before sending
        let isInputsValid = true
        let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
        if (emailInput.current.value.trim() === "" || !emailRegExp.test(emailInput.current.value)) {
            updateEmailInput_error("Please enter a email")
            isInputsValid = false
        } else {
            updateEmailInput_error(false)
        }
        if (passwordInput.current.value.trim() === "") {
            updatePasswordInput_error("Please enter a password")
            isInputsValid = false
        } else {
            updatePasswordInput_error(false)
        }
        if (isInputsValid) {
            updateIsSending(true)
        }
    }

    useEffect(() => {
        // try to login and update the store
        if (isSending && user === undefined) {
            const getInformations = async () => {
                try {
                    const token = await getToken(
                        emailInput.current.value.trim(),
                        passwordInput.current.value,
                    )
                    dispatch(postToken(token))
                    updateUser(await getUser(token)
                    )
                } catch {
                    updateEmailInput_error("bad correspondence between email and password")
                    updateIsSending(false)
                }
            }
            getInformations()
        }
        else if (user !== undefined) {
            dispatch(postData(user))
            navigate("/profile")
        }
    }, [dispatch, isSending, navigate, user])


    return (
        <main className={`
            ${style.main} 
            bg-dark 
            ${isSending && "loading"}
        `}>
            <section className={style.content}>
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>

                <form>
                    <div className={style.input_wrapper}>
                        <label htmlFor="email">Email</label>
                        {emailInput_error !== false &&
                            <span className={style.inputErrorMessage}>{emailInput_error}</span>
                        }
                        <input
                            type="text"
                            id="email"
                            ref={emailInput}
                        />
                    </div>
                    <div className={style.input_wrapper}>
                        <label htmlFor="password">Password</label>
                        {passwordInput_error !== false &&
                            <span className={style.inputErrorMessage}>{passwordInput_error}</span>
                        }
                        <input
                            type="password"
                            id="password"
                            ref={passwordInput}
                        />
                    </div>
                    <div className={style.input_remember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <MainButton
                        text="Sign In"
                        isLittleVersion={false}
                        type="submit"
                        method={handleSubmit}
                    />
                </form>
            </section>
        </main>
    )
}

export default Login