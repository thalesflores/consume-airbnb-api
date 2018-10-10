window.onload = () => {
  const URL_TO_FETCH = "http://airbnb.douglasmaia.com/api/properties";
  fetch(URL_TO_FETCH, {
      method: "get"
    })
    .then(response => response.json())
    .then(result => {
      populate_items(result);
    })
    // .catch(response => {
    //   console.error(`Somenthing went wrong: ${response}`)
    // })
};


function populate_items(items) {
  items.forEach(item => {    
    let {
      name,
      id,
      photo,
      price,
      city,
      state
    } = item;
  
    let itemInfos = document.createElement("div");
    itemInfos.className += "infos";

    let itemDiv = document.createElement("div");
    itemDiv.className += `item_${id} item`;

    let itemName = document.createElement("name");
    itemName.className += `name_${id} name`;

    let itemImage = document.createElement("img");
    itemImage.className += `image_${id} image`;

    let itemPrice = document.createElement("p");
    itemPrice.className += `price_${id} price`;

    let itemAddress = document.createElement("p");
    itemAddress.className += `address_${id} address`;

    let itemBtn = document.createElement("div");
    itemBtn.className = "btn";

    itemImage.src = photo;
    itemName.appendChild(document.createTextNode(`${name}`));
    itemPrice.appendChild(document.createTextNode(`R$ ${price}`));
    itemAddress.appendChild(document.createTextNode(`${city} - ${state}`));
    itemBtn.appendChild(document.createTextNode("Reservar"));

    itemInfos.append(itemName, itemPrice, itemAddress)
    itemDiv.append(itemImage, itemInfos);

    return document.getElementById("item_list").appendChild(itemDiv);
  });

};

function generateImageDiv(image){

};