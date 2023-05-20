class Products{
    constructor(idProducto, nombre, precio, imagen, idStatus, idCategoria){
        this.idProducto= idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.idCategoria = idCategoria;
        this.idStatus = idStatus;
    }
}

module.exports = Products;