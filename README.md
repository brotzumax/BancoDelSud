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

Obtiene los datos del item enviados por parámetro y los muestra en pantalla.