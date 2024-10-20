const content = [
    {
        header: "Kasvattamainen",
        text: `Kasvattamaan ryhyessäsi, kannattaa miettiä tavoitteesi tarkasi. Jos tavoittelet on parhaiden hevosten listalle, kannattaa valita helposti kehitettävä rotu, sekä pyrkiä kasvattamaan vain kyseisen rodun hevosia/poneja/aaseja. Jos pelailusi taas on vähemmän kilpailullista, rentoa pelailua, ei rodunvalitsemisessa tarvitse olla niin tarkka. `,
    },
    {
        header: "Hevosrodut",
        text: `Howrsessa on yhteensä 33 eri hevosrotua, joilla kaikilla vaihteleva määrä värityksiä. Pelissä suosituin hevosrotu on Akhaltekinhevonen, koska rodun taitoja on helpoin kehittää,joten ne pärjäävät hyvin kisoissa. Muita suosittuja rotuja ovat Paint-hevoset, Holsteininhevonen ja Englannintäysverinen hevonen. `,
    },
    {
        header: "Aasit ja Kylmäveriset hevoset",
        text: `Aaseja howrsessa on kahta eri rotua ja kylmäverisiä hevosia neljää eri rotua. Aaseja kasvattaessa kannattaa muistaa, että niitä on erittäin vaikea parantaa normaalin kasvatuksen tapaan, sillä niiden geneettinen potentiaali laskee aina huonompaan suuntaan, eli varsojen taidot eivät kehity kasvatuksessa, vaan itseasiassa katoavat. Tämän lisäksi aaseilla ja kylmäverisillä on vain kolme astutuskertaa, eli ne voivat Saada vain kolme varsaa. Astutuskertoja voi kuitenkin lisätä erikoisesineillä,sekä parantaa varsan synnynnäisiä tapoja esimerkiksi afroditen kyyneleillä.`,
    },
    {
        header: "Yksisarviset ja pegasukset",
        text: `Howrsesta löytyy myös yksisarvisia ja pegasuksia. Pegasuksen siivet voi laittaa mille tahansa hevoselle, ponille tai aasille erikoisesine meduusan veren avulla. Esine antaa siipien lisäksi hevoselle myös kestävyyttä +3, Nopeutta +4 ja kouluratsastusta +4. Huomioitavaa siivissä kuitenkin on se, että ne eivät periydy siivekkäiden hevosten varsoille. 
Toisin kuin pegasuksilla yksisarvisen sarvi on periytyvä ominaisuus. Jos siis haluat aloittaa kasvattamaan yksisarvisia, ei ole muita vaihtoehtoja, kuin ostaa sellainen mulita pelaajilta.  Yksisarvisten kasvatuksessa on myös omat haasteensa. Emän ja isän tulee olla saman rotuisia yksisarvisia, eli yksisarviset voivat olla vain puhdasrotuisia. Yksisarvisilla on rajattu määrä astutussessioita (päivässä 2), jolloin pystyt astuttamaan yhden minuutin ajan niin monta yksisarvista kuin ehdit. Yksisarvis varsan saaminen ei ole taattu juttu vaan sinulla on 1/5 mahdollisuus saada yksisarvisen varsa. Positiivista on kuitenkin se, jos olet saanut 5 varsaa, joista yksikään ei ole yksisarvinen, 6, on takuuvarmasti yksisarvinen. Sarvi antaa hevoselle/ponille/aasille kouluratsastukseen +15 bonusta.`,
    }
];

// Grab the container where content will be divided
const container = document.getElementById("content-container");

// Set the page height limit (matching CSS page height)
const pageHeight = 600; // in pixels

// Function to create a new page
function createPage(header, text) {
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("page");

    const pageContentDiv = document.createElement("div");
    pageContentDiv.classList.add("page-content");

    // Add a header
    const headerEl = document.createElement("h2");
    headerEl.textContent = header;

    // Add text content
    const textEl = document.createElement("p");
    textEl.textContent = text;

    pageContentDiv.appendChild(headerEl);
    pageContentDiv.appendChild(textEl);
    pageDiv.appendChild(pageContentDiv);

    return pageDiv;
}

// Function to auto-divide text into multiple pages based on height
function autoDivideContent(contentArray) {
    contentArray.forEach((section) => {
        const { header, text } = section;

        // Split the text into paragraphs if needed
        const paragraphs = text.split("\n");

        let currentPage = createPage(header, "");
        container.appendChild(currentPage);

        let currentPageHeight = currentPage.offsetHeight;

        paragraphs.forEach((para) => {
            const paraEl = document.createElement("p");
            paraEl.textContent = para;

            // Add the paragraph to the current page
            currentPage.querySelector(".page-content").appendChild(paraEl);

            // Check if adding this paragraph exceeds the page height
            currentPageHeight = currentPage.offsetHeight;

            if (currentPageHeight > pageHeight) {
                currentPage.querySelector(".page-content").removeChild(paraEl);

                // Start a new page
                currentPage = createPage(header, "");
                container.appendChild(currentPage);

                // Add the paragraph to the new page
                currentPage.querySelector(".page-content").appendChild(paraEl);   
            }
        });
    });
}

// Call the function to divide content automatically
autoDivideContent(content);

// Initialize the flipbook using the turn.js plugin
$(".flipbook").turn();
