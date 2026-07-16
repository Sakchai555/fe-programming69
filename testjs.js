// กำหนดฟังก์ชันชื่อ greet
function greet(name) {
  console.log("Hello, " + name + "!");
  console.log("Welcome to JavaScript programming.");
}

// เรียกใช้ฟังก์ชันพร้อมส่งค่าพารามิเตอร์
greet("Sakchai");




let number  = [1,2,3,4,5];
for(let i = 0; i < 5; i++){
    console.log(number[i]);
    if(number[i] === 5){
        console.log("Success");
    }
}


/*let person = {
    firstname: "Sakchai",
    lastname: "Saeaiao",

    getPersonInfo: function(){
        return this.firstname + " " + this.lastname;
    }
}; */

function Person(firstname, lastname , age){
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,

    this.getInfo = function(){
        return this.firstname + " " + this.lastname + " Age: " + this.age;
    };

}

let p1 = new Person("Sakchai", "Saeaiao", 20);
let p2 = new Person("Somchai", "chaidee", 21);

console.log(p1.getInfo());