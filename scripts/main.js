const cardData = [
  {
    id: 0,
    currentBalance: 2850.75,
    income: 1500.5,
    outcome: 350.6,
    active: false,
    weeklyPayment: {
      used: 300,
      limit: 4000
    },
    cardImage: "./assets/images/credit-card-image.png"
  },
  {
    id: 1,
    currentBalance: 10850.75,
    income: 15000.5,
    outcome: 3500.6,
    active: true,
    weeklyPayment: {
      used: 4000,
      limit: 10000
    },
    cardImage: "./assets/images/credit-card-image.png"
  }
];

function renderCardWeeklyLimitProgressByIndex(currentCard, cardIndex) {
  const weeklyPaymentLimitProgressDiv = document.querySelector(".credit-card-info__progress-bar");
  const weeklyPaymentUsedPercentage = (currentCard.weeklyPayment.used / currentCard.weeklyPayment.limit) * 100;
  weeklyPaymentLimitProgressDiv.style.width = `${weeklyPaymentUsedPercentage}%`;
}

function renderCardDataByIndex(cardIndex) {
  const currentCard = cardData[cardIndex];

  const currentBalanceSpan = document.querySelector(".credit-card-info__text.credit-card-info__text--blue.credit-card-info__text--dollar");
  currentBalanceSpan.innerHTML = currentCard.currentBalance;

  const incomeSpan = document.querySelector(".credit-card-info__text.credit-card-info__text--green.credit-card-info__text--dollar");
  incomeSpan.innerHTML = currentCard.income;

  const outcomeSpan = document.querySelector(".credit-card-info__text.credit-card-info__text--red.credit-card-info__text--dollar");
  outcomeSpan.innerHTML = currentCard.outcome;

  const cardStatusInput = document.querySelector(".credit-card-info__input");
  cardStatusInput.checked = currentCard.active;

  const weeklyPaymentLimitSpan = document.querySelector(".credit-card-info__text.credit-card-info__text--black");
  weeklyPaymentLimitSpan.innerHTML = `$${currentCard.weeklyPayment.used} / $${currentCard.weeklyPayment.limit}`;

  renderCardWeeklyLimitProgressByIndex(currentCard, cardIndex);
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    on: {
      slideChange: function (swiperArgs) {
        const currentSlideIndex = swiperArgs.activeIndex;
        renderCardDataByIndex(currentSlideIndex);
      }
    }
  });
}

function renderCardImages() {
  const swiperWrapperDiv = document.querySelector(".swiper-wrapper");

  for (const card of cardData) {
    const cardHtml = `
            <divs class="swiper-slide">
                <img src="${card.cardImage}" alt="">
            </div>
        `;
    swiperWrapperDiv.insertAdjacentHTML("beforeend", cardHtml);
  }
}

function populateCard() {
  renderCardImages();
  renderCardDataByIndex(0);
}

function main() {
  initSwiper();
  populateCard();
}

main();
