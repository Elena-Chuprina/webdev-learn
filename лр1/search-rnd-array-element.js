var
  a = [];
  i = 0;
while(a.length<10) 
    {b = Math.floor(Math.random() * 15);
      a.push(b);}
 k = promt('Введите число:', 1);
 alert('Случайный массив: ');
 for (i = 0; i < 10; i++)
    {alert(a[i], ' ');}  
 for (i = 0; i < 10; i++)
     {if (a[i] == k)
        {IsFound = True;
          break;} }
 if (IsFound==True) then
     {alert('Элемент ', k, ' найден!');}  
 else
     {alert('Элемент ', k, ' не найден');} 

