/*
 * @Descripttion: spider
 * @version: 1.0.0
 * @Author: Lee Han
 * @Date: 2022-12-16 20:35:10
 * @LastEditors: Lee Han
 * @LastEditTime: 2022-12-18 16:57:58
 */
export const setUpATwoDimensionalArray = (arr,subGroupLength) => {
  let index = 0;
      let newArray = [];
      while (index < arr.length) {
        newArray.push(arr.slice(index, (index += subGroupLength)));
      }
      return newArray;
}