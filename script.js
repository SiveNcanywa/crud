let resturants = ["McDonald's", "Spur", "Steers","Roco Mamas","KFC","Nandos","Debornairs Pizza","Hungry Lion","King Pie","Primi"];
function displayResturant(resturants){
    document.getElementById("resturants").innerHTML = "";

    resturants.forEach((resturant, position) => {
        document.getElementById("resturants").innerHTML += `
        
            <li>
                ${resturant}
                <button onclick="updateResturant(${position})" style"margin-left: 80px;">Update</button>
                <button onclick="deleteResturant(${position})">Delete</button>
                <button onclick="ViewResturant(${position})">view</button>

            </li>
        
        `;
    });
}
displayResturant(resturants);


function createResturant(){
    let myResturant = document.getElementById("resturant").value;
    try {
        if(!myResturant)throw new Error("No Resturant input")
        resturants.push(myResturant);
        displayResturant(resturants);
    } catch (error) {
        
        alert(error)
    }
}

function deleteResturant(position){
    resturants.splice(position, 1);
    displayResturant(resturants);
}

function updateResturant(position){
    let resturant = prompt("Please insert a resturant name");
    resturants[position] = resturant;
    displayResturant(resturant);
}