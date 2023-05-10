// setInterval(() => {
//   console.log('시작');
//   try {
//     throw new Error('서버를 고장내주마!');
//   } catch (err) {
//     console.error(err);
//   }
// }, 1000);


setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버고장내겠음');
  } catch (err) {
    console.error(err);
  }
}, 1000);