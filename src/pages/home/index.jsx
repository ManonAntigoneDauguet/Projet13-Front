import style from "./home.module.css"
import chatIcon from "../../assets/icon-chat.png"
import moneyIcon from "../../assets/icon-money.png"
import securityIcon from "../../assets/icon-security.png"


const heroSubtitles = [
  { "id": 1, "subtitle": "No fees." }, { "id": 2, "subtitle": "No minimum deposit." }, { "id": 3, "subtitle": "High interest rates." }
]

const featuresContent = [
  {
    "id": 1,
    "picture": chatIcon,
    "alt": "Chat icon",
    "title": "You are our #1 priority",
    "text": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  },
  {
    "id": 2,
    "picture": moneyIcon,
    "alt": "Money icon",
    "title": "More savings means higher rates",
    "text": "The more you save with us, the higher your interest rate will be!"
  },
  {
    "id": 3,
    "picture": securityIcon,
    "alt": "Security icon",
    "title": "Security you can trust",
    "text": "We use top of the line encryption to make sure your data and money is always safe."
  }
]

/**
 * Return the home page
 * @returns { HTMLElement }
 */
function Home() {
  return (
    <main>
      <section className={style.hero}>
        <div className={style.hero_content}>
          <h2 className="sr-only">Promoted Content</h2>
          {heroSubtitles.map(({ id, subtitle }) => (
            <p key={id} className={style.subtitle}>{subtitle}</p>
          ))}
          <p className={style.text}>
            Open a savings account with Argent Bank today!
          </p>
        </div>
      </section>

      <section className={style.features}>
        <h2 className="sr-only">Features</h2>
        {featuresContent.map(({ id, picture, alt, title, text }) => (
          <div key={id} className={style.feature_item}>
            <img
              src={picture}
              alt={alt}
              className={style.feature_icon}
            />
            <h3 className={style.feature_item_title}>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home
