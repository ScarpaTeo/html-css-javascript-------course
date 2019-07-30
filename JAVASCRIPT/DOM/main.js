var cajas=document.getElementsByTagName('div');
//var cajas2=document.getElementsByClassName('caja');

var cajas3=document.getElementById('primera');

//cajas[0].textContent='hola mundo';
//cajas[0].innerHTML='<u>hola mundo</u>';

//------------creando nodos

//1ero se crea el elemento
var n=document.createElement('div');
//2do se crea un nodo texto
var t=document.createTextNode('hola mundo');
//3ero se añade el nodo al elemento
n.appendChild(t);
//4to se agregar atributos a la caja
//n.setAttribute('class','caja naranja');

//5to se agrega el elemento al documento
var contenedor=document.getElementById('contenedor');
contenedor.appendChild(n);

//-------modificando la clase o ID de un elemento 
n.id='dato';
n.className='caja naranja';

//como sabe el elemento padre 
var padre=cajas[0].parentNode;

//------------insertar 
//padre.insertBefore(n,cajas[0]);

//-------------reemplazar
padre.replaceChild(n,cajas[2]);
//-------------remover nodos
padre.removeChild(cajas[3]);












