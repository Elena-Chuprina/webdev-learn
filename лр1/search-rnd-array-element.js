var
  a = [];
  isFound = False;
  i = 0;
while(a.length<10) 
    {b = Math.floor(Math.random() * 15);
      a.push(b);}
 alert('Filled random array: ');
 for (i = 0; i < 10; i++)
    {alert(a[i], ' ');}  
 k = promt('Check number!', 1);
 for (i = 0; i < 10; i++)
     {if a[i] == k then 
        {IsFound = True;
          break;} }
 if (IsFound==True) then
     {alert('Element ', k, ' is found!');}  
  else
     {alert('Element ', k, ' not found');} 

