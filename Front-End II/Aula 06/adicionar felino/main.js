<<<<<<< HEAD
let posts [{
    name: 'O guepardo',
    description: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único 
    representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais
     rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
    image: './imagens/chita.jpg'
}
]


for(let post of posts) {


contentReference.innerHTML += `

    <div class="item">
        <img src="${post.image}">
        <h2>${post.name}</h2>
        <p>${post.description}</p>
    </div>

`

=======
let posts [{
    name: 'O guepardo',
    description: `O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único 
    representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais
     rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.`,
    image: './imagens/chita.jpg'
}
]


for(let post of posts) {


contentReference.innerHTML += `

    <div class="item">
        <img src="${post.image}">
        <h2>${post.name}</h2>
        <p>${post.description}</p>
    </div>

`

>>>>>>> 9172f26830b2dc75aee888a06b918ad41cba1418
}