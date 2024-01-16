import Account from "../../components/account"
import style from "./user.module.css"


const accountContent = [
    {
        "id": 1,
        "title": "Argent Bank Checking (x8349)",
        "amount": "$2,082.79",
        "description": "Available Balance"
    },
    {
        "id": 2,
        "title": "Argent Bank Savings (x6712)",
        "amount": "$10,928.42",
        "description": "Available Balance"
    },
    {
        "id": 3,
        "title": "Argent Bank Credit Card (x8349)",
        "amount": "$184.30",
        "description": "Current Balance"
    }
]

/**
 * Return the User page
 * @returns { HTMLElement }
 */
function User() {
    return (
        <main className={`${style.main} bg-dark`}>
            <section className={style.welcome}>
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className={style.edit_button}>Edit Name</button>
            </section>
            
            <section className={style.accountsContainer}>
                <h2 class="sr-only">Accounts</h2>
                {accountContent.map(({ id, title, amount, description }) => (
                    <Account key={id} title={title} amount={amount} description={description} />
                ))}                
            </section>
        </main>
    )
}

export default User