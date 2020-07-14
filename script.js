var usersArr = [
  {login: 'user1', password: 'pas1', name: 'Alex'}, 
  {login: 'user2', password: 'pas2', name: 'Anna'},
  {login: 'user3', password: 'pas3', name: 'John'}
];

var logArr = {
  login: prompt('Введите логин'),
  password: prompt('Введите пароль')
};

for (i = 0; i < usersArr.length; i++) {
  if (logArr.login === usersArr[i].login && logArr.password === usersArr[i].password) {
    alert('Привет, ' + usersArr[i].name);
    break;
  }
  else if (i === usersArr.length -1) {
    alert('Ошибка авторизации');
  }
}