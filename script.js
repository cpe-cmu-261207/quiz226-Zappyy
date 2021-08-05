const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
function search()
{
  let textTosearch = document.getElementById
  ("text to search").value;
  let paragraph = document.getElementById
  ("paragraph");
  textTosearch = textTosearch.replace(/[.*+?^%${}()| [\]\\]/g,"//$&");

  let pattern = new RegExp(`${textTosearch}`,"gi");

  paragraph.innerHTML =paragraph.textContent.
  replace(pattern, match => `<mark>${match}</mark>`)

  
}
btn_toggle.onclick = () => {
  // your code here
}

// more codes for Search and Reset buttons here
