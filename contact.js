const data = [
    { Name: 'Ronja', Puh: '0451438888', Email: 't3ahro00@students.oamk.fi' },

];

function createTableWithInnerHTML() {
    let tableHTML = '<table border="1"><tr>';
    
    Object.keys(data[0]).forEach(key => {
        tableHTML += `<th>${key}</th>`;
    });

    tableHTML += '</tr>';

    data.forEach(item => {
        tableHTML += '<tr>';
        Object.values(item).forEach(value => {
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</table>';
    document.getElementById('table-container').innerHTML = tableHTML;
}

createTableWithInnerHTML();