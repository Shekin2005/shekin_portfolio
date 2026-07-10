/*INDEX*/
// MOBILE MENU TOGGLE
function toggleMenu() {
    const nav = document.getElementById("navMenu");

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
    }
}

// SMOOTH SCROLL TO SECTION
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// FAQ TOGGLE
function toggleFAQ(element) {
    const answer = element.nextElementSibling;

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

// OPEN MODAL (Login)
function openModal() {
    document.getElementById("authModal").style.display = "flex";
    showLogin();
}

// CLOSE MODAL
function closeModal() {
    document.getElementById("authModal").style.display = "none";
}

// SHOW LOGIN
function showLogin() {
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("registerBox").style.display = "none";
}

// SHOW REGISTER
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}

// LOGIN FUNCTION (dummy)
function loginUser() {
    alert("Login Successful");
    closeModal();
    window.location.href = "dashboard.html";
}

// REGISTER FUNCTION (dummy)
function registerUser() {
    alert("Account Created");
    closeModal();
    window.location.href = "dashboard.html";
}

// CLICK OUTSIDE CLOSE
window.onclick = function(event) {
    let modal = document.getElementById("authModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* DASHBOARD */
// NAVIGATION FUNCTION
function goTo(page) {
    window.location.href = page;
}

// OPEN PROFILE POPUP
function openProfileEdit() {
    document.getElementById("profileModal").style.display = "flex";

    // fill existing values into form
    document.getElementById("editName").value = document.getElementById("nameDisplay").innerText;
    document.getElementById("editRole").value = document.getElementById("roleDisplay").innerText;
    document.getElementById("editBudget").value = document.getElementById("budgetDisplay").innerText;
}

// CLOSE PROFILE POPUP
function closeProfileEdit() {
    document.getElementById("profileModal").style.display = "none";
}

// SAVE PROFILE DATA
function saveProfile() {
    let name = document.getElementById("editName").value;
    let role = document.getElementById("editRole").value;
    let budget = document.getElementById("editBudget").value;

    document.getElementById("nameDisplay").innerText = name;
    document.getElementById("roleDisplay").innerText = role;
    document.getElementById("budgetDisplay").innerText = budget;

    closeProfileEdit();
}

// CLICK OUTSIDE CLOSE
window.onclick = function(event) {
    let modal = document.getElementById("profileModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

/* FIND */

let selectedType = "";

// OPEN FILTER (FROM DASHBOARD BUTTONS)
function openFilter(type) {
    selectedType = type;

    let title = "";

    if (type === "room") title = "Find a Room Filters";
    if (type === "roommate") title = "Find a Roommate Filters";
    if (type === "ad-room") title = "Advertise Room";
    if (type === "ad-roommate") title = "Advertise Roommate";

    document.getElementById("filterTitle").innerText = title;

    document.getElementById("filterModal").style.display = "flex";
}

// CLOSE FILTER
function closeFilter() {
    document.getElementById("filterModal").style.display = "none";
}

// APPLY FILTER
function applyFilter() {

    let inputs = document.querySelectorAll("#filterModal input");

    let filterData = {
        location: inputs[0].value,
        budget: inputs[1].value,
        moveIn: inputs[2].value,
        lifestyle: inputs[3].value,
        type: selectedType
    };

    // SAVE FILTERS
    localStorage.setItem("roomygo_filters", JSON.stringify(filterData));

    closeFilter();

    // IMPORTANT: GO TO SWIPE PAGE
    window.location.href = "swipe.html";
}

// CLICK OUTSIDE CLOSE
window.onclick = function(event) {
    let modal = document.getElementById("filterModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


// OPEN AD POPUP
function openAd() {
    document.getElementById("adModal").style.display = "flex";
}

// CLOSE AD POPUP
function closeAd() {
    document.getElementById("adModal").style.display = "none";
}

// POST AD FUNCTION (THIS IS THE CORE FIX)
function postAd() {

    let title = document.getElementById("adTitle").value;
    let type = document.getElementById("adType").value; // room or roommate
    let location = document.getElementById("adLocation").value;
    let budget = document.getElementById("adBudget").value;
    let lifestyle = document.getElementById("adLifestyle").value;

    let ads = JSON.parse(localStorage.getItem("roomygo_ads")) || [];

    let newAd = {
        name: title,
        type: type,   // ✔ IMPORTANT FIX
        location: location,
        budget: parseInt(budget),
        lifestyle: lifestyle
    };

    ads.push(newAd);

    localStorage.setItem("roomygo_ads", JSON.stringify(ads));

    alert("Ad Posted Successfully!");

    closeAd();
}