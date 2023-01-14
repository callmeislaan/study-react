function ProductRow(props) {
    let name = props.product.name;
    let price = props.product.price;
    let inStock = props.product.stocked;

    const handlerView = (value) => inStock ? value : <span style={{color: 'red'}}>{value}</span>;

    return (
        <>
            <tr>
                <td>{handlerView(name)}</td>
                <td>{handlerView(price)}</td>
            </tr>
        </>
    );
}

export default ProductRow;