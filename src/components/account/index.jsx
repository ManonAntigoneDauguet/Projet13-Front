import style from "./account.module.css"
import MainButton from "../mainButton"


/**
 * Return the cards of accounts in the user page
 * @param { String } title 
 * @param { String } amount
 * @param { String } description
 * @returns { HTMLElement }
 */
function Account({ title, amount, description }) {
    return (
        <article className={style.account}>
            <div className={style.wrapper}>
                <h3 className={style.title}>Argent Bank {title}</h3>
                <p className={style.amount}>{amount}</p>
                <p className={style.description}>{description}</p>
            </div>
            <div className={`${style.wrapper} ${style.cta}`}>
                <MainButton
                    text="View transactions"
                    navLink={`/transactions/${title}`}
                    isUnderlined={false}
                    isLittleVersion={false}
                />
            </div>
        </article>
    )
}

export default Account