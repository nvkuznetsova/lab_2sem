const but = document.getElementById('submit');
const upcase = x => x.toUpperCase();
const add = x=> x.padEnd(10, '*');
const concat = x=> x+x;
const reverse = x=> x.split('').reverse().join(''); // split string-to arr, join arr -to string

but.addEventListener('click', () => {
  let input = document.getElementById('input').value;
  if(input.length >=3 && input.length <=5) {
    let res = input
      |> upcase
     |> add
     |> concat
     |> reverse;
     console.log(res);
     console.log(reverse(concat(add(upcase(input)))));
  }
});
