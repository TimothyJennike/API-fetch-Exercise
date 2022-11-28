fetch("../Data/data.json")
.then(response=> {
    return response.json();
})
.then(display=> {
    console.table(display.laptops);
})