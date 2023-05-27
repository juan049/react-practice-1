import './App.css';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function FilterableProductTable({ products }){
  return <div className="bordered m-10 p-10">
    <SearchBar />
    <div className='bordered'>
    <ProductTable products={products}/>
    </div>
  </div>;
}

function SearchBar(){
 return <div className='bordered p-10 mb-10'> 
    <input type="text" placeholder='Buscar'/>
    <div>
      <input type="checkbox"/> 
      <label>Mostrar solo productos en stock</label>
    </div>
  </div>  
}

function ProductTable({products}) {

  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if(product.category !== lastCategory){
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category}/>
      );
    }

    rows.push(
      <ProductRow 
        product={product}
        key={product.name}/>
    );
    lastCategory = product.category;
  });

  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
}

function ProductCategoryRow({category}) {
  return <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
}

function ProductRow({product}) {
  const name = product.stocked ? product.name:
    <span className='text-red'>
      product.name
    </span>

  return <tr>
    <td>{name}</td>
    <td>{product.price}</td>
  </tr>
}

/* 

FilterableProductTable (gris) contiene toda la aplicación.
SearchBar (azul) recibe la entrada del usuario.
ProductTable (lavanda) muestra y filtra la lista de acuerdo a la entrada del usuario.
ProductCategoryRow (verde) muestra un encabezado para cada categoría.
ProductRow (amarillo) muestra una fila para cada producto.

*/

export default function App() {
  return <FilterableProductTable products={PRODUCTS}/>
}