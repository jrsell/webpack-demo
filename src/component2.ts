import printMe from './print';
function component() {
    const element = document.createElement('div');    
    element.innerHTML = `    
    <div><p>Hello This is a component!</p></div>
    `;
    const myBut = document.createElement('button');
    myBut.innerText = "Click me";
    myBut.onclick = printMe;
    element.appendChild(myBut);

    return element;
}
document.body.appendChild(component());
