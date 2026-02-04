declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}

let baseScriptPromise: Promise<void> | null = null
const initializedPixelIds = new Set<string>()

function bootstrapFbqStub() {
  if (window.fbq) return

  const fbq = function (...args: unknown[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const self = fbq as any
    if (self.callMethod) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      self.callMethod.apply(self, args as unknown as [unknown])
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    self.queue.push(args)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anyFbq = fbq as any
  anyFbq.push = fbq
  anyFbq.loaded = true
  anyFbq.version = '2.0'
  anyFbq.queue = []

  window.fbq = fbq
  window._fbq = fbq
}

function ensureMetaBaseScript(): Promise<void> {
  if (baseScriptPromise) return baseScriptPromise

  baseScriptPromise = new Promise<void>((resolve) => {
    bootstrapFbqStub()

    if (document.getElementById('meta-pixel-base')) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.id = 'meta-pixel-base'
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    script.onload = () => resolve()
    script.onerror = () => resolve() // don't block the app if Meta is blocked

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.head.appendChild(script)
    }
  })

  return baseScriptPromise
}

/**
 * Sends a PageView only to the given pixel (trackSingle),
 * which allows having different pixels per route in an SPA.
 */
export async function trackMetaPageView(pixelId: string) {
  if (!pixelId) return

  await ensureMetaBaseScript()

  const fbq = window.fbq
  if (!fbq) return

  if (!initializedPixelIds.has(pixelId)) {
    fbq('init', pixelId)
    initializedPixelIds.add(pixelId)
  }

  fbq('trackSingle', pixelId, 'PageView')
}

