var todolist=[];
var vendidos=[];
var stockcero=[];

function agregar(codigo,descripcion,tipo,preciocompra,precioventa,stock){
    var producto={
        codigo:codigo,
        descripcion:descripcion,
        tipo:tipo,
        preciocompra:preciocompra,
        precioventa:precioventa,
        stock:stock
    }
    todolist.push(producto);
    return 0;
}
function modificar(codigo,stock){
    for(var i in todolist){
        if(todolist[i].codigo=codigo){
            todolist[i].stock=stock;
            break;
        }    
    }
    return 0;
}
function vender(codigo){
    for(var i in todolist){
        if(todolist[i].codigo=codigo){
            todolist[i].stock-=1;
            vendidos.push(todolist[i]);
            break;
        }    
    }
    return 0;
}
function promedio(){
    let suma=0;
    for(let vendido of vendidos){
        suma+=vendido.precioventa;   
    }
    console.log("promedio de ventas: "+suma/vendidos.length);
    return 0;
}
function stockx(){
    for(let producto of todolist){
        if(producto.stock==0){
            stockcero.push(producto);
        }
    }
    console.log(stockcero);
    return 0;
}