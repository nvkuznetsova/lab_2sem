console.time();
setTimeout( () => {
  console.log('3 seconds pass');
  console.timeEnd();
  console.time();
  setTimeout( () => {
    console.log('7 seconds pass!');
    console.timeEnd();
    console.time();
    setTimeout( () => {
      console.log('10 seconds pass!!!');
      console.timeEnd();
    }, 10000);
  }, 7000);
}, 3000);
