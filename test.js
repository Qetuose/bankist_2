const select_create_delete = function () {
  //SELECTING ELEMENTS
  console.log(document.documentElement);
  console.log(document.head);
  console.log(document.body);
  const header = document.querySelector('.header');
  const allSections = document.querySelectorAll('.section');

  console.log(allSections);

  document.getElementById('section--1');
  const allButtons = document.getElementsByTagName('button');
  console.log(allButtons);

  console.log(document.getElementsByClassName('btn'));

  //CREATING AND INSERTING ELEMENTS

  // .insertAdjacentHTML
  const message = document.createElement('div');
  message.classList.add('cookie-message');
  // message.textContent = 'We use cookies for imporved functionality and analytics.'
  message.innerHTML =
    'We use cookies for imporved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
  // header.prepend(message);
  header.append(message);
  // header.append(message.cloneNode(true));
  // header.before(message);
  // header.after(message);

  //Delete elements

  document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
    // message.parentElement.removeChild(message); old school
  });

  // STYLES
  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  //reads only inline
  console.log(message.style.color);
  console.log(message.style.backgroundColor);

  console.log(getComputedStyle(message).height);

  message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

  document.documentElement.style.setProperty('--color-primary', 'orangered');

  //ATTRIBUTES
  const logo = document.querySelector('.nav__logo');
  console.log(logo.alt);

  console.log(logo.className);

  logo.alt = 'Beutiful minimalist logo';

  //Non-standart
  console.log(logo.designer);
  console.log(logo.getAttribute('designer'));
  logo.setAttribute('company', 'bankist');

  console.log(logo.src);
  console.log(logo.getAttribute('src'));

  const link = document.querySelector('.twitter-link');
  console.log(link.href);
  console.log(link.getAttribute('href'));

  //DATA ATTRIBUTES
  console.log(logo.dataset.versionNumber);

  //CLASSES
  logo.classList.add('c');
  logo.classList.remove('c');
  logo.classList.toggle('c');
  logo.classList.contains('c');

  //dont use. Overrite all existing classes. Adds one class
  logo.className = 'Lukas';
};

// select_create_delete();

const events = function () {
  const h1 = document.querySelector('h1');
  const alertH1 = () => {
    alert('addEventlistner: Great! You are reading h1 heading!');
    // h1.removeEventListener('mouseenter', alertH1);
  };

  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
  h1.addEventListener('mouseenter', alertH1);

  // h1.onmouseenter = () => {
  //   alert('addEventlistner: Great! You are reading ht heading!');
  // };
};

// events();
const x = function () {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

  document.querySelector('.nav__link').addEventListener('click', function (e) {
    console.log('LINK', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();

    //Stop propagtion
    // e.stopPropagation();
  });
  document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('CONTAINER', e.target, e.currentTarget);
  });
  document.querySelector('.nav').addEventListener(
    'click',
    function (e) {
      this.style.backgroundColor = randomColor();
      console.log('NAV', e.target, e.currentTarget);
    },
    false // default
  );
};
// x();

const dom_traversing = function () {
  const h1 = document.querySelector('h1');

  // going downwards: child
  console.log(h1.querySelectorAll('.highlight'));
  console.log(h1.childNodes);
  console.log(h1.children);
  h1.firstElementChild.style.color = 'white';
  h1.lastElementChild.style.color = 'orangered';

  //going upwards: parents
  console.log(h1.parentNode);
  console.log(h1.parentElement);

  h1.closest('.header').style.background = ' var(--gradient-secondary)';
  h1.closest('h1').style.background = ' var(--gradient-primary)';

  //going sideways: siblings
  console.log(h1.previousElementSibling);
  console.log(h1.nextElementSibling);

  console.log(h1.previousSibling);
  console.log(h1.nextSibling);

  console.log(h1.parentElement.children);
  [...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  });
};

// dom_traversing();
