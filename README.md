# Proyecto Final - Banco del Sud

El proyecto consta de un banco online en el que se permite realizar pedido de artículos mediante el canje de puntos.

## ItemListContainer

El componente **ItemListContainer** consta de:
```
const { category } = useParams();
const [items, setItems] = useState([]);
const [itemsCategoria, setItemsCategoria] = useState([]);
```
en donde "category" se utiliza para realizar un filtrado de los artículos mostrados, "items" para el guardado del primer fetch() del componente, e "itemsCategoria" para guardar los articulos filtrados.
Cada vez que se realiza un cambio de "category", mediante un useEffect( ) se modifica "itemsCategoria" para mostrar los nuevos artículos.

### ItemList

El componente **ItemList** recibe como parametro un array de productos y los mapea en diferentes Item.

### Item

Cada Item recibe un objeto que, mediante sus propiedades, muestra su imagen, nombre y valor en puntos. También contiene un Link que modifica la ruta de la página para ver los detalles del Item, enviando también su número de ID.

## ItemDetailContainer

El componente **ItemDetailContainer** consta de:
```
const {itemId} = useParams();
const [producto, setProducto] = useState({});
```
en donde "itemId" es la ID enviada desde el componente "Item" al precionar en el botón "Ver detalle". Se utiliza un useEffect( ) cada vez que el ID se modifica, se realiza un fetch al archivo .JSON y mediante el metodo find( ) se toma al item de dicha ID. Este item es enviado por parámetro al componente **ItemDetail**.

### ItemDetail

Obtiene los datos del item enviados por parámetro y los muestra en pantalla. Si es la primera vez que se ve el detalle del producto, se muestra el componente **ItemCount** en donde se puede elegir que cantidad de productos añadir al carrito. Una vez añadidos, aparecerán dos opciones. Una para volver al catálogo, y otra para volver al carrito.

## Cart

El componente **Cart** utiliza el context para saber cuantos productos se encuentran en el carrito. Si este está vacío, muestra un error. Por el contrario, carga el componente **ItemCartList** que realiza un map con todos los productos dentro del carrito.

### ItemCart

Cada **ItemCart** dentro de **ItemCartList** contiene un boton para eliminar. Este usa el context para que, mediante un método y su id, sea eliminado del array del carrito.

## CartOptions

En **CartOptions** se encuentran dos link. El primero es para regresar al catálogo. El segundo realiza la orden del pedido mediante el método GenerateOrder(). Este toma los datos del context al iniciar sesión, la fecha, una versión simplificada del array de productos y el costo total. Se conecta con Firebase, guarda la nueva orden y muestra mediante un Alert la id del pedido. También se utiliza el método DescontarStock() para reducir el stock en la base de datos. Luego de todo esto, el carrito es borrado.
