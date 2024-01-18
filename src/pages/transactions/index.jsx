import style from "./transactions.module.css"

/**
 * Return the transaction page
 * @returns { HTMLElement }
 */
function Transactions() {
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

export default Transactions