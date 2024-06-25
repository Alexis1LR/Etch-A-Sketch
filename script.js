const main_container = document.querySelector(".container");
function create_grid() {
    for (j = 0; j < 16; j++) {
        //create containers for each row
        const mini_container = document.createElement("div");
        for (i = 0; i < 16; i++) { //loop that creates 16 grid boxes
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.display = "flex";
            box.textContent = "box";
            box.style.border = "solid";
            mini_container.appendChild(box);
        }
        main_container.appendChild(mini_container);
    }
}
main_container.style.display = "flex";
create_grid();

