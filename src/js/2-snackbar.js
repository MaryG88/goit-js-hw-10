
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Отримуємо значення з форми
    const delay = parseInt(event.target.elements.delay.value, 10);
  const state = event.target.elements.state.value;

  // Створюємо проміс із затримкою
  const promise = createPromise(delay, state);

  // Обробляємо успішне і невдале виконання промісу
  promise
    .then((resolvedDelay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${resolvedDelay}ms`,
        position: 'topRight'
      });
    })
    .catch((rejectedDelay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${rejectedDelay}ms`,
        position: 'topRight'
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay); // Повертаємо значення затримки через resolve
      } else {
        reject(delay); // Повертаємо значення затримки через reject
      }
    }, delay);
  });
}