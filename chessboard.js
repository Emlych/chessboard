function chessboard(size) {
    let accu = '';
    for (i=1; i<=size; i++) {
        for (j=1; j<=size; j++) {
            if (j%2 !== 0 && i%2 !== 0) {
                accu += '#';
            } 
            else if (j%2 !== 0 && i%2 === 0) {
                accu += 'x';
            }
            else if (j%2 === 0 && i%2 !== 0) {
                accu += 'x';
            }
            else if (j%2 === 0 && i%2 === 0) {
                accu += '#';
            }
        }
        accu += '<br>';
    }
    return accu;
}

//document.getElementById("chessboard").innerHTML = chessboard(10);

document.getElementById("value-submit").addEventListener("click", function() {
    let inputVal = document.getElementById("value-field").value;
    //document.getElementById("input-value").innerHTML = inputVal;
    document.getElementById("chessboard").innerHTML = chessboard(inputVal);
});