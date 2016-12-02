function Task1(){
    var arrayMillion = [];

    getRandomInt(0, 1000000);
//
    sortFromTopToBottom(arrayMillion);
//
    sortFromBotToTop(arrayMillion);
//
    sumElementsOfArray(arrayMillion);
//
    //MAX-VALUE is 10000, because JS is not in the mood for stream video)
    function getRandomInt(min, max) {

        console.time('Random array create');
        for (var i = 0; i < 10000; i++) {
            arrayMillion[i] = Math.floor(Math.random() * max);
        }
        ;
        console.timeEnd('Random array create');
    }

    function sortFromTopToBottom(MegaArray) {
        var n = MegaArray.length;
        console.time('Sorting from top to bottom');
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                if (MegaArray[j + 1] > MegaArray[j]) {
                    var t = MegaArray[j];
                    MegaArray[j] = MegaArray[j + 1];
                    MegaArray[j + 1] = t;
                }
            }
        }
        ;
        console.timeEnd('Sorting from top to bottom');
    }

    function sortFromBotToTop(MegaArray) {
        console.time('Sorting from bottom to top')
        var n = MegaArray.length;
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < n - 1 - i; j++) {
                if (MegaArray[j + 1] < MegaArray[j]) {
                    var t = MegaArray[j + 1];
                    MegaArray[j + 1] = MegaArray[j];
                    MegaArray[j] = t;
                }
            }
        }
        console.timeEnd('Sorting from bottom to top')
    }

    function sumElementsOfArray(MegaArray) {
        console.time('Performing summation Time')
        var resultSum = MegaArray.reduce(function (sum, current) {
            return sum + current;
        }, 0);
        console.timeEnd('Performing summation Time')
    }
};

function Task2(){
    var matrixC = [[1,3,4,2],[4,5,8,3],[2,3,6,7]];
    var matrixA = [60,80,100];
    var matrixB = [40,60,80,60];

    for( var i=0; i<3; ++i){
        for (var k=0; k<4; ++k){

            if(matrixB[k] ==0){         //inspection
                matrixC[i][k] =0;
                continue};

            var min = Math.min(matrixA[i], matrixB[k]); //search min value
            matrixC[i][k] = min;                        //assigning a value to cell matrixC
            matrixA[i] -= min;
            matrixB[k] -= min;

            if(matrixA[i] ==0){         //inspection
                for(var j = k+1; j<matrixB.length ; ++j){
                    k++;
                    matrixC[i][k] = 0;
                }
                break;
            } ;
        }
    }

    console.table(matrixC);
};