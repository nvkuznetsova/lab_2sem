const q = x => x*x;

const logged = function(f) {
  return function() {
    console.log(arguments);
    return f.apply(this, arguments);
  };
};
logged(q)(7);
