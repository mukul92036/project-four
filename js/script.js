
function displayDateTime() {
    const dtElement = document.getElementById('datetime');
    if (dtElement) {
        const now = new Date();
        dtElement.innerText = "Current Date & Time: " + now.toLocaleString();
    }
}
setInterval(displayDateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
    displayDateTime();

    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
 
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted successfully.");
    document.getElementById("contactForm").reset();
}