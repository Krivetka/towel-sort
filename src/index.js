
// You should implement your task here.

module.exports = function towelSort (matrix) {
    arr = [];
    if(matrix==null){
        return arr;
    }

    for(i=0; i<matrix.length; i++){
        if(i%2==0){
            for(t=0; t<matrix[i].length; t++){
                arr.push(matrix[i][t]);
            }
        }
        else {
            for(t=matrix[i].length-1; t>=0; t--){
                arr.push(matrix[i][t]);
            }
        }

    }
        return arr;
}
