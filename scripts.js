/*
Here lies the click event for all nav bar links
*/

let anchorLinks = document.querySelectorAll('a[href^="#"]');
console.log(anchorLinks);

for (let item of anchorLinks) {
  console.log(item);
  item.addEventListener('click', (e)=> {
    console.log("this is what e is: ", e); 
    console.log('this is what i clicked', item);
  })
}