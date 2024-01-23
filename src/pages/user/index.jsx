import Account from "../../components/account"
import MainButton from "../../components/mainButton"
import style from "./user.module.css"
import data from "../../mockedData/accountsData.json"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const accountContent = data.accountsContent

/**
 * Return the user page
 * @returns { HTMLElement }
 */
function User() {
    const isConnected = useSelector((state) => state.login.isConnected)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isConnected) {
            navigate("/sign-in")
        }
    })

    if (isConnected) {
        return (
            <main className={`${style.main} bg-dark`}>
                <section className={style.welcome}>
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <MainButton
                        text="Edit Name"
                        navLink="/edit-user"
                        isUnderlined={false}
                        isLittleVersion={true}
                    />
                </section>

                <section className={style.accountsContainer}>
                    <h2 className="sr-only">Accounts</h2>
                    {accountContent.map(({ id, title, amount, description }) => (
                        <Account
                            key={id}
                            title={title}
                            amount={amount}
                            description={description}
                        />
                    ))}
                </section>
            </main>
        )
    } 
}

export default User