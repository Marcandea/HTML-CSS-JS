var students = [];
var tbody;
8
function Student(name, lastName, birthday) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;

    function getInfo () {
        console.log(this.name + " " + this.lastName);
    }
};

this.createTable();

function saving() {
    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthday = document.getElementById('birthday').value;
    var student = new Student(name, lastName, birthday);
    students.push(student);
    this.createCellContent(student);
};

function createTable(){
    var container = document.getElementById('container');
    var table = document.createElement('table');
    tbody = document.createElement('tbody');
    container.appendChild(table);
    table.appendChild(tbody);
    this.createNameFields();
};

function createNameFields(){
    var nameRow = document.createElement('tr');
    for (var item in new Student){
        var nameCell = document.createElement('td');
        nameCell.textContent = item.toUpperCase();
        nameRow.appendChild(nameCell);
    }
    tbody.appendChild(nameRow); 
};

function createCellContent(vals){
    var row = document.createElement('tr');
    for (var item in vals){
        var cell = document.createElement('td');
        cell.textContent = vals[item];
        row.appendChild(cell);
    }
    var cellDelete = document.createElement('td');
    cellDelete.textContent = " X "
    row.appendChild(cellDelete);
    tbody.appendChild(row);
};

// function draw() {
//     var container = document.getElementById('container');
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     // loop array
//     for (i = 0; i < students.length; i++) {
//         // get inner array
//         var vals = students[i];
//         // create tr element
//         var row = document.createElement('tr');
//         // loop inner array
//         for (var b = 0; b < 3; b++) {
//             // create td element
//             var cell = document.createElement('td');
//             // set text
//             cell.textContent = vals.name;
//             console.log(vals.name);
//             // append td to tr
//             row.appendChild(cell);
//         }
//         //append tr to tbody
//         tbody.appendChild(row);
//     }
//     // append tbody to table
//     table.appendChild(tbody);
//     // append table to container
//     container.appendChild(table);
// }