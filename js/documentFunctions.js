// This just reads the html
function getTitle(){
    console.log(document.title);
}

function getDocumentElement(){
    console.log(document.documentElement);
}

function getChildern(){
    console.log(document.documentElement.children);
}

function changeID(){
    const newIntro = prompt("What is the new intro")
    console.log(newIntro);
    document.getElementById("intro").innerHTML = newIntro;
}

function getTDs(){
    const tdElement = document.getElementsByTagName("td");
    console.log(tdElement);
    return tdElement;
}

function changeNumber(){
    const amountOfElements = getTDs;
    const numMap = new Map();
    numMap.set("one", 1);
    numMap.set("two", 2);
    numMap.set("three", 3);
    numMap.set("four", 4);

    console.log(amountOfElements);

    for (const amountOfElement of amountOfElements){
        const oldValue = amountOfElement.innerHTML;
        const newValue = numMap.get(oldValue);
        amountOfElement.innerHTML = newValue;
    }
}

function changingToDark(){
    const classToChange = prompt("Which class should be in dark mode?");
    console.log(classToChange);

    const elementToDark = document.getElementsByClassName(classToChange);
    console.log(elementToDark);

    for(const element of elementToDark){
        element.style.backgroundColor = "black";
        element.style.color = "white";
    }
}

function addParagraph(){
    const paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = "A new paragraph";
    document.body.append(paragraphElement);
}