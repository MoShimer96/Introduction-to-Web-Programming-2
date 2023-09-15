window.onload = function(){
    

    //The forms
let username = document.getElementById("input-username");
let userEmail = document.getElementById("input-email");
let radioButton = document.getElementById("input-admin");
const button = document.getElementById("submit-data");

//The table of data 
let table = document.getElementById("table1");


//useravatar
let imageSite = document.getElementById("uploaded-image");




//number of rows in table starts at three since there is its already populated
let num = 3;

button.addEventListener("click", function(){
    const file = document.getElementById('input-image').files[0];
    let imgSRC = "";
    if(!file) return;
    imgSRC = URL.createObjectURL(file);

    
   

    //Create the row
    let tableRow = document.createElement("tr")

    //data to be pushed to the table 
    let tableDataUsername = document.createElement("td");
    let tableDataEmail = document.createElement("td");
    let tableDataIsAdmin = document.createElement("td");
    let tableDataAvatr = document.createElement("td");

    //Check if the user is an admin
    if(document.getElementById('input-admin').checked){
        tableDataIsAdmin.innerText ="X";
    } else {
        tableDataIsAdmin.innerText = "-";
    }
    let userAlreadyExists = false;
    let rows = table.getElementsByTagName('tr');

    for(let i = 0; i < rows.length; i++){
        let cells = rows[i].getElementsByTagName('td');
        userAlreadyExists = username.value == cells[0].innerText;
        if(userAlreadyExists){
            cells[1].innerText  = userEmail.value;
            if(document.getElementById('input-admin').checked){
                cells[2].innerText ="X";
            } else {
                cells[2].innerText = "-";
            }
            break;
            
        } 
        
        
    }
    
    if(!userAlreadyExists){

        tableDataAvatr.innerHTML='<img id="uploaded-image" src="'+imgSRC+'" alt="Uploaded Image" width="64" height="64">';

        tableDataUsername.innerText = username.value;
        tableDataEmail.innerText = userEmail.value;
        if(document.getElementById('input-admin').checked){
            tableDataIsAdmin.innerText="X";
        }else{
            tableDataIsAdmin.innerText ="-";
        }

        tableRow.id = "tr"+num;
        num++;
        
        tableRow.appendChild(tableDataUsername);
        tableRow.appendChild(tableDataEmail);
        tableRow.appendChild(tableDataIsAdmin);
        tableRow.appendChild(tableDataAvatr);
        table.append(tableRow);


         
    }

    
        
    
    
    
    




})






//function that emptys the table (doesn't work all that well )
let emptyTableButton = document.getElementById("empty-table");
 
emptyTableButton.addEventListener("click", function(){
    var tableNew = table.querySelector("tbody");
        table.innerHTML = "";
     
})


}