let rgb = (r = process.argv[2]||Math.floor(Math.random() * 254),
          g = process.argv[3]||Math.floor(Math.random() * 254),
          b = process.argv[4]||Math.floor(Math.random() * 254)) => {return 'rgb('+r+', '+g+', '+b+')';}
console.log(rgb());
