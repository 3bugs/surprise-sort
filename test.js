function sort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] > a[j]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
}

const myArr = [5, 3, 7, 4, 2, 0, 8, 6, 9, 1];
console.log(`Before soring: ${myArr}`);
sort(myArr);
console.log(`After soring: ${myArr}`);
