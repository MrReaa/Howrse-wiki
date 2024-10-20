const webhookUrl = 'https://prod-230.westeurope.logic.azure.com:443/workflows/ef1e6e481c444bacbd6e1b55273703cf/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pPgEdvhkHxB1zwp1-O8gRMvv42k9m2EJfUfY8i9BPUU';
const formL = document.getElementById('teamsForm');
formL.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(formL);
    var blaa = Object.fromEntries(formData);
    console.log(blaa);

    var formatted_Card = {
        "type": "message",
        "attachments": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "contentUrl": null,
                "content": {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.2",
                    "body": [
                        {
                            "type": "TextBlock",
                            "text": JSON.stringify(blaa.message)
                        }
                    ]
                }
            }
        ]
    }  

    axios.post(webhookUrl, formatted_Card)
    .then((response) => {
        console.log(response);
        alert("Viesti lähetetty onnistuneesti!")
        document.getElementById('message').value='';

    })
    .catch((error) => {
        console.error('Error sending message:', error);
        document.getElementById('message').value='';

        alert("Viestin lähettämisessä ongelma!")
    });
});
