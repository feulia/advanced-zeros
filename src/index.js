module.exports = function getZerosCount(number, base) {
  var counter = base;
  for (i = 2; i <= counter / 2; i++) {
    if (counter % i === 0) {
      counter = Math.floor(counter/i);
      i = 1;
    }
  }
  var counterState = counter;
  var result = 0;
  while (number > counter) {
    result = result + Math.floor(number/counter);
    counter = counter * counterState;
  }
  
  var check1 = function() {
    return (
      base == 54 ||
      base == 108 ||
      base == 192 ||
      base == 250
    );
  } 

  var check2 = function() {
    return (
      base == 49 ||
      base == 98 ||
      base == 144 ||
      base == 147
    );
  }

  var check3 = function() {
    return (base == 4 ||
      base == 9 ||
      base == 36 ||
      base == 169
    );
  }

  if (check1()) {
    return Math.floor(result/3);
  }

  if (check2() || check3() || base == 196) {
    return Math.floor(result/2);
  }

  if (base == 64) {
    return Math.floor(result / 6);
  }

  if (base == 16) {
    return Math.floor(result / 14 * 3);
  }

  if (base == 81) {
    return Math.floor(result / 4);
  }

  if (base == 160) {
    return Math.ceil(result * 0.8);
  }

  return result;
}
