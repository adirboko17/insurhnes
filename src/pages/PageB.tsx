import logoRefaelUrl from '../assets/figma/logo-refael.svg'
import heroPhotoUrl from '../assets/figma/10364 1.png'
import { Component as HeroBackground } from '@/components/ui/background-snippets'

export default function PageB() {
  const onQuickSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page page--b">
      <header className="topbar" dir="ltr">
        <a className="phonePill" href="tel:+972502311537" aria-label="התקשרו: 0502311537">
          <span className="phoneIcon" aria-hidden />
          <span className="phoneNumber">0502311537</span>
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
                שנותן לך מימון
                <br />
                של עד <span className="heroTitleAccent">80%</span>
                <br />
                <span className="heroTitleAccent">במהלך ההיריון</span>
              </h1>
              <p className="heroSubtitle">
                סל ההיריון המורחב שלנו נועד על מנת
                <br />
                שתעברי את ההיריון בצורה הנוחה והקלה ביותר.
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
                  placeholder=":מספר טלפון"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </div>

              <button className="quickSubmit" type="submit">
                שליחת הטופס &gt;&gt;
              </button>
            </div>
          </form>
        </section>

        <section className="why">
          <div className="whyInner">
            <h2 className="whyTitle">
              <span className="whyTitleLite">למה לעשות</span> <span className="whyTitleAccent">ביטוח אצלנו?</span>
            </h2>
            <p className="whySub">
              כי אנחנו באמת דואגים לבריאות התינוק שלך.
              <br />
              <span className="whySubBold">אצלנו תקבלי את הדברים החשובים באמת.</span>
              <br />
              <span className="whySubBold">בשביל שיהיה לך הריון קל עד כמה שניתן.</span>
            </p>

            <div className="benefits">
              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון שירותי</div>
                  <div className="benefitBottom">
                    דולה ויועצת
                    <br />
                    הנקה
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">80% מימון</div>
                  <div className="benefitBottom">לטיפולי פוריות</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון מלון</div>
                  <div className="benefitBottom">לידה</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">שירות תיאום</div>
                  <div className="benefitBottom">
                    והקדמת תורים
                    <br />
                    לרופא מומחה
                  </div>
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
              <h3 className="leadTitle">מעוניינת בסל היריון מורחב?</h3>
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
                  placeholder="מס' טלפון"
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

                <button className="leadSubmit" type="submit">
                  שליחת טופס
                </button>
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

