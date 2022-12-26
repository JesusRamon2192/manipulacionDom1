/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)-----------')

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
    }).format(price)
    return newPrice;
};

const functTest = (e) => {
    if (e.target.nodeName === "H2"){
    console.log(`Este es un aguacate de tipo: ${e.target.outerText}`)
    }
}
//Internacionalizacion
//1 - Formato fechas
//2 - formato monedas

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
        imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

        //crear titulo
        const titulo = document.createElement("h2");
        titulo.textContent = item.name;
        titulo.className = "text-lg";
        //titulo.addEventListener("click", functTest);

        //crear precio
        const price = document.createElement("div");
        price.textContent = formatPrice(item.price);
        price.className = "text-gray-600"

        //Wrap price and title
        const priceAndTitle = document.createElement("div");
        priceAndTitle.className = "text-center md:text-left";
        priceAndTitle.appendChild(titulo);
        priceAndTitle.appendChild(price);
        
        const container = document.createElement("div");
        container.className = "md:flex border-4 border-double        border-yellow-500	bg-green-500 rounded-lg p-6 hover:bg-gray-300";
        container.append(imagen, priceAndTitle);

        todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
    appNode.className = "mt-10 grid grid-cols-2 gap-2"
    appNode.addEventListener("click", functTest);
});
