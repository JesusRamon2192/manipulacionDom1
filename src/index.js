/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)-----------')

const baseUrl = "https://platzi-avo.vercel.app";

//Web API
//Conectarnos al servidor
window.fetch(`${baseUrl}/api/avo`)
//Procesar la respuesta y convertirla en JSON
.then(respuesta => respuesta.json())
//JSON -> Data -> Renderizar info en browser
.then(responseJSON => {
    const todosLosItems = [];
    responseJSON.data.forEach(item => {
        //crear imagen
        const imagen = document.createElement("img");
        imagen.src = `${baseUrl}${item.image}`;
        //crear titulo
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        //crear precio
        const price = document.createElement("div");
        price.textContent = item.price;
        
        const container = document.createElement("div");
        container.append(imagen, titulo, price);

        todosLosItems.push(container);
        document.body.appendChild(container);
    });
    document.body.append(...todosLosItems);
});
