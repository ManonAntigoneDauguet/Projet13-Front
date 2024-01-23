import style from "./editUser.module.css"
import Account from "../../components/account"
import data from "../../mockedData/accountsData.json"
import MainButton from "../../components/mainButton"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const accountContent = data.accountsContent

/**
 * Return the edit user page
 * @returns { HTMLElement }
 */
function EditUser() {
    const isConnected = useSelector((state) => state.login.isConnected)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isConnected) {
            navigate("/sign-in")
        }
    })

    if (isConnected) {
        return (
            <main className={`${style.main} bg-light`}>
                <section className={style.edit}>
                    <h1>Welcome back</h1>
                    <form className={style.form}>
                        <div className={style.input_wrapper_firstname}>
                            <label htmlFor="firstname" className="sr-only">
                                Firstname
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                defaultValue="Tony"
                            />
                        </div>
                        <div className={style.input_wrapper_lastname}>
                            <label htmlFor="lastname" className="sr-only">
                                Lastname
                            </label>
                            <input type="text"
                                id="lastname"
                                name="lastname"
                                defaultValue="Stark"
                            />
                        </div>
                        <div className={style.save_button}>
                            <MainButton
                                text="Save"
                                isLittleVersion={true}
                            />
                        </div>
                        <div className={style.cancel_button}>
                            <MainButton
                                text="Cancel"
                                isLittleVersion={true}
                                navLink="/user"
                            />
                        </div>
                    </form>
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

export default EditUser