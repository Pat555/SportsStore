var setView = function (view) {
    adminModel.currentView(view);
}

var setListView = function (mode) {
    console.log("Mode: " + mode);
    adminModel.listView(mode);
}

var authenticateUser = function () {
    authenticate(function () {
        setView("productList");
        getProducts();
        getOrders();
    });
}

var createProduct = function () {
    saveProduct(adminModel.newProduct, function () {
        setListView("products");
    })
}

var removeProduct = function (product) {
    deleteProduct(product.Id);
}

var removeOrder = function (order) {
    deleteOrder(order.Id);
}