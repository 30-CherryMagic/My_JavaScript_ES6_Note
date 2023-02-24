//アロー関数

function add( ...num ){
  let total = num.reduce(

  /*
  function( x,y ) {
      return x + y ;
  }
  */

    ( x,y ) =>  x + y 

  );
  console.log( total );
}

add( 4 , 5 , 7 , 8 , 12 );
//36


/*
アロー関数
{}を省略する場合、一行のみの場合に限ります。
{}を省略する場合、return文も省略できます。
複数行の処理がある場合は{}を使用する必要があります。
return文を明示的に書く必要があります。
*/
