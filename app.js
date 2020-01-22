function Student(name, lastName, birthday){
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;

    this.getFullName = function() {
        console.log(this.name + " " + this.lastName);
    }
};

function saving(){
    const name = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthday = document.getElementById('birthday').value;
    var student = new Student(name, lastName, birthday);
    console.log(student.getFullName());
};