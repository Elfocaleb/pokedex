const Searchform = () => {
    
    const searchbox = document.getElementById("search");
    const expandSearchbox = () => {
        console.log("Espandi searchbox")
        searchbox.classList.add("search-open");
    }
    
    
    return (
        <div id="search" >
            <button onClick={expandSearchbox}>S</button>
        </div>   
    );
}

export default Searchform;