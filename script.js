document.addEventListener("DOMContentLoaded", function () {
    // Content sections after "Sisällysluettelo" (Table of Contents)
    const content = [
        {
            header: "Kasvattamainen",
            text: `Kasvattamaan ryhyessäsi, kannattaa miettiä tavoitteesi tarkasi. Jos tavoittelet on parhaiden hevosten listalle...`,
        },
        {
            header: "Hevosrodut",
            text: `Howrsessa on yhteensä 33 eri hevosrotua, joilla kaikilla vaihteleva määrä värityksiä. Pelissä suosituin hevosrotu on Akhaltekinhevonen...`,
        },
        {
            header: "Aasit ja Kylmäveriset hevoset",
            text: `Aaseja howrsessa on kahta eri rotua ja kylmäverisiä hevosia neljää eri rotua. Aaseja kasvattaessa kannattaa muistaa, että niitä on erittäin vaikea parantaa...`,
        },
        {
            header: "Yksisarviset ja pegasukset",
            text: `Howrsesta löytyy myös yksisarvisia ja pegasuksia. Pegasuksen siivet voi laittaa mille tahansa hevoselle...`,
        }
        // Add more sections as needed
    ];

    // Get the flipbook container
    const flipbook = document.querySelector(".flipbook");

    // Check if the flipbook container exists
    if (!flipbook) {
        console.error("Error: flipbook not found.");
        return; // Stop the script if flipbook is not found
    }

    // Page height limit (match this with the CSS flipbook page height)
    const pageHeight = 600;  // Adjust this according to your CSS settings

    // Function to create a new page
    function createPage(header, text) {
        const pageDiv = document.createElement("div");
        pageDiv.classList.add("page");

        const pageContentDiv = document.createElement("div");
        pageContentDiv.classList.add("page-content");

        // Add header and text content
        const headerEl = document.createElement("h2");
        headerEl.textContent = header;

        const textEl = document.createElement("p");
        textEl.textContent = text;

        pageContentDiv.appendChild(headerEl);
        pageContentDiv.appendChild(textEl);
        pageDiv.appendChild(pageContentDiv);

        return pageDiv;
    }

    // Function to auto-divide content across pages based on height
    function autoDivideContent(contentArray) {
        contentArray.forEach((section) => {
            const { header, text } = section;

            // Split the text into paragraphs for more control
            const paragraphs = text.split("\n");

            let currentPage = createPage(header, ""); // Start with an empty page
            flipbook.appendChild(currentPage); // Append to flipbook

            paragraphs.forEach((para) => {
                const paraEl = document.createElement("p");
                paraEl.textContent = para;

                // Add paragraph to the current page
                currentPage.querySelector(".page-content").appendChild(paraEl);

                // Check if the content overflows the page
                if (currentPage.offsetHeight > pageHeight) {
                    // Remove the overflowing paragraph and create a new page
                    currentPage.querySelector(".page-content").removeChild(paraEl);

                    // Start a new page
                    currentPage = createPage(header, "");
                    flipbook.appendChild(currentPage); // Append to flipbook

                    // Add the paragraph to the new page
                    currentPage.querySelector(".page-content").appendChild(paraEl);
                }
            });
        });
    }

    // Call the function to divide content and append dynamically
    autoDivideContent(content);

    // Initialize the flipbook plugin after content is added
    $(".flipbook").turn();
});
