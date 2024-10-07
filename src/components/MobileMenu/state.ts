import { reactive, ref } from 'vue'

class MobileMenu {
  isContainer = ref(false)
  isOpen = ref(false)

  hideMobileContainer = () => {
    if (this.isOpen.value === false) this.isContainer.value = false
  }

  toggleOpenState = () => {
    this.isContainer.value = true
    setTimeout(() => {
      this._tooggleScroll()
      this._toggleOpenState()
      this._toggleOpenClass()
    }, 5)
  }

  private _toggleOpenState = () => {
    this.isOpen.value = !this.isOpen.value
  }

  private _tooggleScroll = () => {
    document.documentElement.classList.toggle('stop-scroll')
  }

  private _toggleOpenClass = () => {
    document.body.classList.toggle('open-menu')
  }
}

export const mobileMenu = reactive(new MobileMenu())
