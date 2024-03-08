function customrender(createElement,container){
    const domElement=document.createElement(createElement.type)
    domElement.innerHTML=createElement.children
    for (const prop in createElement.props) {
        if(prop == 'children')continue;
        domElement.setAttribute(prop,createElement.props[prop])
        container.appendChild(domElement)
    }
}
const createElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"google.com"
    },
    children:"click here to visit the link custom"
}
const maincontainer=document.getElementById('root')
customrender(createElement,maincontainer)