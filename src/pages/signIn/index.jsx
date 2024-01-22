import style from "./signIn.module.css"
import MainButton from "../../components/mainButton"
import { useEffect, useRef, useState } from "react"
import { getUser, getToken } from "../../services/callAPI.service"
import { useDispatch, useSelector } from "react-redux"
import { getData, postToken } from "../../features/login/loginSlice"
import login from "../../features/login/login.service"
import { useNavigate } from "react-router-dom"


/**
 * Return the sign in page
 * @returns { HTMLElement }
 */
function SignIn() {
    const mailInput = useRef(null)
    const passwordInput = useRef(null)
    const navigate = useNavigate()
    const [isSending, updateIsSending] = useState(false)
    const [user, updateUser] = useState()

    const dispatch = useDispatch()
    const data = useSelector((state) => state.login.user)
    console.log(data)

    const handleSumbit = () => {
        // add submit conditions 
        updateIsSending(true)
    }

    useEffect(() => {
        if (isSending && user === undefined) {
            const getInformations = async () => {
                const token = await getToken(
                    mailInput.current.value,
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
                        <input
                            type="text"
                            id="username"
                            ref={mailInput}
                        />
                    </div>
                    <div className={style.input_wrapper}>
                        <label htmlFor="password">Password</label>
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