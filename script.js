function create_grid(size = 16) {
    for (j = 0; j < size; j++) {
        //mini_container create containers for each coloumn of boxes 
        //once all the boxes are created for that column, we create another container for the next column of boxes
        const mini_container = document.createElement("div");
        mini_container.classList.add("mini-container")
        for (i = 0; i < size; i++) { //loop that creates {size} amount of grid boxes
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.display = "flex";
            //the next 2 lines give each box dimensions based on the size of the container, which is a set 500px
            box.style.width = `${500 / size}px`;
            box.style.height = `${500 / size}px`;
            mini_container.appendChild(box);
        }
        //here, we append each column of boxes to the main_container, and then repeat the whole process again
        main_container.appendChild(mini_container);
    }
}
//when the mouse hovers over a box, it applies a random color to the box 
function apply_color(erase_mode) {
    const boxes = document.querySelectorAll(".box");
    if (erase_mode == true) { //eraser button was clicked 
        boxes.forEach(function (box) {
            //the anonymous function generates a random color and applies it to each box element 
            box.addEventListener("mouseover", function () {
                box.style.backgroundColor = "#FFFFFF";
            }
            )
        })
    }
    else {
        boxes.forEach(function (box) {
            //the anonymous function generates a random color and applies it to each box element 
            box.addEventListener("mouseover", function () {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                box.style.backgroundColor = "#" + randomColor;
            }
            )
        })
    }

}
//grid_request requests the size for the grid from the user
//is the call funcition for the grid_button event listener 
function grid_request() {
    let size = prompt("How many squares would you like each side to be? (2-100)");
    if (size > 1 && size <= 100) {
        clear_grid();
        create_grid(size);
    }
    else {
        alert("Please pick a number between 2 and 100");
    }
}

//clear_grid clears the current grid that is in the window
function clear_grid() {
    count = main_container.childElementCount;
    for (i = 0; i < count; i++) {
        //we use a loop to get rid of each child of the main_container, which will clear the whole grid 
        const mini_container = document.querySelector(".mini-container");
        main_container.removeChild(mini_container);
    }
}

function erase_function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        //the anonymous function generates a random color and applies it to each box element 
        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "white";
        }
        )
    })
}
const main_container = document.querySelector(".main-container");
const grid_button = document.querySelector(".new-grid");
const color_button = document.querySelector(".color-b");
const eraser_button = document.querySelector(".eraser");
let erase_mode = false;
grid_button.addEventListener("click", grid_request);
create_grid();
color_button.addEventListener("click", function () {
    erase_mode = false;
    apply_color(erase_mode);
})
eraser_button.addEventListener("click", function () {
    erase_mode = true;
    apply_color(erase_mode);
})



