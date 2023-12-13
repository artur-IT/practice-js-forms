const listAllFiles = document.querySelector(".images-list");
const input = document.querySelector("input");
const li = document.querySelector("li");

handleFiles = () => {
  for (const file of input.files) {
    const newImg = li.cloneNode(true);
    listAllFiles.appendChild(newImg);
    newImg.style.display = "inline-block";
    newImg.children[0].textContent = file.name;
    newImg.children[1].src = file.name;
    newImg.children[2].textContent = `${(file.size / 1000000).toFixed(2)} MB`;
  }
};

input.addEventListener("change", handleFiles);
