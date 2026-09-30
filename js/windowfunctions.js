function exploreBroswerObjects(){
    console.log(window);
    console.log(document);
}

function getLocation(){
    console.log(window.location);

    const host = window.location.host;
    const protocal = window.location.protocol;

    console.log(`Host is: ${host} the protocal ${protocal}`);
}

function printPage(){
    window.print();
}

function getWindowSize(){
    console.log(`My window size is ${window.innerHeight}X${window.innerWidth}`);
}

function registerResizeListener(){
    window.addEventListener('resize', getWindowSize);
}