class QuickSort {
    sort(array, low, high) {
        if (low < high) {
            let partition_point = this.partition(array, low, high);
            this.sort(array, low, partition_point - 1);
            this.sort(array, partition_point + 1, high);
        }
    }

    partition(array, low, high) {
        let pivot = array[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                this.swap(array, i, j);
            }
        }
        this.swap(array, i+1, high);
        return i + 1;
    }

    swap(array, index1, index2){
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }
}

const quicksort = new QuickSort();
var testArr = [93, 48, 348, 345, 12, 49, 45, 294, 2334];
quicksort.sort(testArr, 0, testArr.length - 1);
console.log(testArr);