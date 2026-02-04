import logoRefaelUrl from '../assets/figma/logo-refael.svg'
import heroPhotoUrl from '../assets/figma/10364 1.png'
import { Component as HeroBackground } from '@/components/ui/background-snippets'
import { useState } from 'react'
import { useMetaPixelPageView } from '@/analytics/useMetaPixelPageView'

export default function PageB() {
  useMetaPixelPageView('1566477564627655')

  const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/9109071/ulee756/'

  const [quickStatus, setQuickStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [leadStatus, setLeadStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const postToWebhook = async (payload: Record<string, string>) => {
    const body = new URLSearchParams(payload)

    // Using x-www-form-urlencoded keeps this as a "simple request" (more CORS-friendly)
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body,
    })
  }

  const onQuickSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (quickStatus === 'sending') return
    setQuickStatus('sending')

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      await postToWebhook({
        page: 'pregnancy',
        form: 'quick',
        fullName: String(data.get('fullName') ?? ''),
        phone: String(data.get('phone') ?? ''),
      })

      setQuickStatus('sent')
      form.reset()
    } catch {
      setQuickStatus('error')
    }
  }

  const onLeadSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (leadStatus === 'sending') return
    setLeadStatus('sending')

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      await postToWebhook({
        page: 'pregnancy',
        form: 'lead',
        fullName: String(data.get('fullName') ?? ''),
        phone: String(data.get('phone') ?? ''),
        idNumber: String(data.get('idNumber') ?? ''),
      })

      setLeadStatus('sent')
      form.reset()
    } catch {
      setLeadStatus('error')
    }
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
                הכיסוי היחיד
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

              <button className="quickSubmit" type="submit" disabled={quickStatus === 'sending'}>
                {quickStatus === 'sending' ? 'שולח…' : 'שליחת הטופס >>'}
              </button>

              <div role="status" aria-live="polite" style={{ minHeight: 18, marginTop: 8, fontSize: 14 }}>
                {quickStatus === 'sent' && 'נשלח בהצלחה. נחזור אליך בהקדם.'}
                {quickStatus === 'error' && 'לא הצלחנו לשלוח כרגע. נסו שוב בעוד רגע.'}
              </div>

              <div className="consentRow consentRow--hero">
                <input id="quickConsentB" name="marketingConsent" type="checkbox" required />
                <label htmlFor="quickConsentB">
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
              כי אנחנו באמת דואגים לבריאות התינוק שלך.
              <br />
              <span className="whySubBold">אצלנו תקבלי את הדברים החשובים באמת.</span>
              <br />
              <span className="whySubBold">בשביל שיהיה לך הריון קל עד כמה שניתן.</span>
            </p>

            <div className="benefits benefits--home benefits--homeLong">
              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון שירותי דולה</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון שירותי יועצת הנקה</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">80% מימון לטיפולי פוריות</div>
                </div>
              </div>

              <div className="benefit">
                <span className="benefitCheck" aria-hidden />
                <div className="benefitText">
                  <div className="benefitTop">מימון מלון לידה מפנק</div>
                </div>
              </div>

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

              <form className="leadForm" onSubmit={onLeadSubmit}>
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
                  <input id="leadConsentB" name="marketingConsent" type="checkbox" required />
                  <label htmlFor="leadConsentB">
                    אני מאשר/ת קבלת מסרים שיווקיים ועדכונים (טלפון / SMS / WhatsApp) מרפאל פיננסים ובריאות.
                  </label>
                </div>

                <button className="leadSubmit" type="submit" disabled={leadStatus === 'sending'}>
                  {leadStatus === 'sending' ? 'שולח…' : 'שליחת טופס'}
                </button>

                <div role="status" aria-live="polite" style={{ minHeight: 18, marginTop: 8, fontSize: 14 }}>
                  {leadStatus === 'sent' && 'נשלח בהצלחה. נחזור אליך בהקדם.'}
                  {leadStatus === 'error' && 'לא הצלחנו לשלוח כרגע. נסו שוב בעוד רגע.'}
                </div>
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

