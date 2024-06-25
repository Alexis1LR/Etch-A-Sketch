
function create_grid() {
    for (j = 0; j < 16; j++) {
        //mini_container create containers for each coloumn of boxes 
        //once all the boxes are created for that column, we create another container for the next column of boxes
        const mini_container = document.createElement("div");
        for (i = 0; i < 16; i++) { //loop that creates 16 grid boxes
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.display = "flex";
            //the next 2 lines give each box set dimensions for a clear display of the box
            box.style.width = "20px";
            box.style.height = "20px";
            box.style.border = "solid";
            mini_container.appendChild(box);
        }
        main_container.appendChild(mini_container);
    }
}

const main_container = document.querySelector(".container");
main_container.style.display = "flex";
create_grid();
apply_hover();

//when the mouse hovers over a box, it applies a random color to the box 
function apply_hover() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        //the anonymous function generates a random color and applies it to each box element 
        box.addEventListener("mouseover", function () {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            box.style.backgroundColor = "#" + randomColor;
        }
        )
    })
}

