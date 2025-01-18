const amount = 12;

if (amount > 10) {
    for (let index = 0; index < 10; index++) {
        console.log('large number');
    }   
} else {
    console.log('small number');
}

switch (amount) {
    case 10:
        console.log('10 Hag');
        break;
    default:
        console.log('Not 10 Hag');
        break;
}



console.log("It's my first node app");