var mail = "gopinathravi95@gmail.com";
var number = "";
var word = "";

for( i = 0; i < mail.length; i++ ){
    //console.log(mail[i]);
    if(mail[i] == "@"){
       // console.log(i);
        for(j = 0; j < i; j++){
            if(mail[j] > 0 || mail[j] < 9){
                number = number + mail[j];
            }
            else{
                word = word + mail[j];
            }
        }
    }
}
console.log(number);
console.log(word);