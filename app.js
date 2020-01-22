function Student(name, lastName, birthday) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;

    this.getInfo = function () {
        console.log(this.name + " " + this.lastName);
    }
};

var list = [];
function saving() {
    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthday = document.getElementById('birthday').value;
    var student = new Student(name, lastName, birthday);
    list.push(student);
    this.draw();
};

function draw() {
    var container = document.getElementById('container');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    // loop array
    for (i = 0; i < list.length; i++) {
        // get inner array
        var vals = list[i];
        console.log(vals);
        // create tr element
        var row = document.createElement('tr');
        // loop inner array
        for (var b = 0; b < 3; b++) {
            // create td element
            var cell = document.createElement('td');
            // set text
            cell.textContent = vals.name;
            console.log(vals.name);
            // append td to tr
            row.appendChild(cell);
        }
        //append tr to tbody
        tbody.appendChild(row);
    }
    // append tbody to table
    table.appendChild(tbody);
    // append table to container
    container.appendChild(table);
}