// const newUser = {
//   id: 1,
//   name: "jayesh",
//   role: "CEO",
// };
// let postData = async () => {
//   await fetch("http://localhost:8080/users", {
//     method: "POST",
//     headers: {},
//     body: newUser.stringyfy(),
//   });
// };
// postData();

let form = document.querySelector("form");
form.addEventListener("submit", printData);

console.log(form);

function printData(e) {
  e.preventDefault();
  // let name=document.getElementsByClassName("eamil")
  const intrest = document.getElementsByName("intrest");
  let selectedArray = [];
  for (let i = 0; i < intrest.length; i++) {
    if (intrest[i].checked) {
      selectedArray.push(intrest[i].value);
    }
  }

  let obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
    verified: document.getElementById("verify").value,
    remember: document.getElementById("remembercheckbox").value,
    country: document.getElementById("country").value,
    firstName: document.getElementById("fName").value,
    Lastname: document.getElementById("Lname").value,
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    zip: document.getElementById("zip").value,
    phone: document.getElementById("phone").value,
    DOB: document.getElementById("birthdate").value,
    gender: document.getElementsByName("gender").value,
    intresteArray: selectedArray,
  };

  if (!obj.email || !obj.password || !obj.verified||!obj.country||!obj.firstName||!obj.Lastname||!obj.street||!obj.city||!obj.zip||!obj.phone) {
    alert("Please fill all filed");
  } else if (obj.password !== obj.verified) {
    alert("Password does not match");
  } else {
    postData(obj);
  }
}

const postData = async (newUser) => {
  try {
    const result = await fetch("https://voilent-market-api-vaibhav.onrender.com/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
    window.location.href = "./index.html";
    return result;
  } catch (err) {
    alert("Prolem occured in data fetching");
  }
};



