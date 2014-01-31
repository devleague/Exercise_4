(function () {
  window.unsorted_50 = [];
  window.unsorted_100k = [];

  for (var i = 0; i < 50; i++) {
    window.unsorted_50.push(generateRandomPhoneNumber());
  }
  for (i = 0; i < 100000; i++) {
    window.unsorted_100k.push(generateRandomPhoneNumber());
  }

  //    3   7
  // 012-456-8901
  function generateRandomPhoneNumber () {
    var number = "";
    for (var i = 0; i < 12; i++) {
      if(i === 3 || i === 7){
        number += "-";
      }else{
        number += Math.floor(Math.random()*10);
      }
    }
    return number;
  }
})();