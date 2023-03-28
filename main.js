const form = document.getElementById("form-register");

let lines = "";
let registers = 0;
const names = [];
const phones = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLine();
  updateTable();

  registers += 1;

  document.getElementById("number-registers").innerHTML = registers;
});

function addLine() {
  const inputName = document.getElementById("name");
  const inputPhone = document.getElementById("phone");

  if (names.includes(inputName.value)) {
    alert(`O nome ${inputName.value} já foi inserido.`);
  } else {
    names.push(inputName.value);
    phones.push(parseFloat(inputPhone.value));

    let line = "<tr>";
    line += `<td>${inputName.value}</td>`;
    line += `<td>${inputPhone.value}</td>`;
    line += "</tr>";

    lines += line;
  }

  inputName.value = "";
  inputPhone.value = "";
}

function updateTable() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = lines;
}
