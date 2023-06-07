function expo(number, quality, callback) {
    if (quality === 0) {
      return callback(1);
    } else if (quality === 1) {
      return callback(number);
    } else {
      return callback(number * expo(number, quality - 1, callback));
    }
  }
  
   
  function callback(result) {
    return result;
  }
  
   
  var result = expo(5, 3, callback);
  console.log(result);  
  