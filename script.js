//your JS code here. If required.
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

let list = document.querySelector("#band");
const sortedArray = bands.sort((a,b)=>{
    const nameA = a.replace(/^(a |an |the |A |An |AN |The |THE)/i,"").trim().toLowerCase();
    const nameB = b.replace(/^(a |an |the |A |An |AN |The |THE)/i,"").trim().toLowerCase();

    return nameA.localeCompare(nameB);
});

sortedArray.forEach((item)=>{
    let li = document.createElement("li");
    li.innerHTML = item;
    list.append(li);
});