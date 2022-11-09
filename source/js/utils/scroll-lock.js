import {iosChecker} from './ios-checker';

export class ScrollLock {
  constructor() {
    this.iosChecker = iosChecker;
    this.lockClass = this.iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';
    this.scrollTop = null;
    this.fixedBlockElements = document.querySelectorAll('[data-fix-block]');
  }

  getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  getBodyScrollTop() {
    return (
      self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (document.body && document.body.scrollTop)
    );
  }

  disableScrolling() {
    this.scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this.getBodyScrollTop();
    if (this.getScrollbarWidth()) {
      document.body.style.paddingRight = `${this.getScrollbarWidth()}px`;
      this.fixedBlockElements.forEach((block) => {
        block.style.paddingRight = `${this.getScrollbarWidth()}px`;
      });
    }
    document.body.style.top = `-${this.scrollTop}px`;
    document.body.classList.add(this.lockClass);
  }

  enableScrolling() {
    document.body.classList.remove(this.lockClass);
    window.scrollTo(0, +document.body.dataset.scroll);
    document.body.style.paddingRight = null;
    document.body.style.top = null;
    this.fixedBlockElements.forEach((block) => {
      block.style.paddingRight = null;
    });
    document.body.removeAttribute('data-scroll');
    this.scrollTop = null;
  }
}

window.scrollLock = new ScrollLock();
