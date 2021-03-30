// Fisher-Yates
/**
 * 其算法思想就是 从原始数组中随机抽取一个新的元素到新数组中

  1.从还没处理的数组（假如还剩n个）中，产生一个[0, n]之间的随机数 random
  2.从剩下的n个元素中把第 random 个元素取出到新数组中
  3.删除原数组第random个元素
  4.重复第 2 3 步直到所有元素取完
  5.最终返回一个新的打乱的数组
 */
// const arr = [...Array(10).keys()];
// console.log(arr);
// function shuffle(arr) {
//   let result = [];

//   while(arr.length) {
//     const random = Math.floor(Math.random() * arr.length);
//     result.push(arr[random]);
//     arr.splice(random, 1);
//   }

//   return result;
// }
// console.log(shuffle(arr));


// Knuth-Durstenfeld Shuffle
/**
 * Fisher-Yates 洗牌算法的一个变种是 Knuth Shuffle
  每次从未处理的数组中随机取一个元素，然后把该元素放到数组的尾部，
  即数组的尾部放的就是已经处理过的元素，这是一种原地打乱的算法，
  每个元素随机概率也相等，时间复杂度从 Fisher 算法的 O(n2)提升到了 O(n)

  1.选取数组(长度n)中最后一个元素(arr[length-1])，将其与n个元素中的任意一个交换，此时最后一个元素已经确定
  2.选取倒数第二个元素(arr[length-2])，将其与n-1个元素中的任意一个交换
  3.重复第 1 2 步，直到剩下1个元素为止
 */
// const arr2 = [...Array(10).keys()];
// console.log(arr2);
function shuffle(arr) {
  let len = arr.length;

  while(len) {
    const random = Math.floor(Math.random() * len);
    len--;
    // const lastNum = arr[len];
    // const randomNum = arr[random];

    // arr[len] = randomNum;
    // arr[random] = lastNum;

    // es6解构赋值 变量互换
    [arr[len], arr[random]] = [arr[random], arr[len]];
  }

  return arr;
}

export default shuffle;
