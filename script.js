
function create_grid(size = 0) {
    if (size == 0) {
        for (j = 0; j < 16; j++) {
            //mini_container create containers for each coloumn of boxes 
            //once all the boxes are created for that column, we create another container for the next column of boxes
            const mini_container = document.createElement("div");
            mini_container.classList.add("mini-container")
            for (i = 0; i < 16; i++) { //loop that creates 16 grid boxes
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.display = "flex";
                //the next 2 lines give each box set dimensions for a clear display of the box
                box.style.width = "20px";
                box.style.height = "20px";
                box.style.border = "1px solid";
                box.style.flex = "1";
                mini_container.appendChild(box);
            }
            main_container.appendChild(mini_container);
        }
    }
    else {
        for (j = 0; j < size; j++) {
            //mini_container create containers for each coloumn of boxes 
            //once all the boxes are created for that column, we create another container for the next column of boxes
            const mini_container = document.createElement("div");
            mini_container.classList.add("mini-container")
            for (i = 0; i < size; i++) { //loop that creates 16 grid boxes
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.display = "flex";
                //the next 2 lines give each box set dimensions for a clear display of the box
                box.style.width = `${500 / size}px`;
                box.style.height = `${500 / size}px`;
                box.style.border = "1px solid";
                mini_container.appendChild(box);
            }
            main_container.appendChild(mini_container);
        }
    }

}


const main_container = document.querySelector(".main-container");
main_container.style.display = "flex";
const grid_button = document.querySelector(".new-grid");
grid_button.addEventListener("click", grid_request);
create_grid();
main_container.addEventListener("mouseover", apply_color)
//need to have the event listener outside the function so that it runs everytime 

//when the mouse hovers over a box, it applies a random color to the box 
function apply_color() {
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

function grid_request() {
    let size = prompt("How many squares would you like each side to be? (2-100)");
    clear_grid();
    create_grid(size);
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
