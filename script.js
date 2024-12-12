const createBtn = document.querySelector(".create-notes");
const deleteBtn = document.querySelector(".delete-btn");

createBtn.addEventListener("click",createNotes);

deleteBtn.addEventListener("click", () => {
    console.log("delete a note");
});

function createNotes(){
    console.log("create notes");
}