export class MobileUtils {
  static isDeviceMobile() {
    const windowWidth = window.innerWidth;

    const isMobile = windowWidth <= 700;
    return isMobile
  }

  static isIOS() {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  }
}
