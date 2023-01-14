function SearchBar(props) {
    return (
        <>
            <form>
                <table>
                    <tr>
                        <input type="text" placeholder="Search..." onChange={(event) => props.handlerChangeSearch(event.target.value)} />
                    </tr>
                    <tr>
                        <input type="checkbox" onChange={(event) => props.handlerChangeOnlyInStock(event.target.checked)}/>Only show products in stock
                    </tr>
                </table>
            </form>
        </>
    );

}

export default SearchBar;