import logoRefaelUrl from '../assets/figma/logo-refael.svg'
import heroPhotoUrl from '../assets/figma/Mask group.png'
import { Component as HeroBackground } from '@/components/ui/background-snippets'

export default function PageA() {
  const onQuickSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }

  return (
    <div className="page page--a">
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
                הכיסוי היחיד
                <br />
                שנותן לכם מימון
                <br />
                של עד <span className="heroTitleAccent">80%</span>
                <br />
                <span className="heroTitleAccent">בהתפתחות הילד</span>
              </h1>
              <p className="heroSubtitle">
                כשהילד שלכם מכוסה אצלנו,
                <br />
                הוא נמצא בידיים טובות ומכוסה מכל הכיוונים.
              </p>
            </div>
          </div>

          <form className="quickForm" onSubmit={onQuickSubmit} aria-label="טופס מהיר">
            <div className="quickFormShell">
              <div className="quickFormTitle">סל הטבות והנחות משמעותיות למצטרפים היום!</div>
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

              <div className="consentRow consentRow--hero">
                <input id="quickConsentA" name="marketingConsent" type="checkbox" required />
                <label htmlFor="quickConsentA">
                  אני מאשר/ת קבלת מסרים שיווקיים ועדכונים (טלפון / SMS / WhatsApp) מרפאל פיננסים ובריאות.
                </label>
              </div>
            </div>
          </form>
        </section>

        <section className="why">
          <div className="whyInner">
            <div className="whyTitleBadgeRow" aria-hidden="true">
              <span className="whyTitleBadge">VIP</span>
            </div>
            <h2 className="whyTitle">
              <span className="whyTitleLite">
                <span className="whyTitleDesktopOnly">המינויים שלנו</span>
                <span className="whyTitleMobileOnly">המינויים שלנו נהנים</span>
                <br className="whyTitleBreakDesktop" />
                <br className="whyTitleBreakMobile" />
                <span className="whyTitleDesktopOnly">נהנים מסל שירותים מורחב</span>
                <span className="whyTitleMobileOnly">מסל שירותים מורחב</span>
              </span>
            </h2>
            <p className="whySub">
              היחידים שדואגים להתפתחות הילד שלכם.
              <br />
              <span className="whySubBold">אצלנו תקבלו את הדברים החשובים באמת!</span>
            </p>

            <div className="benefits benefits--home benefits--homeLong">
              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">שירות תיאום תורים</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">שירות הקדמת תורים</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">שירות רופא מומחה תוך זמן המתנה קצר</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">טיפולי פיזיותרפיה</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">טיפולים פסיכולוגיים</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">ריפוי בעיסוק</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">קלינאית תקשורת</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">עובדת סוציאלית</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון עד 80% באבחונים דידקטיים</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון עד 80% באבחונים פסיכו-דידקטיים</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון עד 80% במבחן טובה ומבחן MOXO</div>
                  <div className="benefitBottom">
                    <span className="benefitBadge" aria-label="VIP">
                      VIP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="whyKicker">
              לא חסכנו בכלום,
              <br />
              <span className="whyKickerBold">הבריאות שלכם חשובה לנו</span>
            </p>
          </div>
        </section>

        <section className="lead">
          <div className="leadOverlay" aria-hidden />
          <div className="leadInner">
            <div className="leadCard" aria-label="השאירו פרטים ונחזור אליכם">
              <h3 className="leadTitle">
                למה אתם מחכים?
                <br />
                מצטרפים היום ונהנים מסל הטבות במחיר VIP!
              </h3>
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

                <div className="consentRow consentRow--light">
                  <input id="leadConsentA" name="marketingConsent" type="checkbox" required />
                  <label htmlFor="leadConsentA">
                    אני מאשר/ת קבלת מסרים שיווקיים ועדכונים (טלפון / SMS / WhatsApp) מרפאל פיננסים ובריאות.
                  </label>
                </div>

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

