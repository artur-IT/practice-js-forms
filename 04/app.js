document.addEventListener("DOMContentLoaded", init);

const inputColor = document.querySelector("input[type=color]");
const inputRange = document.querySelector("input[type=range]");
const boxElement = document.querySelector(".box");

//----------------
function init() {
  const boxElement = document.querySelector(".box");
  setBoxShadow(boxElement, "#000000", (opacity = 1));
}

function setBoxShadow(element, colorInHex, opacity = 1) {
  const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, "red")}, 
        ${getChannelColor(colorInHex, "green")}, 
        ${getChannelColor(colorInHex, "blue")}, 
        ${opacity}
    )`;

  return (element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`);
}

function getChannelColor(colorInHex, channelName) {
  let start;
  switch (channelName) {
    case "red":
      start = 1;
      break;
    case "green":
      start = 3;
      break;
    case "blue":
      start = 5;
      break;
  }

  const channelColorHex = colorInHex.substr(start, 2);
  const channelColorDec = parseInt(channelColorHex, 16);

  return channelColorDec;
}
//------------------------

inputRange.addEventListener("mousemove", (e) => {
  const range = e.target.value;
  setBoxShadow(boxElement, inputColor.value, range / 100);
});

inputColor.addEventListener("change", (e) => {
  const color = e.target.value;
  setBoxShadow(boxElement, color, inputRange.value / 100);
});
