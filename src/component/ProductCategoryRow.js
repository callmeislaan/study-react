function ProdcutCategoryRow(props) {

    let category = props.category;

    return (
        <>
        <tr>
            <th>{category}</th>
        </tr>
        </>
    );
}

export default ProdcutCategoryRow;