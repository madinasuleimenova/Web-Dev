// Example from Lecture

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// Task 
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("Enter your login", '');

let message = (login == 'Employee') ? 'Hello':
    (login == 'Director') ? 'Greetings':
    (login == '') ? 'No login' :
    message = '';

alert(message);

