/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   let output = []
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//           if (i !== j) {
//               let sum = nums[i] + nums[j]
//               if (sum === target) {
//                   output.push(i)
//                   output.push(j)
//               }
//           }
//       }
//   }
// };

// function twoSum(nums, target) {
//   let numObj = {};
//     for (let i = 0; i < nums.length; i++) {
//       let complement = target - nums[i];
//       console.log('i: ', i,  numObj)
//       if (numObj[complement] !== undefined) {
//         console.log(":: ", numObj)
//         return [numObj[complement], i];
//       }
//       numObj[nums[i]] = i;
//     }
//   }

// var twoSum = function(nums, target) {
//   let numObj = {}
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i]
//     if (numObj[complement] !== undefined) {
//       return [numObj[complement], i]
//     }
//     numObj[nums[i]] = i
//   }
// }

// console.log(twoSum([2,11,15, 7], 9))

console.log('William')

// Document Object Model

// let, var, const

const projects = document.querySelectorAll('.project-tile')
projects[0].id = 'list-item'
console.log(projects[0])
