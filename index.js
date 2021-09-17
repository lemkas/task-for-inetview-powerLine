const http = new Cars();
const url = "http://109.236.74.74:9900/getdata";
const editBtn = document.querySelector(".edit");
const confirmBtn = document.querySelector(".confirm");
const form = document.querySelector(".edit-form");
const nameField = document.querySelector(".name");
const emailField = document.querySelector(".email");
const ownerField = document.querySelector(".owner");

editBtn.addEventListener("click", showEditForm);
confirmBtn.addEventListener("click", edit);

http
  .get(url)
  .then((data) => {
    console.log(data);
    garage(data.Garage.Name, data.Garage.Email, data.Garage.Owner);
    car(
      data.Item.Title,
      data.Item.Original.Make,
      data.Item.Original.Model,
      data.Item.Description,
      data.Item.KeyValues.FuelType,
      data.Item.KeyValues.TrimLevel,
      data.Item.KeyValues.GearBox,
      data.Item.Original.CarOptions.Title
    );
  })
  .catch((err) => console.log(err));

function garage(name, email, owner) {
  nameField.innerHTML = name;
  emailField.innerHTML = email;
  ownerField.innerHTML = owner;
}

function car(
  car,
  make,
  model,
  description,
  fuelType,
  trimLevel,
  gearBox,
  carOption
) {
  document.querySelector(".car").innerHTML = car;
  document.querySelector(".make").innerHTML = make;
  document.querySelector(".model").innerHTML = model;
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".fuel-type").innerHTML = fuelType;
  document.querySelector(".trim-level").innerHTML = trimLevel;
  document.querySelector(".gear-box").innerHTML = gearBox;
  document.querySelector(".car-option").innerHTML = carOption;
}

// функция открытия полей редактирования
function showEditForm(e) {
  form.style.display = "block";

  e.preventDefault();
}

// функция редактирования
function edit(e) {
  const newName = document.querySelector("#name").value;
  const newEmail = document.querySelector("#email").value;
  const newOwner = document.querySelector("#owner").value;

  nameField.innerHTML = newName;
  emailField.innerHTML = newEmail;
  ownerField.innerHTML = newOwner;

  form.style.display = "none";
  e.preventDefault();
}
