const refs = {
  allBtn: document.querySelector('[data-type="all"]'),
  webBtn: document.querySelector('[data-type="web"]'),
  appBtn: document.querySelector('[data-type="app"]'),
  designBtn: document.querySelector('[data-type="design"]'),
  marketingBtn: document.querySelector('[data-type="marketing"]'),
  cardsList: document.querySelector('.work-cards'),
};

refs.allBtn.addEventListener('click', showAllCards);
function showAllCards() {
  renderCards(portfolioData);
}

refs.webBtn.addEventListener('click', showWebCards);
function showWebCards() {
  const filteredArr = portfolioData.filter(({ type }) => type === 'Веб-сайт');
  console.log(filteredArr);
  renderCards(filteredArr);
}

refs.appBtn.addEventListener('click', showAppCards);
function showAppCards() {
  const filteredArr = portfolioData.filter(({ type }) => type === 'Приложение');
  console.log(filteredArr);
  renderCards(filteredArr);
}

refs.designBtn.addEventListener('click', showDesignCards);
function showDesignCards() {
  const filteredArr = portfolioData.filter(({ type }) => type === 'Дизайн');
  console.log(filteredArr);
  renderCards(filteredArr);
}

refs.marketingBtn.addEventListener('click', showMarketingCards);
function showMarketingCards() {
  const filteredArr = portfolioData.filter(({ type }) => type === 'Маркетинг');
  console.log(filteredArr);
  renderCards(filteredArr);
}

const portfolioData = [
  {
    title: 'Технокряк',
    type: 'Веб-сайт',
    srcMobile:
      './images/mobile/portfolio1-min.jpg 1x, ./images/mobile/portfolio1@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio1-min.jpg 1x, ./images/tablet/portfolio1@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio1-min.jpg 1x, ./images/desktop/portfolio1@2x-min.jpg 2x',
    img: './images/desktop/portfolio1-min.jpg',
    alt: 'Ноутбук',
  },

  {
    title: 'Постер New Orlean vs Golden Star',
    type: 'Дизайн',
    srcMobile:
      './images/mobile/portfolio2-min.jpg 1x, ./images/mobile/portfolio2@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio2-min.jpg 1x, ./images/tablet/portfolio2@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio2-min.jpg 1x, ./images/desktop/portfolio2@2x-min.jpg 2x',
    img: './images/desktop/portfolio2-min.jpg',
    alt: 'Баскетбольная игра',
  },

  {
    title: 'Ресторан Seafood',
    type: 'Приложение',
    srcMobile:
      './images/mobile/portfolio3-min.jpg 1x, ./images/mobile/portfolio3@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio3-min.jpg 1x, ./images/tablet/portfolio3@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio3-min.jpg 1x, ./images/desktop/portfolio3@2x-min.jpg 2x',
    img: './images/desktop/portfolio3-min.jpg',
    alt: 'Ноутбук',
  },
  {
    title: 'Проект Prime',
    type: 'Маркетинг',
    srcMobile:
      './images/mobile/portfolio4-min.jpg 1x, ./images/mobile/portfolio4@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio4-min.jpg 1x, ./images/tablet/portfolio4@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio4-min.jpg 1x, ./images/desktop/portfolio4@2x-min.jpg 2x',
    img: './images/desktop/portfolio4-min.jpg',
    alt: 'Наушники',
  },
  {
    title: 'Проект Boxes',
    type: 'Приложение',
    srcMobile:
      './images/mobile/portfolio5-min.jpg 1x, ./images/mobile/portfolio5@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio5-min.jpg 1x, ./images/tablet/portfolio5@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio5-min.jpg 1x, ./images/desktop/portfolio5@2x-min.jpg 2x',
    img: './images/desktop/portfolio5-min.jpg',
    alt: 'Коробки',
  },
  {
    title: 'Inspiration has no Borders',
    type: 'Веб-сайт',
    srcMobile:
      './images/mobile/portfolio6-min.jpg 1x, ./images/mobile/portfolio6@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio6-min.jpg 1x, ./images/tablet/portfolio6@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio6-min.jpg 1x, ./images/desktop/portfolio6@2x-min.jpg 2x',
    img: './images/desktop/portfolio6-min.jpg',
    alt: 'Экран iMac',
  },

  {
    title: 'Издание Limited Edition',
    type: 'Дизайн',
    srcMobile:
      './images/mobile/portfolio7-min.jpg 1x, ./images/mobile/portfolio7@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio7-min.jpg 1x, ./images/tablet/portfolio7@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio7-min.jpg 1x, ./images/desktop/portfolio7@2x-min.jpg 2x',
    img: './images/desktop/portfolio7-min.jpg',
    alt: 'Лейбл',
  },

  {
    title: 'Проект LAB',
    type: 'Маркетинг',
    srcMobile:
      './images/mobile/portfolio8-min.jpg 1x, ./images/mobile/portfolio8@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio8-min.jpg 1x, ./images/tablet/portfolio8@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio8-min.jpg 1x, ./images/desktop/portfolio8@2x-min.jpg 2x',
    img: './images/desktop/portfolio8-min.jpg',
    alt: 'Экран iMac',
  },

  {
    title: 'Growing Business',
    type: 'Приложение',
    srcMobile:
      './images/mobile/portfolio9-min.jpg 1x, ./images/mobile/portfolio9@2x-min.jpg 2x',
    srcTablet:
      './images/tablet/portfolio9-min.jpg 1x, ./images/tablet/portfolio9@2x-min.jpg 2x',
    srcDesktop:
      './images/desktop/portfolio9-min.jpg 1x, ./images/desktop/portfolio9@2x-min.jpg 2x',
    img: './images/desktop/portfolio9-min.jpg',
    alt: 'Ноутбук',
  },
];

function createMarkup(cardsData) {
  return cardsData
    .map(
      ({ title, type, srcMobile, srcTablet, srcDesktop, alt, img }) =>
        `<li class="work-cards__item">
          <a
            class="work-cards__link"
            href="https://github.com/rumpear"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <div class="work-cards__thumb">
              <picture>
                <source
                  srcset=
                    ${srcMobile}
                  media="(max-width: 767px)"
                />
                <source
                  srcset=${srcTablet}
                  media="(max-width: 1199px)"
                />
                <source
                  srcset=${srcDesktop}
                  media="(min-width: 1200px)"
                />
                <img
                  class="team__img"
                  src=${img}
                  alt=${alt}
                />
              </picture>
              <div class="work-cards__overlay">
                <p class="work-cards__overlay-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nemo at eos, modi atque animi illo sunt amet quo qui laboriosam magnam ratione mollitia? 
                  Consectetur, provident. Quisquam, quidem, quisquam. 
                </p>
              </div>
            </div>
            <div class="work-cards__content">
              <h2 class="work-cards__title">${title}</h2>
              <p class="work-cards__text">${type}</p>
            </div>
          </a>
        </li>`,
    )
    .join('');
}

function renderCards(cardsArr) {
  refs.cardsList.innerHTML = '';
  const markup = createMarkup(cardsArr);
  refs.cardsList.insertAdjacentHTML('afterbegin', markup);
}
