function ProductRow(props) {
    let product = props.product;

    let name = product.name;
    let price = product.price;
    let stocked = product.stocked;

    name = stocked ? name : <span style={{color: "red"}}>{name}</span>;
    price = stocked ? price : <span style={{color: "red"}}>{price}</span>;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        </>
    );
}
export default ProductRow;