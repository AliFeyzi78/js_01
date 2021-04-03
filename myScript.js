document.getElementById("submit_btn").addEventListener("click", submitUser);
document.getElementById("addUser_btn").addEventListener("click", addUser);

let userList = [];

class User {
  constructor(userName, userSurname, userAge) {
    this.name = userName;
    this.surname = userSurname;
    this.age = userAge;
  }
  login() {
    console.log(this.name, this.surname);
  }
}

function submitUser() {
  const name = document.getElementById("name_inp").value;
  const surname = document.getElementById("surname_inp").value;
  const age = document.getElementById("age_inp").value;

  let user = new User(name, surname, age);
  userList.push(`<br> *${user.age} --- ${user.name} ${user.surname}`);

  //   const user = {
  //     name: document.getElementById("name_inp").value,
  //     surname: document.getElementById("surname_inp").value,
  //     age: document.getElementById("age_inp").value,
  //   };
  //   console.log(user);
}

function addUser() {
  document.getElementById("listUser").innerHTML = userList;

  console.log(userList);
  userList[1].login();
}
