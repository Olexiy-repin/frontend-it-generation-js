/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  console.log(`code: ${event.code}; key: ${event.key}`);

  if (event.code === 'KeyS') {
    console.log('Hello!');
  }
});
