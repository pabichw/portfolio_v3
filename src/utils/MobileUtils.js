import { userAgent } from 'next/server'

export const rendererUserAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

export const isAndroid = (userAgent) => { 
  debugger;
  return Boolean(userAgent.match(/Android/i)) 
}
export const isIos = (userAgent) => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
export const isOpera = (userAgent) => Boolean(userAgent.match(/Opera Mini/i))
export const isSSR = (userAgent) => Boolean(userAgent.match(/SSR/i))
export const isMobile = () => typeof window === 'undefined' ? 'ssr' : window.innerWidth < 700 
export const isDesktop = () => Boolean(!isMobile() && !isSSR())

const getMobileDetect = () => {

  return {
    isMobile: () => isMobile(userAgent),
    isDesktop: () => isDesktop(userAgent),
    isAndroid: () => isAndroid(userAgent),
    isIos: () => isIos(userAgent),
    isSSR: () => isSSR(userAgent),
  }
}

const useMobileDetect = () => {
  // useEffect(() => { }, [])
  return getMobileDetect()
}

export default useMobileDetect
