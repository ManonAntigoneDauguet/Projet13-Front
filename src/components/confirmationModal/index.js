import style from "./confirmationModal.module.css"


/**
 * Return a modal with a button calling a method
 * @param { Function } methodOn as the method called by the confirmation button
 * @param { Function } methodOff as the method called by the return button 
 * @param { String } text 
 * @returns { HTMLElement }
 */
function ConfirmationModale({ text, methodOn, methodOff }) {

    const confirmation = () => {
        // call the confirmed method before closed the modal with the methodOff
        methodOn()
        methodOff()
    }

    return (
        <div className={style.modale_bg}>
            <div className={style.modale}>
                <p>{text}</p>
                <div className={style.button_container}>
                    <button onClick={confirmation}>Confirmer</button>
                    <button onClick={methodOff}>Retour</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModale