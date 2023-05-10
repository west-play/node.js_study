// const promise1 = Promise.resolve('성공1');
// const promise2 = Promise.resolve('성공2');
// (async () => {
//   for await (promise of [promise1, promise2]) {
//     console.log(promise);
//   }
// })();



const promise1 = Promise.resolve('111성공111');
const promise2 = Promise.resolve('2222성공2222');

(async() => {
  for await (promise of [promise1, promise2]){
    console.log(promise);
  }
})();
