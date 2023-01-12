function SearchBar(props) {

    const onInStockHandler = (e) => props.inStock = e.target.checked;
    console.log(props.inStock);

    return (
        <>
            <form>
                <table>
                    <tr>
                        <input type="text" placeholder="Search..."/>
                    </tr>
                    <tr>
                        <input type="checkbox" onChange={onInStockHandler} /> Only show products in stock
                    </tr>
                </table>
            </form>
        </>
    );
}

export default SearchBar;