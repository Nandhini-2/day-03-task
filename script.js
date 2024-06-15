//1. ANONYMOUS AND IIFE FUNCTIONS

//1. Anonymous funtion - Print odd numbers in an array
var res = function (arr){
    var temp = [];
      for( var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
          temp.push(arr[i]);
        }
      }
      return temp;
    }
    
    console.log(res([12,13,14,15,16,17,18]));

//IIFE
(function (arr){
    var temp = [];
      for( var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
          temp.push(arr[i]);
        }
      }
      console.log(temp);
    })([12,13,14,15,16,17,18]);


//2. Anonymous funtion - Convert all the strings to title caps in a string array
var res = function (arr){
    var uppercase = arr.toUpperCase();
    return uppercase;
  }
  
  console.log(res("hello world"));

  //IIFE 
  (function (arr){
    var uppercase = arr.toUpperCase();
    console.log(uppercase);
  })("hello world")


  //3. Anonymous funtion - Sum of all numbers in an array
  var res = function (arr){
    var count = 0;
      for( var i=0;i<arr.length;i++){
        count=count+arr[i];
      }
      return count;
    }
    
    console.log(res([1,5,6,4,19]));

  //IIFE
  (function (arr){
    var count = 0;
      for( var i=0;i<arr.length;i++){
        count=count+arr[i];
      }
      console.log(count);
    })([1,5,6,4,19])

    
//4. Anonymous funtion - Return all the prime numbers in an array

var res = function(arr){
  var prime = [];
   for (var i = 0; i < arr.length; i++){
     if(arr[i] % 2 && arr[i] % 3 != 0){
       prime.push(arr[i]);
       }
     }
     return prime;
  }
  
  console.log(res([12,13,14,15,16,17,18,19]));

//IIFE
(function(arr){
  var prime = [];
   for (var i = 0; i < arr.length; i++){
     if(arr[i] % 2 && arr[i] % 3 != 0){
       prime.push(arr[i]);
       }
     }
     console.log(prime);
  })([12,13,14,15,16,17,18,19]);

//5. Anonymous funtion - Return all the palindromes in an array

function res(str) {
  	    let rev = [];
  	    for (let i = 0; i < str.length; i++) {
  	       rev[i] = str[i].split("").reverse().join("");
  	        if (str[i] == rev[i]) {
              console.log( str[i]);
  	        }
  	    }
  }
  
res(["racecar","nitin","ram"]);

//IIFE
(function (str) {
  let rev = [];
  for (let i = 0; i < str.length; i++) {
     rev[i] = str[i].split("").reverse().join("");
      if (str[i] == rev[i]) {
        console.log( str[i]);
      }
  }
})(["racecar","nitin","ram"]);


//6. Return median of two sorted arrays of the same size.

var res = (function(array){
  let dup = [...new Set(array)];
  return(dup);
 })
 console.log(res[1,1,2,2,3,4,44]);


//IIFE
(function(array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,1,2,2,3,4,44])

//7. Remove duplicates from an array
var res = function(array){
  let dup = [...new Set(array)];
  return(dup);
 }
 console.log(res([1,1,2,2,3,4,44]));

//IIFE
(function(array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,1,2,2,3,4,44])


//8. Rotate an array by k times
function reverse(a , li , ri){
  while(li < ri){
       var temp = a[li];
       a[li]= a[ri];
       a[ri] = temp;
       
       li++;
       ri--;
     }
 }

 //Anonymous funtion
 var res = function(a, k){
  k = k % a.length;
  if(k < 0){
  k += a.length;
  }

 reverse(a, 0, a.length - k - 1);
 reverse(a, a.length - k, a.length - 1);
 reverse(a, 0, a.length - 1);
 }
 
 console.log(res([1,2,3,4] , 2));

 //IIFE 
 (function(a, k){
  k = k % a.length;
  if(k < 0){
  k += a.length;
  }

 reverse(a, 0, a.length - k - 1);
 reverse(a, a.length - k, a.length - 1);
 reverse(a, 0, a.length - 1);
 })([1,2,3,4] , 2)



//2. ARROW FUNCTIONS

//1. Print odd numbers in an array
var res =  (arr)=>{
  var temp = [];
    for( var i=0;i<arr.length;i++){
      if(arr[i]%2!=0){
        temp.push(arr[i]);
      }
    }
    return temp;
  }

//2. Convert all the strings to title caps in a string array
var res =  (arr)=>{
  var uppercase = arr.toUpperCase();
  return uppercase;
}

console.log(res("hello world"));

//3. Sum of all numbers in an array
var res =  (arr)=>{
  var count = 0;
    for( var i=0;i<arr.length;i++){
      count=count+arr[i];
    }
    return count;
  }
  
  console.log(res([1,5,6,4,19]));

//4. Return all the prime numbers in an array
var res = (arr)=>{
  var prime = [];
   for (var i = 0; i < arr.length; i++){
     if(arr[i] % 2 && arr[i] % 3 != 0){
       prime.push(arr[i]);
       }
     }
     return prime;
  }

//5. Return all the palindromes in an array
var res = (str) => {
  let rev = [];
  for (let i = 0; i < str.length; i++) {
     rev[i] = str[i].split("").reverse().join("");
      if (str[i] == rev[i]) {
        console.log( str[i]);
      }
  }
}

res(["racecar","nitin","ram"]);
