const buttonTabOpen = document.querySelector('.page-header__tab')
const menuTab = document.querySelector('.popup-menu')
const questionsList = document.querySelector('.page-main__questions')
const buttonTabClose = document.querySelector('.popup-menu__wrapper-header-tab')
const buttonLoginOpen = document.querySelector('.page-header__login')
const buttonLoginClose = document.querySelector('.popup__wrapper-close')
const login = document.querySelector('.popup')
const inputMail = document.querySelector('.popup__wrapper input[type=email]')
const ESC_KEYCODE = 27
const TAB_KEYCODE = 9
const SHIFT_KEYCODE = 9
const buttonCartOpen = document.querySelector('.page-main-card__product-about-add')
const menuCart = document.querySelector('.popup-card')
const pageElement = document.querySelector('.page')
const buttonCartClose = document.querySelector('.popup-card__wrapper-close')
const buttonFilterOpen = document.querySelector('.page-main-catalog__goods-filterbutton')
const menuFilter = document.querySelector('.popup-filter')
const buttonFilterClose = document.querySelector('.popup-filter__wrapper-filters-closebutton')
const filtersList = document.querySelector('.page-main-catalog__goods-filters')
const filtersListPopup = document.querySelector('.popup-filter__wrapper-filters')
const cardWrapperPopup = document.querySelector('.popup-card__wrapper')

if (menuCart) {
  const checkoutButton = document.querySelector('.popup-card__wrapper-buttons-checkout')
  const continueButton = document.querySelector('.popup-card__wrapper-buttons-continue')
  const minusButton = document.querySelector('.popup-card__wrapper-number--minus')

  checkoutButton.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonCartClose.focus()
    }
  })

  checkoutButton.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      continueButton.focus()
    }
  })

  buttonCartClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      checkoutButton.focus()
    }
  })

  buttonCartClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      minusButton.focus()
    }
  })
}

if (login) {
  const signUpButton = document.querySelector('.popup__wrapper-signup')
  const loginButton = document.querySelector('.popup__wrapper-submit')

  signUpButton.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonLoginClose.focus()
    }
  })

  signUpButton.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      loginButton.focus()
    }
  })

  buttonLoginClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      signUpButton.focus()
    }
  })

  buttonLoginClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      inputMail.focus()
    }
  })
}

if (cardWrapperPopup) {
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-card__wrapper-number--plus')) {
      ++e.target.parentElement.querySelector('input').value
    } else if (e.target.classList.contains('popup-card__wrapper-number--minus')) {
      --e.target.parentElement.querySelector('input').value
    }
  })
}

if (menuCart) {
  buttonCartOpen.addEventListener('click', function () {
    if (!menuCart.classList.contains('popup-card--opened')) {
      menuCart.classList.add('popup-card--opened')
      pageElement.classList.add('page--inactive')
      buttonCartClose.focus()
    }
  })

  window.addEventListener('click', function (e) {
    if (e.target === menuCart) {
      menuCart.classList.remove('popup-card--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE & menuCart.classList.contains('popup-card--opened')) {
      menuCart.classList.remove('popup-card--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  buttonCartClose.addEventListener('click', function () {
    if (menuCart.classList.contains('popup-card--opened')) {
      menuCart.classList.remove('popup-card--opened')
      pageElement.classList.remove('page--inactive')
    }
  })
}

function questions (button, list) {
  button.addEventListener('click', function () {
    if (!list.classList.contains('page-main__questions-answer--visible')) {
      list.classList.add('page-main__questions-answer--visible')
      button.classList.add('page-main__questions-button--opened')
    } else {
      list.classList.remove('page-main__questions-answer--visible')
      button.classList.remove('page-main__questions-button--opened')
    }
  })
}

function filters (button, list) {
  button.addEventListener('click', function () {
    if (!list.classList.contains('page-main-catalog__goods-filters-list--visible')) {
      list.classList.add('page-main-catalog__goods-filters-list--visible')
      button.classList.add('page-main-catalog__goods-filters-menu--opened')
    } else {
      list.classList.remove('page-main-catalog__goods-filters-list--visible')
      button.classList.remove('page-main-catalog__goods-filters-menu--opened')
    }
  })
}

function filtersPopup (button, list) {
  button.addEventListener('click', function () {
    if (!list.classList.contains('page-main-catalog__goods-filters-list--visible')) {
      list.classList.add('page-main-catalog__goods-filters-list--visible')
      button.classList.add('page-main-catalog__goods-filters-menu--opened')
    } else {
      list.classList.remove('page-main-catalog__goods-filters-list--visible')
      button.classList.remove('page-main-catalog__goods-filters-menu--opened')
    }
  })
}

if (questionsList) {
  const buttonQuestionsOpenCloseMaterial = questionsList.querySelector('.page-main__questions-button--material')
  const buttonQuestionsOpenCloseCountries = questionsList.querySelector('.page-main__questions-button--countries')
  const buttonQuestionsOpenClosePayment = questionsList.querySelector('.page-main__questions-button--payment')
  const buttonQuestionsOpenCloseReturn = questionsList.querySelector('.page-main__questions-button--return')
  const listAnswerMaterial = questionsList.querySelector('.page-main__questions-answer--material')
  const listAnswerCountries = questionsList.querySelector('.page-main__questions-answer--countries')
  const listAnswerPayment = questionsList.querySelector('.page-main__questions-answer--payment')
  const listAnswerReturn = questionsList.querySelector('.page-main__questions-answer--return')

  questions(buttonQuestionsOpenCloseMaterial, listAnswerMaterial)
  questions(buttonQuestionsOpenCloseCountries, listAnswerCountries)
  questions(buttonQuestionsOpenClosePayment, listAnswerPayment)
  questions(buttonQuestionsOpenCloseReturn, listAnswerReturn)
}

if (filtersList) {
  const buttonFilterOpenCloseProduct = filtersList.querySelector('.page-main-catalog__goods-filters-menu--product')
  const buttonFilterOpenCloseMaterial = filtersList.querySelector('.page-main-catalog__goods-filters-menu--material')
  const buttonFilterOpenCloseCollection = filtersList.querySelector('.page-main-catalog__goods-filters-menu--collection')
  const buttonFilterOpenClosePrice = filtersList.querySelector('.page-main-catalog__goods-filters-menu--price')
  const listFiltersProduct = filtersList.querySelector('.page-main-catalog__goods-filters-list--product')
  const listFiltersMaterial = filtersList.querySelector('.page-main-catalog__goods-filters-list--material')
  const listFiltersCollection = filtersList.querySelector('.page-main-catalog__goods-filters-list--collection')
  const listFiltersPrice = filtersList.querySelector('.page-main-catalog__goods-filters-list--price')

  filters(buttonFilterOpenCloseProduct, listFiltersProduct)
  filters(buttonFilterOpenCloseMaterial, listFiltersMaterial)
  filters(buttonFilterOpenCloseCollection, listFiltersCollection)
  filters(buttonFilterOpenClosePrice, listFiltersPrice)
}

if (filtersListPopup) {
  const buttonFilterOpenCloseProductPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-menu--product')
  const buttonFilterOpenCloseMaterialPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-menu--material')
  const buttonFilterOpenCloseCollectionPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-menu--collection')
  const buttonFilterOpenClosePricePopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-menu--price')
  const listFiltersProductPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-list--product')
  const listFiltersMaterialPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-list--material')
  const listFiltersCollectionPopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-list--collection')
  const listFiltersPricePopup = filtersListPopup.querySelector('.popup-filter__wrapper-filters-list--price')

  filtersPopup(buttonFilterOpenCloseProductPopup, listFiltersProductPopup)
  filtersPopup(buttonFilterOpenCloseMaterialPopup, listFiltersMaterialPopup)
  filtersPopup(buttonFilterOpenCloseCollectionPopup, listFiltersCollectionPopup)
  filtersPopup(buttonFilterOpenClosePricePopup, listFiltersPricePopup)
}

if (login) {
  const buttonTabOpenPopup = document.querySelector('.popup-menu__wrapper-nav-login')

  buttonTabOpenPopup.addEventListener('click', function (e) {
    e.preventDefault()
    if (!login.classList.contains('popup--opened')) {
      login.classList.add('popup--opened')
      inputMail.select()
      pageElement.classList.add('page--inactive')
    }
  })
}

if (menuTab) {
  const buttonTabOpenPopup = document.querySelector('.popup-menu__wrapper-nav-login')
  const buttonCartPopup = document.querySelector('.popup-menu__wrapper-header-menu')
  const lastLinkPopup = document.querySelector('.popup-menu__wrapper-nav-info li:last-of-type')

  buttonTabOpen.addEventListener('click', function () {
    if (!menuTab.classList.contains('popup-menu--opened')) {
      menuTab.classList.add('popup-menu--opened')
      buttonTabOpen.classList.add('page-header__tab--opened')
      pageElement.classList.add('page--inactive')
      buttonTabClose.focus()
    }
  })

  buttonTabClose.addEventListener('click', function () {
    if (menuTab.classList.contains('popup-menu--opened')) {
      menuTab.classList.remove('popup-menu--opened')
      buttonTabOpen.classList.remove('page-header__tab--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  window.addEventListener('resize', function (event) {
    menuTab.classList.remove('popup-menu--opened')
    buttonTabOpen.classList.remove('page-header__tab--opened')
    pageElement.classList.remove('page--inactive')
  }, true)

  buttonTabClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonCartPopup.focus()
    }
  })

  buttonTabClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      buttonTabOpenPopup.focus()
    }
  })

  buttonTabOpenPopup.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      lastLinkPopup.focus()
    }
  })

  buttonTabOpenPopup.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonTabClose.focus()
    }
  })
}

buttonLoginOpen.addEventListener('click', function (e) {
  e.preventDefault()
  if (!login.classList.contains('popup--opened')) {
    login.classList.add('popup--opened')
    inputMail.select()
    pageElement.classList.add('page--inactive')
  }
})

window.addEventListener('click', function (e) {
  if (e.target === login) {
    login.classList.remove('popup--opened')
    pageElement.classList.remove('page--inactive')
  }
})

document.addEventListener('keydown', function (e) {
  if (e.keyCode === ESC_KEYCODE & login.classList.contains('popup--opened')) {
    login.classList.remove('popup--opened')
    pageElement.classList.remove('page--inactive')
  }
})

buttonLoginClose.addEventListener('click', function () {
  if (login.classList.contains('popup--opened')) {
    login.classList.remove('popup--opened')
    pageElement.classList.remove('page--inactive')
  }
})

if (menuFilter) {
  const buttonResetFilter = document.querySelector('.popup-filter__wrapper-filters-button--reset')
  const buttonSubmitFilter = document.querySelector('.popup-filter__wrapper-filters-button--submit')
  const buttonOpenedFilter = document.querySelector('.popup-filter__wrapper-filters-menu--opened')

  buttonFilterOpen.addEventListener('click', function () {
    if (!menuFilter.classList.contains('popup-filter--opened')) {
      menuFilter.classList.add('popup-filter--opened')
      pageElement.classList.add('page--inactive')
      buttonOpenedFilter.focus()
    }
  })

  window.addEventListener('click', function (e) {
    if (e.target === menuFilter) {
      menuFilter.classList.remove('popup-filter--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  document.addEventListener('keydown', function (e) {
    if (e.keyCode === ESC_KEYCODE & menuFilter.classList.contains('popup-filter--opened')) {
      menuFilter.classList.remove('popup-filter--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  buttonFilterClose.addEventListener('click', function () {
    if (menuFilter.classList.contains('popup-filter--opened')) {
      menuFilter.classList.remove('popup-filter--opened')
      pageElement.classList.remove('page--inactive')
    }
  })

  buttonFilterClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonOpenedFilter.focus()
    }
  })

  buttonFilterClose.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      buttonResetFilter.focus()
    }
  })

  buttonResetFilter.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE & e.keyCode === SHIFT_KEYCODE) {
      buttonSubmitFilter.focus()
    }
  })

  buttonResetFilter.addEventListener('keydown', function (e) {
    if (e.keyCode === TAB_KEYCODE) {
      buttonFilterClose.focus()
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  inputMail.value = localStorage.getItem(inputMail);
  (function (input) {
    input.addEventListener('change', function () {
      localStorage.setItem(input.value)
    })
  })(inputMail)
})
