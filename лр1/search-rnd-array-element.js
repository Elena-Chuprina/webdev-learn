function search() { 
  var arr = [];
  var size = 0;
  while (arr.length<10) {
      arr.push(Math.floor(Math.random() * 15));
  }
  Num = prompt('Введите число:', 1);
  alert('Случайный массив: '+ arr.join (' '));
  var IsFound = false;
  for (size = 0; size < 10; size++) {
      if (arr[size] == Num) {
        isFound = true;
        break;
      } 
  }
  if (isFound==true) {
      alert('Элемент '+ Num + ' найден!');
  } else {
      alert('Элемент '+ Num + ' не найден');
  } 
}
