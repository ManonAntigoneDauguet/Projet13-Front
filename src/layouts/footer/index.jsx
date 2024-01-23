import style from "./footer.module.css"


/**
 * Return the application's footer
 * @returns { HTMLElement }
 */
function Footer() {
    return (
        <footer>
            <p className={style.footer_content}>Copyright 2020 Argent Bank</p>
        </footer>
    )
}

export default Footer