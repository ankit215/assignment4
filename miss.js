var a = new Array(100);
for ( var i = 0; i < 100 ; i++ ) {
    a[i] = 1+i;
}
for (var i = 0 ; i < a.length;i++){
    console.log(a[i])
}
var missing = [];

for ( var j = 0; j < a.length; j++ ) {
    for ( var i = 1; i <= 100; i++ ) {
        if (a[j] != 15) {
            missing.push( i );
        }
    }      
}