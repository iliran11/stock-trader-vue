const removeEventHandler = function (animationClass, element) {
  element.classList.remove(animationClass);
  element.removeEventListener('animationend', 'handler');
}

export const animate = (element, animationClass) => {
  element.addEventListener('animationend', () => (removeEventHandler(animationClass, element)))
  element.className += ` ${animationClass}`;
}

// export const animateEvent = (element) => {
//   window.addEventListener('animationend', animate, false);
// }
// var animate = function (event) {
//   // do some stuff here
//   window.removeEventListener('click', animate, false);
// };

