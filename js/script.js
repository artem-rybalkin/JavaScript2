var arr = []; //создаём пустой массив
for (var i = 0; i < 5 ; i++) { //5 раз спрашиваем имя и записываем в массив
	var name = prompt( 'type name' );
	arr.push( name );
}

var username = prompt( 'type username' ); //запрашиваем имя пользователя
var count = 1;

for (var j = 0; j < arr.length; j++) { //ищём имя пользователя в массива, если есть то прибавляем 1
	if (username == arr[j]) {
		count += 1;
		break;
	} 
}

if (count>=2) {
	alert( username + ', вы успешно вошли' ) ;
} else {
		alert( 'error' ) ;
}