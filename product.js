// window.printAvenas = () => {
//   firebase.database().ref('categorias/Avenas')
//     .on('value', (categoriasRef) => {
//       const listAvena = categoriasRef.val();
//       const showProducts = document.getElementById('container-products');
//       showProducts.innerHTML = '';
//       // console.log(listAvena);
//       Object.keys(listAvena).forEach((id) => {
//         const itemAvena = listAvena[id];
//         console.log(itemAvena);
//         showProducts.innerHTML += `
//       <div class="row" id=${id}>
//       <div class="col s12 l4">
//       <div class="card">
//         <div class="card-image">
//           <img src="${itemAvena.imagen}">
//         </div>
//         <div class="card-content">
//           <a class="modal-trigger" href="#modal1">
//             <span class="card-title center-align">${itemAvena.producto}</span>
//           </a>
//           <p class="center-align">${itemAvena.marca}</p>
//           <br>
//           <p class="center-align">Precio: S/. ${itemAvena.precio}</p>
//         </div>

//         <div class="card-action center-align">
//           <input class="left-align" type="number" min="0" max="${itemAvena.stock}" id="cant">
//           <a class="right-align" href="#">
//             <i class="material-icons black-text">shopping_cart</i>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>

//   <!-- Modal Structure -->
//   <div id="modal1" class="modal">
//     <div class="modal-content center-align">
//       <h5>${itemAvena.producto}</h5>
//     </div>
//     <div class="row details">
//       <div class="col s12 l6 center-align">
//         <img src="${itemAvena.imagen}">
//       </div>
//       <div class="col s12 l6 center-align">
//         <p class="description">${itemAvena.descripcion}</p>
//         <div class="operation">
//           <input class="left-align" type="number" min="0" id="cantModal">
//           <a class="right-align" href="#">
//             <i class="material-icons black-text">shopping_cart</i>
//           </a>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-green btn-flat">Regresar</a>
//     </div>
//   </div>
//       `
//       })
//     })
// }



window.printProducts = () => {
  firebase.database().ref('categorias/')
    .on('value', (categoriasRef) => {
      const listCategorias = categoriasRef.val();
      const showProducts = document.getElementById('container-products');
      showProducts.innerHTML = '';
      const arrayCat = Object.keys(listCategorias)      
      arrayCat.forEach((id) => {
        const productsTotal = Object.keys(listCategorias[id]);
        productsTotal.forEach(elem => {
        const itemProducts = listCategorias[id][elem];
        showProducts.innerHTML += `
      <div class="row" id=${id}>
      <div class="col s12 l4">
      <div class="card">
        <div class="card-image">
          <img src="${itemProducts.imagen}">
        </div>
        <div class="card-content">
          <a class="modal-trigger" href="#modal1">
            <span class="card-title center-align">${itemProducts.producto}</span>
          </a>
          <p class="center-align">${itemProducts.marca}</p>
          <br>
          <p class="center-align">Precio: S/. ${itemProducts.precio}</p>
        </div>

        <div class="card-action center-align">
          <input class="left-align" type="number" min="0" max="${itemProducts.stock}" id="cant">
          <a class="right-align" href="#">
            <i class="material-icons black-text">shopping_cart</i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content center-align">
      <h5>${itemProducts.producto}</h5>
    </div>
    <div class="row details">
      <div class="col s12 l6 center-align">
        <img src="${itemProducts.imagen}">
      </div>
      <div class="col s12 l6 center-align">
        <p class="description">${itemProducts.descripcion}</p>
        <div class="operation">
          <input class="left-align" type="number" min="0" id="cantModal">
          <a class="right-align" href="#">
            <i class="material-icons black-text">shopping_cart</i>
          </a>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Regresar</a>
    </div>
  </div>
      `          
        })
      })
     })
}


const tableProducts = (data) => {
  
}



// printAvenas();
printProducts();

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

const savedata = () => {
  return firebase.database().ref('categorias/Sémolas/')
  .push({
    producto: "SEMOLA VITTORIO BOB.200G 20BOL",
    marca: "DON VITTORIO",
    unidad: "BOL",
    stock: "100",
    precio: "283",
    descripcion: "100% hecha a base de trigo seleccionado.",
    imagen: "https://wongfood.vteximg.com.br/arquivos/ids/162548-750-750/Semola-Don-Vittorio-Bolsa-200-g-1-9098.jpg",
  });
}

savedata();

