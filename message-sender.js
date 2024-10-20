const webhookUrl = 'https://prod-138.westeurope.logic.azure.com:443/workflows/c71838fc64f14df581563784898d908b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=99zIaqibYUhSP3I6r1scstvRTseSmXpTb06X08dM3e4';
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
    })
    .catch((error) => {
        console.error('Error sending message:', error);
    });
});
