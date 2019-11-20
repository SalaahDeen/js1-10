
//write first method
1.
function sleep_in(weekday,vacation) {
    if(weekday == true && vacation == true){
        return true;
    }
    if(weekday == true){
        return false;
    }
    if(weekday == false){
        return true;
    }
    if(vacation == true){
        return true;
    }
    if(vacation == false){
        return false;
    }



}



//write second method

//add 2-10 below here...
2.
function monkey_trouble(a_smile, b_smile) {
   if(a_smile == true && b_smile == true){
       return true;
   }
   if (a_smile == true || b_smile == true){
       return false;
   } else {
       return true;
   }

}

3.
function string_times(word,x){
    var newWord = "";
    for(var i = 0; i < x; i++) {
        newWord = newWord + word;
    }
    return newWord;
}

4.
function front_times(word,x) {
    var newWord = "";
    var str = word.substring(0,3);
    for (var i = 0; i < x; i++) {
            newWord = newWord + str;
        }
        return newWord;

}

5.
function string_bits(word){
    var newWord = "";
    for(var i = 0; i < word.length; i++) {
        if(i % 2 != 0){
            newWord = newWord + word.substring(i - 1,i);
        }
    }
        return newWord;

}


6.
function caughtSpeeding(speed,birthday) {
    var n = 0
    if(birthday == true){
        n = 5;
    }


    if (speed <= 60 + n) {
        return 0;
    }
    if(speed >= 61 + n && speed <= 80 + n){
        return 1;
    }
    if(speed >= 81 + n){
        return 2;
    }
    if(speed >= 60 + n) {
        return 1;
    }
}

7.
function fizz_buzz(x){
var newWord = "!";
    if(x % 3 == 0 && x % 5 == 0) {
        newWord = "FizzBuzz";
        return newWord;

    }else if(x % 3 == 0){
    newWord = "Fizz";
        return newWord;
    }else if(x % 5 == 0){
        newWord = "Buzz";
        return newWord;
    }else{
        return x + newWord;
    }
}

8.
function teaParty(x,y){
    if(x < 5 || y < 5) {
        return 0;
    }else if(x >= 2 * y || y >= 2 * x) {
        return 2;
    } else if(x >= 5 && y >= 5){
        return 1;
    }
}

9.
function blackjack(x,y){
    if (x > 21 && y > 21){
        return 0;
    }else if(x > y && x <= 21){
        return x;
    }else if(y > 21){
        return x;
    }else{
        return y;
    }

}

10.
function loneSum(a, b, c){
    if(a == b && b == c) {
        return 0;
    }else if(a == b){
        return c;
    }else if(b == c){
        return a;
    }else if(a == c){
        return b;
    }else {
        return a + b + c;
    }

}



//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("true").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}
