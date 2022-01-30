import printMe from './print';

export class MyComponent {
    _rootNode: HTMLElement;
    constructor(rootNode: HTMLElement){
        this._rootNode = rootNode;
        const element = document.createElement('div');    
        element.innerHTML = `    
        <div><p>Hello This is a component!</p></div>
        `;
        const myBut = document.createElement('button');
        myBut.innerText = "Click me";
        myBut.onclick = printMe;
        element.appendChild(myBut);
    
        this._rootNode.appendChild(element);    
    }
}

new MyComponent(document.body);
//document.body.appendChild(component());
