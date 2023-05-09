
let dataProducts = JSON.parse(localStorage.getItem("product"));
function renderProduct(data) {
    const elementProduct = document.querySelector('tbody')
    let contentProduct = ""
    data.forEach((product, index) =>
        contentProduct += `<tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td><img src="${product.avt_image}" alt="" width="20%"></td>
        <td>${product.price}<spun>đ</spun></td>
        <td>
        <button onclick="handleEdit('${product.id}')" id="btn-Edit">Edit</button>
        <button onclick="handleDelete('${product.id}')" id="btn-Delete">Delete</button>
        </td>
        </tr>`

    )
    elementProduct.innerHTML = contentProduct;
}
renderProduct(dataProducts);

// 
function handleEdit(id) {
    let objectProduct = JSON.parse(localStorage.getItem("product"));
    const formEdit = document.getElementById("formEdit");
    if (formEdit.style.display === "none" || !formEdit.style.display) {
        formEdit.style.display = "block";

    } else {
        formEdit.style.display = "none";
    };
    showData(id)
}

function handleUpdate(id) {
    let objectProduct = JSON.parse(localStorage.getItem("product"));
    const formUpdate = document.querySelector("#formEdit");
    if (formUpdate.style.display === "block" || !formUpdate.style.display) {
        formUpdate.style.display = "none";

    } else {
        formUpdate.style.display = "block";
    };

    const idEdit = document.querySelector("#idEdit");
    const imageEdit = document.querySelector("#imageEdit");
    const nameEdit = document.querySelector("#nameEdit");
    const priceEdit = document.querySelector("#priceEdit");

    Update = {
        id: Number(idEdit.value),
        avt_image: `./images_product/${imageEdit.value.slice(12)}`,
        name: nameEdit.value,
        classify: classifyEdit.value,
        price: priceEdit.value,
    };
    console.log(111111,imageEdit.value.slice(12));
    objectProduct.forEach((object, index) => {
        if (object.id == Update.id) {
            objectProduct.splice(index, 1, Update);
        }
    })
    console.log(objectProduct);
    localStorage.setItem("product", JSON.stringify(objectProduct));
    renderProduct(objectProduct);
}


// Sửa sản phẩm
function handleDelete(id) {
    const productDB = JSON.parse(localStorage.getItem("product"));
    // console.log(productDB);
    // console.log(1111112,typeof dataProducts);
    productDB.forEach((product, index) => {
        if (product.id == id) {
            productDB.splice(index, 1)
        }
    });

    localStorage.setItem("product", JSON.stringify(productDB));
    renderProduct(productDB);
}
// renderProduct();
// search 

function handleSearch(value) {
    const dataProducts = JSON.parse(localStorage.getItem("product"));
    console.log(value);
    const search = dataProducts.filter((item, index) =>

        item.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(search);


    renderProduct(search)
}

function showData(id) {
    const productDB = JSON.parse(localStorage.getItem("product"))

    let products = {}
    productDB.forEach((item) => {
        console.log(item);
        if (item.id == id) {
            products = item
            console.log(11111, products);
        }
    })
    const idElement = document.querySelector('#idEdit');
    const nameElement = document.querySelector('#nameEdit');
    const priceElement = document.querySelector('#priceEdit');

    idElement.value = products.id;
    nameElement.value = products.name;
    priceElement.value = products.price;
}



