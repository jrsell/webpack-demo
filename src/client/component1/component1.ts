import printMe from '../utils/printMe';
import { MySubComponent }  from './subComponent';

export class MyComponent {
    _rootNode: HTMLElement;
    _subComponent: MySubComponent;
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
        this._subComponent = new MySubComponent(this._rootNode);  

    }
}

new MyComponent(document.body);
