let sqlQuerySubmitButton = document.getElementById('sql-query-submit');
let sqlQueryStringInput = document.getElementById('sql-query-string');
let outcome;

sqlQuerySubmitButton.addEventListener('click', ()=>{
    let queryString = sqlQueryStringInput.value;
    // Search the query string for TABLE keyword
    let tableRegex = /table/i; // Search for table and ignore case
    let tableKeywordFound = tableRegex.test(queryString);

    if(tableKeywordFound){
        // If TABLE keyword used, then deconstruct
        implementTableQuery(queryString);
    }
    // else if(){
            // Need to get the word after table which will be the table name 

    /******************** INSERT INTO, DELETE FROM, UPDATE ********************/
    // }
});

let implementTableQuery = (queryString) =>{
    let mainTablesContainer = document.getElementById('main-tables-container');
    /*********************** CREATE, DELETE, ALTER TABLE **********************/

    // Need to get the word before TABLE which will be the action
    let queryStringArray = queryString.split(' ');
    let queryTableAction = queryStringArray[0]; // Get the table action
    let tableName = queryStringArray[2];

    if(queryTableAction === "CREATE"){
        // Need to get the values of the columns to add to table
        let columnsRegex = /\((.*?)\)/;

        // Get the columns string values
        let columnsString = queryString.match(columnsRegex);
        alert(columnsString[1,]);

        // Create a table
        let table = document.createElement('table');
        let header = document.createElement('th');
        header.textContent = tableName;
        table.appendChild(header);
        mainTablesContainer.appendChild(table);

    } else if (queryTableAction === "ALTER"){
        // Alter the table
    } else if (queryTableAction === "DELETE"){
        // Delete the table
    }
}


