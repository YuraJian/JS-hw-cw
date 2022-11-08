// Task 2
true && true                        // true, (true);
false || true                       // true, (true);
true && 'false'                     // 'false', (true);
0 && 1 || ' ' && 42                 // 0 || 42,   42, (true);
null == undefined                   //true;
'' == 0                             //true;
1 === '1'                           //false
NaN === NaN && true                 //NaN === true, (false);
true || false && true || false      // true || false || false,     true || false   true,  (true);
(true || false) && (true || false)  //true && true,     true,   (true);
10 || 0 && 'dog' || ''              // 10 || 0 || '',    10 || '',  10,  (true);
(10 || 0) && ('dog' || '')          // 10 && 'dog',   'dog',   (true);