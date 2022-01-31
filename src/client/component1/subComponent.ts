export class MySubComponent {
    _rootNode: HTMLElement;
    constructor(rootNode: HTMLElement){
        this._rootNode = rootNode;
        const element = document.createElement('div');    
        element.innerHTML = `    
        <div><p>Hello This is a sub component!</p></div>
        `;
        const myBut = document.createElement('button');
        myBut.innerText = "Click menow";
        myBut.onclick = () => { alert('hello'); }
        element.appendChild(myBut);
    
        this._rootNode.appendChild(element);    
    }
}

