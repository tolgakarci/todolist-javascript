let textInput = document.querySelector("#task");
let addButton = document.querySelector("#liveToastBtn");
let deleteButton = document.querySelector("#deleteBtn");
let addToDoList = document.querySelector("#list");
let liveToast = document.querySelector("#liveToast");
let liveToastText = document.querySelector(".toast-body");

addButton.addEventListener("click", listToAdd);
textInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    listToAdd();
  }
});

let toDoList = [];

function listToAdd() {
  const toDoListTest = toDoList.includes(textInput.value);
  if (toDoListTest) {
    liveToast.classList.add("repeat");
    liveToastText.innerHTML = "Listeye aynı görevi ekleyemezsin!";
    $(".repeat").toast("show");
    textInput.value = "";
  } else if (!textInput.value === "" || !textInput.value.trim() == "") {
    let liItem = document.createElement("li");
    liItem.id = textInput.value;
    liItem.innerHTML += textInput.value;
    let deleteItem = document.createElement("span");
    addToDoList.appendChild(liItem);
    liItem.appendChild(deleteItem);
    deleteItem.innerHTML = "X";
    deleteItem.classList.add("delete-button");
    liItem.addEventListener("click", function () {
      liItem.classList.toggle("checked");
    });
    textInput.value = "";
    toDoList.push(liItem.id);
    liveToast.classList.add("success");
    liveToastText.innerHTML = "Listeye eklendi.";
    $(".success").toast("show");
    deleteItem.addEventListener("click", function () {
      liItem.remove();
      for (var i = 0; i < toDoList.length; i++) {
        if (toDoList[i] === liItem.id) {
          toDoList.splice(i, 1);
        }
      }
      liveToast.classList.add("remove");
      liveToastText.innerHTML = "Listeden çıkarıldı.";
      $(".remove").toast("show");
    });
  } else {
    liveToast.classList.add("error");
    liveToastText.innerHTML = " Listeye boş ekleme yapamazsın!";
    $(".error").toast("show");
    textInput.value = "";
  }
}
