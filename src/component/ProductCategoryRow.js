function ProductCategoryRow(props) {
    let category = props.category;
    return (
        <>
            <tr>
                <i>{category}</i>
            </tr>
        </>
    );
}

export default ProductCategoryRow;