

const dropDown = () => {
    let dropdownContent = document.getElementById("dropdown-content");

    if (window.innerWidth <= 650) {
        if (dropdownContent.style.display == "none") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    }
};