const btn = document.querySelector('#value');
btn.addEventListener('click', promptWindow)
let settingVariable = 16;
setting(settingVariable);

function promptWindow() {
  let entry = Number(prompt("How many rows/columns will you like?"));
  if (Number.isInteger(entry) && entry >=1 && entry<=100)  {
  console.log(entry);
  if (entry)
  setting(entry);
  percentage = (1 / entry);
  let root = document.querySelector(':root');
  root.style.setProperty(`--inputValue`, `${entry}`);
  root.style.setProperty(`--percentageValue`, `${percentage}`);
}
else { promptWindow();}
}

function setting(row) {
  settingVal = row;
  squared = settingVal*settingVal;
  const result = document.querySelector(".paint");
  document.querySelector(".paint").innerHTML = '';
  let docFrag = document.createDocumentFragment();
  for (let i=0; i<=squared-1; i++ )
  {
    let box = document.createElement('div');
    box.setAttribute("class", "boxClass");
    box.setAttribute("id",`boxid_${i}`)
    docFrag.appendChild(box);
    console.log(`Appending child. ` + box.className + ' and ' + box.id);
  }
  result.appendChild(docFrag);
  const boxes = Array.from(document.querySelectorAll('.boxClass'));
  boxes.forEach(boxClass => boxClass.addEventListener('mouseover',colorChange)); 
  boxes.forEach(boxClass => boxClass.addEventListener('mousedown',colorDownChange)); 
};

function colorChange(event){
  event.target.style.backgroundColor = "red";
}

function colorDownChange(event){
  event.target.style.backgroundColor = "purple";
}


