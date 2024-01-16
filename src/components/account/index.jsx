import style from "./account.module.css"


/**
 * 
 * @param { String } title 
 * @param { String } amount
 * @param { String } description
 * @returns { HTMLElement }
 */
function Account({ title, amount, description }) {
    return (
        <article class={style.account}>
            <div class={style.wrapper}>
                <h3 class={style.title}>{title}</h3>
                <p class={style.amount}>{amount}</p>
                <p class={style.description}>{description}</p>
            </div>
            <div class={`${style.wrapper} ${style.cta}`}>
                <button class={style.button}>View transactions</button>
            </div>
        </article>        
    )
}

export default Account