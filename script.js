let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let pincode = document.getElementById('pincode');
let textarea = document.getElementById('address');
let gender = '';
function radio(rad){
    gender = rad.value;
}
let food = document.getElementById('food-choice');
let state = document.getElementById('state');
let country = document.getElementById('country');
let button = document.getElementById('submit');
let table = document.querySelector('tbody');
let tablecontent;
document.getElementById("submit").addEventListener("click", function(submitbutton){
    tablecontent = `<tr>
                        <td scope="row">${firstName.value}</td>
                        <td scope="row">${lastName.value}</td>
                        <td scope="row">${address.value}</td>
                        <td scope="row">${pincode.value}</td>
                        <td scope="row">${gender}</td>
                        <td scope="row">${food.value}</td>
                        <td scope="row">${state.value}</td>
                        <td scope="row">${country.value}</td>
                    </tr>`;
    submitbutton.preventDefault();
    table.innerHTML += tablecontent;
    firstName.value = '';
    lastName.value = '';
    address.value = '';
    pincode.value = '';
    gender = '';
    food.value = '';
    state.value = '';
    country.value = '';
    Array.from( document.querySelectorAll('input[name="gender"]:checked'), input => input.checked = false );
});