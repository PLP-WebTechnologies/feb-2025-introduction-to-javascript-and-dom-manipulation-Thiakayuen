function changeText() {
    const text = document.getElementById("dynamic-text");
    text.textContent = "The text has been changed!";
  }
  
  function changeStyle() {
    const styledText = document.getElementById("style-text");
    styledText.style.color = styledText.style.color === "red" ? "black" : "red";
    styledText.style.fontWeight = "bold";
  }
  
  function toggleElement() {
    const container = document.getElementById("container");
    const existing = document.getElementById("new-element");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newElement = document.createElement("p");
      newElement.id = "new-element";
      newElement.textContent = "I was dynamically added!";
      newElement.style.color = "blue";
      container.appendChild(newElement);
    }
  }
  