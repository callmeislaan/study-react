import ProdcutCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable(props) {
    let products = props.products;

    let rows = [];

    products.sort((p1, p2) => p1.category > p2.category);

    let lastCategory = null;

    products.forEach(product => {
        let category = product.category;
        if (lastCategory === null || category !== lastCategory) {
            rows.push(<ProdcutCategoryRow key={category} category={category}/>);
            lastCategory = category;
        }
        rows.push(<ProductRow key={product.name} product={product} />);
    });

    return (
        <>
            <table border="1px">
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