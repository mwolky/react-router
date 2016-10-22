/* function getTemp(location) {
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(20);
      reject('failed');
    },10000);
  });
}

getTemp().then(function(temp){
  console.log('success: ', temp)
},function(err){
  console.log('error: ', err);
}); */

function addPromise(a, b){
  return new Promise(function(resolve,reject){
    if ((typeof a === 'number')&&(typeof b === 'number')) {
      resolve(a+b);
    } else {
      reject('it\'s not a number');
    }
  });
}
var promiseFunS = function(sum){
  console.log('result is: ', sum);
};
var promiseFunF = function(err){
  console.log('there was an error: ', err);
};
addPromise(2,3).then(promiseFunS,promiseFunF);
addPromise(2,'k').then(promiseFunS,promiseFunF);
