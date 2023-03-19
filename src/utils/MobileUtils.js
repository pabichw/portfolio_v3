import { useEffect } from 'react'

const getMobileDetect = (userAgent) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))
  const isMobile = () => typeof window === 'undefined' ? 'ssr' : window.innerWidth < 700 || Boolean(isAndroid() || isIos())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  }
}

const useMobileDetect = () => {
  // useEffect(() => { }, [])
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  return getMobileDetect(userAgent)
}

export default useMobileDetect
