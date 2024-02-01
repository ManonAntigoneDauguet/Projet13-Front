import style from "./transactions.module.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


/**
 * Return the transaction page
 * @returns { HTMLElement }
 */
function Transactions() {
    const state = useSelector((state) => state.login)
    const navigate = useNavigate()

    useEffect(() => {
        // redirect the disconnected user to the login page
        if (!state.isConnected) {
            navigate("/login")
        } else {
            document.title = " Argent Bank - Transactions"
        }
    })

    if (state.isConnected) {
        return (
            <main className={style.main}>
                <section className={style.welcome}>
                    <h1>Argent Bank Checking (x8349)</h1>
                    <p className={style.amount}>$2,082.79</p>
                    <p className={style.description}>Available Balance</p>
                </section>

                <section className={style.transactionContainer}>
                    <h2 className="sr-only">Transactions</h2>
                </section>
            </main>
        )
    }
}

export default Transactions