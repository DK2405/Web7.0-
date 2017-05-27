
function countDown(time){
  for(var i = time; i>0; i--){

      setTimeout(function(){
        var i=time--;
        console.log(i);
      }, (time-i)*1000);
  }
}
countDown(5);
