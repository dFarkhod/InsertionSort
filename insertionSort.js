function insertionSort(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        let currentElement = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currentElement){
            array[j+1] = array[j];
            j--;
        }
        array[j + 1] = currentElement;
    }
    return array;
}

const array = [2,8,1,12,3,11,10,6,4,9,5,7];
console.log('tartiblanmagan qator:\n');
console.log(array);
insertionSort(array);
console.log('tartiblangan qator:\n');
console.log(array);
