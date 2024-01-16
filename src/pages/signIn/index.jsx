import style from "./signIn.module.css"
import { Link } from 'react-router-dom'


/**
 * Return the sign in page
 * @returns { HTMLElement }
 */
function SignIn() {
    return (
        <main className={`${style.main} bg-dark`}>
            <section className={style.content}>
                <i className="fa fa-user-circle"></i>
                <h1>Sign In</h1>
                <form>
                <div className={style.input_wrapper}>
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className={style.input_wrapper}>
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className={style.input_remember}>
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <Link to="/user">
                    <button class={style.button}>Sign In</button>                    
                </Link>
                </form>
            </section>
        </main>
    )
}

export default SignIn