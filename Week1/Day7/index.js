//----------Ex1
const names = ['a','b','c']
const ages = [10,20,30]

for(let i=0;i<ages.length;i++)
{
    console.log(names[i], ages[i])
}
//----------Ex2
const numbers = [10,2,3,67,12]
let sum = 0

for (let index in numbers){
    sum += numbers[index]
}

console.log(sum)
//-----------Ex3
let avg = sum/numbers.length
console.log(avg)
//-----------Ex4
const nums = []
for(let j=0;j<100;j++){
    nums.push(j+1)
}
console.log(nums)
//-----------Ex5
for(let odd in nums){
    if(odd%2==0)
    console.log(nums[odd])
}
//-----------Ex6
let nums2 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for (let found in nums2){
    if(nums2[found]==709)
    console.log(found)
}
//-----------Ex7
const names2 = ["Ashley", "Donovan", "Lucas"]
const ages2 = [23, 47, 18]
const people = []

for (let k=0;k<names2.length;k++)
{
    people.push({name:names2[k],age:ages2[k]})
}
console.log(people)
//-----------Ex8
for (let person in people){
    console.log(people[person]['name'],"is",people[person]['age'],"years old.")
}
//-----------Ex9
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for (let post in posts){
    if(posts[post]['id']==2)
    posts.splice(post,post)
}
console.log(posts)
//----------Ex10
const posts2 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for(let ppl in posts2){
      if(posts2[ppl]['id']==2){
          posts2[ppl]['comments'].splice(2,1)
      }
  } 
  console.log(posts2) 