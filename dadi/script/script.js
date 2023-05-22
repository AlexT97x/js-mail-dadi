
const pcNum = Math.floor(Math.random()*6+1);
console.log('Il PC ha lanciato:'+pcNum);

const userNum = Math.floor(Math.random()*6+1);
console.log('Tu hai lanciato:'+userNum);

if (pcNum > userNum){

    console.log('Ha vinto il PC :(');

}   else if (pcNum < userNum){
    console.log('Hai vinto tu!')
} else (pcNum === userNum); {
    console.log('Pareggio!;')
}