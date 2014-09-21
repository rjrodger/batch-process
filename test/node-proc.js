var i = 0;
function foo() {
  console.log('std '+i)
  console.error('err '+i)
  if( 10 == i ) process.exit(1);

  setTimeout(function(){
    i++
    foo()
  },100)
}
foo()
