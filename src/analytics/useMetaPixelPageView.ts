import { useEffect, useRef } from 'react'
import { trackMetaPageView } from './metaPixel'

/**
 * React StrictMode runs effects twice in development.
 * This hook de-dupes the PageView for a given mount.
 */
export function useMetaPixelPageView(pixelId: string | undefined) {
  const didTrack = useRef(false)

  useEffect(() => {
    if (!pixelId) return
    if (didTrack.current) return

    didTrack.current = true
    void trackMetaPageView(pixelId)
  }, [pixelId])
}

