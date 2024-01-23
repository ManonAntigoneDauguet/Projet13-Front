import style from "./signIn.module.css"
import MainButton from "../../components/mainButton"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUser, getToken } from "../../services/callAPI.service"
import { useDispatch, useSelector } from "react-redux"
import { getData, postToken, signOut } from "../../features/login/loginSlice"
import login from "../../features/login/login.service"


/**
 * Return the sign in page
 * @returns { HTMLElement }
 */
function SignIn() {
    const mailInput = useRef(null)
    const passwordInput = useRef(null)
    const [mailInput_error, updateMailInput_error] = useState(false)
    const [passwordInput_error, updatePasswordInput_error] = useState(false)
    const [isSending, updateIsSending] = useState(false)
    const [user, updateUser] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.login.user)
    console.log(data)


    const handleSumbit = () => {
        // add submit conditions before sending
        let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
        if (mailInput.current.value.trim() === "" || !emailRegExp.test(mailInput.current.value)) {
            updateMailInput_error("Veillez entrer un email")
        } else {
            updateMailInput_error(false)
        }
        if (passwordInput.current.value.trim() === "") {
            updatePasswordInput_error("Veillez entrer un mot de passe")
        } else {
            updatePasswordInput_error(false)
        }
        updateIsSending(true)
    }

    useEffect(() => {
        if (isSending && user === undefined) {
            const getInformations = async () => {
                const token = await getToken(
                    mailInput.current.value.trim(),
                    passwordInput.current.value,
                )
                dispatch(postToken(token))
                updateUser(await getUser
                    (
                        token
                    )
                )
            }
            getInformations()
        }
        else if (user !== undefined) {
            dispatch(getData(user))
            navigate("/user")
        }
        updateIsSending(false)
    }, [dispatch, isSending, navigate, user])

    return (
        <main className={`${style.main} bg-dark`}>
            <section className={style.content}>
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>

                <form>
                    <div className={style.input_wrapper}>
                        <label htmlFor="username">Username</label>
                        {mailInput_error !== false &&
                            <span className={style.inputErrorMessage}>{mailInput_error}</span>                     
                        }
                        <input
                            type="text"
                            id="username"
                            ref={mailInput}
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
                        method={handleSumbit}
                    />
                </form>
            </section>
        </main>
    )
}

export default SignIn