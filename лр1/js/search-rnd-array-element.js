function search() { 
  var arr = [];
  var size = 0;
  while (arr.length<10) {
    arr.push(Math.floor(Math.random() * 15));
  }
  num = prompt('Введите число:', 1);
  alert('Случайный массив: '+ arr.join (' '));
  var IsFound = false;
  for (size = 0; size < 10; size++) {
    if (arr[size] == num) {
      isFound = true;
      break;
    } 
  }
  if (isFound == true) {
    alert('Элемент '+ num + ' найден!');
  } else {
    alert('Элемент '+ num + ' не найден');
  } 
}
