"use strict";

new Vue({
  el: '#app',
  data: {
    title: 'DELICIOUS SUSHI',
    lorem15: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est voluptate ad tenetur! Magni, eligendi?',
    lorem8: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    orderLink: '#contact',
    secondTitle: 'Best seller',
    title3: 'Best Tasty',
    gridDblImg: 'grid__dbl_img grid__dbl_item flexCenter wow zoomIn',
    gridDblTetx: 'grid__dbl_text grid__dbl_item flexCenterColumn',
    comment: 'If you are a culinary fan, if you like to spend time in your kitchen, you likely find yourself looking for reliable resources through which you can'
  }
}); // ANIMATION

var b_1 = document.querySelector('.delicious__icon:nth-child(1)');
var b_2 = document.querySelector('.delicious__icon:nth-child(2)');
var b_3 = document.querySelector('.delicious__icon:nth-child(3)');
var b_4 = document.querySelector('.delicious__icon:nth-child(4)');
var images = [riceSushi_I = {
  src: 'src/rice-sushi.png'
}, redFishSushi_I = {
  src: 'src/redFishUp.png'
}, redSushi_I = {
  src: 'src/red-sushi.png'
}, fishUpSushi_I = {
  src: 'src/fishUp.png'
}];

function changeMe1() {
  var state, waitMe;
  return regeneratorRuntime.async(function changeMe1$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          state = 1;

          waitMe = function waitMe(ms) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve();
              }, ms);
            });
          };

          if (!(state == 1)) {
            _context.next = 41;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_1.classList.add('changed');
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_1.classList.remove('changed');
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_1.setAttribute('src', images[0].src);
          }));

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 2;
          }));

        case 11:
          if (!(state == 2)) {
            _context.next = 41;
            break;
          }

          _context.next = 14;
          return regeneratorRuntime.awrap(waitMe(3000).then(function () {
            return b_1.classList.add('changed');
          }));

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_1.classList.remove('changed');
          }));

        case 16:
          _context.next = 18;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_1.setAttribute('src', images[1].src);
          }));

        case 18:
          _context.next = 20;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 3;
          }));

        case 20:
          if (!(state == 3)) {
            _context.next = 41;
            break;
          }

          _context.next = 23;
          return regeneratorRuntime.awrap(waitMe(3000).then(function () {
            return b_1.classList.add('changed');
          }));

        case 23:
          _context.next = 25;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_1.classList.remove('changed');
          }));

        case 25:
          _context.next = 27;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_1.setAttribute('src', images[2].src);
          }));

        case 27:
          _context.next = 29;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 4;
          }));

        case 29:
          if (!(state == 4)) {
            _context.next = 41;
            break;
          }

          _context.next = 32;
          return regeneratorRuntime.awrap(waitMe(3000).then(function () {
            return b_1.classList.add('changed');
          }));

        case 32:
          _context.next = 34;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_1.classList.remove('changed');
          }));

        case 34:
          _context.next = 36;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_1.setAttribute('src', images[3].src);
          }));

        case 36:
          _context.next = 38;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 5;
          }));

        case 38:
          if (!(state == 5)) {
            _context.next = 41;
            break;
          }

          _context.next = 41;
          return regeneratorRuntime.awrap(waitMe(3000).then(function () {
            return changeMe1();
          }));

        case 41:
        case "end":
          return _context.stop();
      }
    }
  });
}

changeMe1();

function changeMe2() {
  var state, waitMe;
  return regeneratorRuntime.async(function changeMe2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          state = 1;

          waitMe = function waitMe(ms) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve();
              }, ms);
            });
          };

          if (!(state == 1)) {
            _context2.next = 41;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_2.classList.add('changed');
          }));

        case 5:
          _context2.next = 7;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_2.classList.remove('changed');
          }));

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_2.setAttribute('src', images[3].src);
          }));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 2;
          }));

        case 11:
          if (!(state == 2)) {
            _context2.next = 41;
            break;
          }

          _context2.next = 14;
          return regeneratorRuntime.awrap(waitMe(4000).then(function () {
            return b_2.classList.add('changed');
          }));

        case 14:
          _context2.next = 16;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_2.classList.remove('changed');
          }));

        case 16:
          _context2.next = 18;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_2.setAttribute('src', images[1].src);
          }));

        case 18:
          _context2.next = 20;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 3;
          }));

        case 20:
          if (!(state == 3)) {
            _context2.next = 41;
            break;
          }

          _context2.next = 23;
          return regeneratorRuntime.awrap(waitMe(4000).then(function () {
            return b_2.classList.add('changed');
          }));

        case 23:
          _context2.next = 25;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_2.classList.remove('changed');
          }));

        case 25:
          _context2.next = 27;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_2.setAttribute('src', images[2].src);
          }));

        case 27:
          _context2.next = 29;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 4;
          }));

        case 29:
          if (!(state == 4)) {
            _context2.next = 41;
            break;
          }

          _context2.next = 32;
          return regeneratorRuntime.awrap(waitMe(4000).then(function () {
            return b_2.classList.add('changed');
          }));

        case 32:
          _context2.next = 34;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_2.classList.remove('changed');
          }));

        case 34:
          _context2.next = 36;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_2.setAttribute('src', images[0].src);
          }));

        case 36:
          _context2.next = 38;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 5;
          }));

        case 38:
          if (!(state == 5)) {
            _context2.next = 41;
            break;
          }

          _context2.next = 41;
          return regeneratorRuntime.awrap(waitMe(4000).then(function () {
            return changeMe2();
          }));

        case 41:
        case "end":
          return _context2.stop();
      }
    }
  });
}

changeMe2();

function changeMe3() {
  var state, waitMe;
  return regeneratorRuntime.async(function changeMe3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          state = 1;

          waitMe = function waitMe(ms) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve();
              }, ms);
            });
          };

          if (!(state == 1)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_3.classList.add('changed');
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_3.classList.remove('changed');
          }));

        case 7:
          _context3.next = 9;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_3.setAttribute('src', images[2].src);
          }));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 2;
          }));

        case 11:
          if (!(state == 2)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 14;
          return regeneratorRuntime.awrap(waitMe(5000).then(function () {
            return b_3.classList.add('changed');
          }));

        case 14:
          _context3.next = 16;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_3.classList.remove('changed');
          }));

        case 16:
          _context3.next = 18;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_3.setAttribute('src', images[0].src);
          }));

        case 18:
          _context3.next = 20;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 3;
          }));

        case 20:
          if (!(state == 3)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 23;
          return regeneratorRuntime.awrap(waitMe(5000).then(function () {
            return b_3.classList.add('changed');
          }));

        case 23:
          _context3.next = 25;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_3.classList.remove('changed');
          }));

        case 25:
          _context3.next = 27;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_3.setAttribute('src', images[1].src);
          }));

        case 27:
          _context3.next = 29;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 4;
          }));

        case 29:
          if (!(state == 4)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 32;
          return regeneratorRuntime.awrap(waitMe(5000).then(function () {
            return b_3.classList.add('changed');
          }));

        case 32:
          _context3.next = 34;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_3.classList.remove('changed');
          }));

        case 34:
          _context3.next = 36;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_3.setAttribute('src', images[3].src);
          }));

        case 36:
          _context3.next = 38;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 5;
          }));

        case 38:
          if (!(state == 5)) {
            _context3.next = 41;
            break;
          }

          _context3.next = 41;
          return regeneratorRuntime.awrap(waitMe(5000).then(function () {
            return changeMe3();
          }));

        case 41:
        case "end":
          return _context3.stop();
      }
    }
  });
}

changeMe3();

function changeMe4() {
  var state, waitMe;
  return regeneratorRuntime.async(function changeMe4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          state = 1;

          waitMe = function waitMe(ms) {
            return new Promise(function (resolve) {
              setTimeout(function () {
                return resolve();
              }, ms);
            });
          };

          if (!(state == 1)) {
            _context4.next = 41;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_4.classList.add('changed');
          }));

        case 5:
          _context4.next = 7;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_4.classList.remove('changed');
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_4.setAttribute('src', images[1].src);
          }));

        case 9:
          _context4.next = 11;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 2;
          }));

        case 11:
          if (!(state == 2)) {
            _context4.next = 41;
            break;
          }

          _context4.next = 14;
          return regeneratorRuntime.awrap(waitMe(2000).then(function () {
            return b_4.classList.add('changed');
          }));

        case 14:
          _context4.next = 16;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_4.classList.remove('changed');
          }));

        case 16:
          _context4.next = 18;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_4.setAttribute('src', images[3].src);
          }));

        case 18:
          _context4.next = 20;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 3;
          }));

        case 20:
          if (!(state == 3)) {
            _context4.next = 41;
            break;
          }

          _context4.next = 23;
          return regeneratorRuntime.awrap(waitMe(2000).then(function () {
            return b_4.classList.add('changed');
          }));

        case 23:
          _context4.next = 25;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_4.classList.remove('changed');
          }));

        case 25:
          _context4.next = 27;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_4.setAttribute('src', images[0].src);
          }));

        case 27:
          _context4.next = 29;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 4;
          }));

        case 29:
          if (!(state == 4)) {
            _context4.next = 41;
            break;
          }

          _context4.next = 32;
          return regeneratorRuntime.awrap(waitMe(2000).then(function () {
            return b_4.classList.add('changed');
          }));

        case 32:
          _context4.next = 34;
          return regeneratorRuntime.awrap(waitMe(900).then(function () {
            return b_4.classList.remove('changed');
          }));

        case 34:
          _context4.next = 36;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return b_4.setAttribute('src', images[2].src);
          }));

        case 36:
          _context4.next = 38;
          return regeneratorRuntime.awrap(waitMe(0).then(function () {
            return state = 5;
          }));

        case 38:
          if (!(state == 5)) {
            _context4.next = 41;
            break;
          }

          _context4.next = 41;
          return regeneratorRuntime.awrap(waitMe(2000).then(function () {
            return changeMe4();
          }));

        case 41:
        case "end":
          return _context4.stop();
      }
    }
  });
}

changeMe4();
var navContainer = document.querySelector('.nav__container');
var body = document.querySelector('body');
var navIcon_1 = document.querySelector('.sushi__navIcon:nth-child(1)');
var navIcon_2 = document.querySelector('.sushi__navIcon:nth-child(2)');
var nav__ul = document.querySelector('.nav__ul');

function openMenu() {
  navContainer.classList.add('active');
  body.classList.add('active');
  setTimeout(function () {
    navIcon_1.classList.add("active");
    navIcon_2.classList.add("active");
    setTimeout(function () {
      nav__ul.classList.add("active");
      navIcon_1.classList.add("anim");
      navIcon_2.classList.add("anim");
    }, 500);
  }, 500);
}

function closeMenu() {
  nav__ul.classList.remove("active");
  navIcon_1.classList.remove("anim");
  navIcon_2.classList.remove("anim");
  setTimeout(function () {
    navIcon_1.classList.remove("active");
    navIcon_2.classList.remove("active");
    setTimeout(function () {
      navContainer.classList.remove('active');
      body.classList.remove('active');
    }, 300);
  }, 400);
}