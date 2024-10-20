const koiran_kuva_linkki = "https://dog.ceo/api/breeds/image/random";
const kuva = document.getElementById("koire");

fetch(koiran_kuva_linkki)
    .then(response => response.json())
    .then(data => {
        kuva.src = data.message;

        console.log(data.status);
    

})
.catch(error => console.error('Error loading doge:', error));