var students = [];
var tbody;
var table;

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
    this.createRowContent(student);
    console.log(students)
};

function createTable(){
    var container = document.getElementById('container');
    table = document.createElement('table');
    tbody = document.createElement('tbody');
    container.appendChild(table);
    table.appendChild(tbody);
    this.createNameFields();
};

function createNameFields(){
    var nameRow = document.createElement('tr');
    for (var item in new Student){
        var nameCell = document.createElement('th');
        nameCell.textContent = item.toUpperCase();
        nameRow.appendChild(nameCell);
    }
    tbody.appendChild(nameRow); 
};

function createRowContent(student){
    var row = document.createElement('tr');
    for (var item in student){
        var cell = document.createElement('td');
        cell.textContent = student[item];
        row.appendChild(cell);
    }
    row.appendChild(this.createDeleteButton());
    tbody.appendChild(row);
};

function createDeleteButton(){
    var cellDelete = document.createElement('td');
    var button = document.createElement('button');
    button.type = 'button';
    button.innerText = ' X ';
    button.setAttribute('onclick', "deleteStudent("+1+");")
    cellDelete.appendChild(button);
    return cellDelete;
};

function deleteStudent(position){
    table.deleteRow(position);
    students.pop(position);
};