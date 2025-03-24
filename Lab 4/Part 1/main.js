
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText ="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. The person reading this (yea you...) saw the whole thing, but was not surprised (because you've prob read this multiple different times) — :insertx: weighs 300 thousand pounds, and it was a hot day.";
const insertX = ["Willy the Silly Goblin","Big Daddy","LeBron James"];
const insertY= ["The Backyardigans","Disneyland","the White House"];
const insertZ= ["spontaneously combusted into hot flames that can kill you just by looking","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory= newStory.replaceAll(":insertx:",xItem)
.replace(":inserty:",yItem)
.replace(":insertz",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300.0 / 14) + " stone";
    const temperature =  Math.round((94-32)*(5.0 / 9)) + " centigrade";
newStory = newStory.replaceALL('94 fahrenheit',temperature);
newStory = newStory.replaceALL('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
