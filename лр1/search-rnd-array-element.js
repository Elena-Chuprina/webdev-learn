var
  a = [];
  i = 0;
  IsFound = False;
while(a.length<10) 
    {b = Math.floor(Math.random() * 15);
      a.push(b);}
 k = prompt('Введите число:', 1);
 alert('Случайный массив: ');
 for (i = 0; i < 10; i++)
    {alert(a[i], ' ');}  
 for (i = 0; i < 10; i++)
     {if (a[i] == k)
        {IsFound = True;
          break;} }
 if (IsFound==True)
     {alert('Элемент ', k, ' найден!');}  
 else
     {alert('Элемент ', k, ' не найден');} 

