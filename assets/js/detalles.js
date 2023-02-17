const api = (`https://mindhub-xj03.onrender.com/api/amazing`)
fetch(api)
.then(response => response.json())
.then(data => {
const eventosD = data
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const cardD = eventosD.find(objet => objet._id == id)
const verTarjeta = document.getElementById("cardDescription")
verTarjeta.innerHTML = 
`<div class="card" style="width: 18rem">
<div class="card-descrip">
  <h5 class=" mb-2 text-muted">${cardD.producto}</h5>
  <p class="card-text">Categoria: ${cardD.categoria}</p>
  <p class="card-text">Disponibles: ${cardD.disponibles}</p>
  <p class="card-text">${cardD.descripcion}</p>
  <p class="card-text">price: $${cardD.precio}</p>
</div>
</div>
<div class="card" style="width: 25rem;" >
<img src="${cardD.imagen}" class="card-img-top" alt="special-events" style="width: 100%; height: 110%;">
</div>`
})