import Account from "../../components/account"
import MainButton from "../../components/mainButton"
import style from "./user.module.css"
import data from "../../mockedData/accountsData.json"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { editUser } from "../../services/callAPI.service"
import { postData } from "../../store/loginSlice"


const accountContent = data.accountsContent

/**
 * Return the user page
 * @returns { HTMLElement }
 */
function User() {
    const firstNameInput = useRef(null)
    const lastNameInput = useRef(null)
    const [editionMode, changeEditionMode] = useState(false)
    const [isSending, updateIsSending] = useState(false)
    const isConnected = useSelector((state) => state.login.isConnected)
    const state = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    // add submit conditions before sending
    const handleSumbit = () => {
        updateIsSending(true)
    }


    // edit the user's informations
    useEffect(() => {
        if (isSending) {
            const changeInformations = async() => {
                const test = await editUser(
                    state.token,
                    firstNameInput.current.value.trim(),
                    lastNameInput.current.value.trim()
                )
                dispatch(postData(test))
            }
            changeInformations()
            updateIsSending(false)
            changeEditionMode(false)
        }
    }, [dispatch, isSending, state])


    // redirect the user to the login page
    useEffect(() => {
        if (!isConnected) {
            navigate("/sign-in")
        }
    })


    if (isConnected) {
        return (
            <main className={editionMode ?
                `${style.main__editMode} bg-light` : `${style.main} bg-dark`
            }>
                {editionMode ?
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
                                    defaultValue={state.user.firstName}
                                    ref={firstNameInput}
                                />
                            </div>
                            <div className={style.input_wrapper_lastname}>
                                <label htmlFor="lastname" className="sr-only">
                                    Lastname
                                </label>
                                <input type="text"
                                    id="lastname"
                                    name="lastname"
                                    defaultValue={state.user.lastName}
                                    ref={lastNameInput}
                                />
                            </div>
                            <div className={style.save_button}>
                                <MainButton
                                    text="Save"
                                    isLittleVersion={true}
                                    type="submit"
                                    method={handleSumbit}
                                />
                            </div>
                            <div className={style.cancel_button}>
                                <MainButton
                                    text="Cancel"
                                    isLittleVersion={true}
                                    method={() => changeEditionMode(false)}
                                />
                            </div>
                        </form>
                    </section>
                    :
                    <section className={style.welcome}>
                        <h1>Welcome back<br />{state.user?.firstName} {state.user?.lastName}!</h1>
                        <MainButton
                            text="Edit Name"
                            isLittleVersion={true}
                            method={() => changeEditionMode(true)}
                        />
                    </section>
                }

                <section
                    className={`
                        ${style.accountsContainer}
                        ${editionMode && style.accountsContainer_editMode}
                    `}>
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