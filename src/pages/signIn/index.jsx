import style from "./signIn.module.css"
import MainButton from "../../components/mainButton"
import { useEffect, useState } from "react"
import { getUser } from "../../services/callAPI.service"


/**
 * Return the sign in page
 * @returns { HTMLElement }
 */
function SignIn() {
    const [isSending, updateIsSending] = useState(false)
    const [isError, updateIsError] = useState(false)
    const [user, updateUser] = useState()

    const sendLoginRequest = () => {
        updateIsSending(true)
    }

    useEffect(() => {
        if (isSending && user === undefined) {
            const getInformations = async () => {
                try {
                    updateUser(await getUser())
                } catch {
                    updateIsError(true)
                    updateIsSending(false)
                }
            }
            getInformations()
        }
        else if (user !== undefined) {
            console.log(user)
        }
    }, [isSending, user])

    return (
        <main className={`${style.main} bg-dark`}>
            <section className={style.content}>
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <form>
                    <div className={style.input_wrapper}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className={style.input_wrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className={style.input_remember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <MainButton
                        text="Sign In"
                        navLink="/user"
                        isLittleVersion={false}
                    />
                    <input type="button" onClick={sendLoginRequest} />
                </form>
            </section>
        </main>
    )
}

export default SignIn