import './App.css'
import logoRefaelUrl from './assets/figma/logo-refael.svg'
import heroPhotoUrl from './assets/figma/denden.jpg'
import { Component as HeroBackground } from '@/components/ui/background-snippets'
import { FlipButton } from '@/components/ui/flip-button'

function App() {
  const onQuickSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page">
      <header className="topbar" dir="ltr">
        <a className="phonePill" href="tel:088888888" aria-label="התקשרו: 08-8888888">
          <span className="phoneIcon" aria-hidden />
          <span className="phoneNumber">08-8888888</span>
        </a>

        <img className="brandLogo" src={logoRefaelUrl} alt="רפאל פיננסים ובריאות" />
      </header>

      <main>
        <section className="hero">
          <HeroBackground />
          <div className="heroGold" aria-hidden />
          <div className="heroInner">
            <div className="heroArt">
              <div className="heroBackplate" />
              <div className="heroArtFrame">
                <img
                  className="heroArtImage"
                  src={heroPhotoUrl}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="heroCopy">
              <h1 className="heroTitle">
                הביטוח היחיד
                <br />
                שמכסה לך עד
                <br /> <span className="heroTitleAccent">50% הנחה</span>
              </h1>
              <p className="heroSubtitle">
                הכי משתלם לבטח אצל רפאל,
                <br />
                גם במחיר וגם בשירות.
              </p>
            </div>
          </div>

          <form className="quickForm" onSubmit={onQuickSubmit} aria-label="טופס מהיר">
            <div className="quickFormShell">
              <div className="quickField">
                <label className="srOnly" htmlFor="quickFullName">
                  שם מלא
                </label>
                <input
                  id="quickFullName"
                  name="fullName"
                  type="text"
                  placeholder="שם מלא:"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="quickField">
                <label className="srOnly" htmlFor="quickPhone">
                  מספר טלפון
                </label>
                <input
                  id="quickPhone"
                  name="phone"
                  type="tel"
                  placeholder="מס’ טלפון:"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </div>

              <FlipButton className="quickSubmit" type="submit" text1="הטופס נשלח" text2="שליחת הטופס >>" />
            </div>
          </form>
        </section>

        <section className="why">
          <div className="whyInner">
            <h2 className="whyTitle">
              <span className="whyTitleLite">למה לעשות</span> <span className="whyTitleAccent">ביטוח אצלנו?</span>
            </h2>
            <p className="whySub">
              כי אנחנו באמת דואגים לבריאות שלכם.
              <br />
              <span className="whySubBold">אצלנו תקבלו את הדברים החשובים באמת.</span>
            </p>

            <div className="benefits">
              <div className="benefit">
                <span className="benefitIcon" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">צילום פנורמי</div>
                  <div className="benefitBottom">ללא עלות</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitIcon" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">צילום סיטי</div>
                  <div className="benefitBottom">ללא עלות</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitIcon" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">טיפול רופא</div>
                  <div className="benefitBottom">עד הבית</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitIcon" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">שירות תיאום</div>
                  <div className="benefitBottom">והקדמת תורים</div>
                </div>
              </div>
            </div>

            <p className="whyKicker">
              לא חסכנו בכלום, <span className="whyKickerBold">הבריאות שלכם חשובה לנו</span>
            </p>
          </div>
        </section>

        <section className="lead">
          <div className="leadOverlay" aria-hidden />
          <div className="leadInner">
            <div className="leadCard" aria-label="השאירו פרטים ונחזור אליכם">
              <h3 className="leadTitle">מעוניינים בביטוח שיניים?</h3>
              <p className="leadSubtitle">הצטרפו עכשיו למשפחת רפאל</p>
              <p className="leadHint">מלאו את פרטי הטופס ונחזור אליכם במהירות</p>

              <form className="leadForm" onSubmit={onQuickSubmit}>
                <label className="srOnly" htmlFor="fullName">
                  שם מלא
                </label>
                <input id="fullName" name="fullName" type="text" placeholder="שם מלא" autoComplete="name" required />

                <label className="srOnly" htmlFor="phone">
                  מס’ טלפון
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="מס’ טלפון"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />

                <label className="srOnly" htmlFor="idNumber">
                  תעודת זהות
                </label>
                <input
                  id="idNumber"
                  name="idNumber"
                  type="text"
                  placeholder="תעודת זהות"
                  inputMode="numeric"
                  required
                />

                <FlipButton className="leadSubmit" type="submit" text1="הטופס נשלח" text2="שליחת טופס" />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerLineStrong">כל הזכויות שמורות לרפאל פיננסים ובריאות.</div>
          <div className="footerLine">עוצב ופותח ע”י Mitch</div>
        </div>
      </footer>
    </div>
  )
}

export default App
