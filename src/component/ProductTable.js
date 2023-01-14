import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {

    let rows = [];
    let lastCategory = null;
    let onlyInStock = props.onlyInStock;
    let searchText = props.searchText;

    let products = props.products;

    products.forEach(product => {
        if (onlyInStock && !product.stocked) {
            return;
        }
        if (product.name.indexOf(searchText) === -1) {
            return;
        }
        let category = product.category;
        if (lastCategory == null || lastCategory !== category) {
            rows.push(<ProductCategoryRow key={category} category={category}/>);
            lastCategory = category;
        }
        rows.push(<ProductRow key={product.name} product={product}/>);
    });
    
    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    );
}

export default ProductTable;