// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
//elements
    const headerDiv = document.createElement("div"),
        sDate = document.createElement("span"),
        title = document.createElement("h1"),
        sTemp = document.createElement("span");
//classes
    headerDiv.classList.add("header");
    sDate.classList.add("date");
    sTemp.classList.add("temp");
//content
    sDate.textContent = "MARCH 28, 2019";
    title.textContent = "Lambda Times";
    sTemp.textContent = "98°";
//ordering
    headerDiv.append(sDate);
    headerDiv.append(title);
    headerDiv.append(sTemp);
//return
    return headerDiv;
}
    
const headerCont = document.querySelector('.header-container')
    
headerCont.append(Header())
    