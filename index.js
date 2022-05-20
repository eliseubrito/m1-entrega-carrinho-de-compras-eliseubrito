const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 4,
        name: "Água de Coco",
        price: 8.99
    },
    {
        id: 5,
        name: "Mamão",
        price: 9.98
    }
]

function listarItens(productsList){
    const ul = document.getElementById('productsList')

    for(let i = 0; i < productsList.length; i++){
        const produto = productsList[i]

        const tagLi = document.createElement('li')
        const productDetails = document.createElement('section')
        const productName = document.createElement('p')
        const price = document.createElement('p')

        tagLi.classList.add('productItem')
        productDetails.classList.add('productDetails')
        productName.classList.add('name')
        price.classList.add('valor')

        productName.innerText = produto.name
        price.innerText = produto.price
        
        productDetails.appendChild(productName)
        productDetails.appendChild(price)
        tagLi.appendChild(productDetails)
        ul.appendChild(tagLi)
    }
    const total = document.getElementById('valorTotal')
    total.innerText = `R$ ${somarItens(productsList).toFixed(2)}`
}
listarItens(productsCart)


function somarItens (arraySoma){
    let total = 0

    for(let i = 0; i < arraySoma.length; i++){
        let produto = arraySoma[i]
        total += produto.price
    }
    return total
}
somarItens(productsCart)


