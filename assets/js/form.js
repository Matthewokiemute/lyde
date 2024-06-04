async function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const successMessage = document.getElementById("success-message");
        const errorMessage = document.getElementById("error-message");

        if (response.status === 200) {
            successMessage.textContent = "Thank you for your message. We will reply to you shortly!";
            successMessage.classList.remove("d-none");
            errorMessage.classList.add("d-none");
            document.getElementById("contact-form").reset();
        } else {
            console.log(response);
            errorMessage.textContent = "Something went wrong! Please try again";
            errorMessage.classList.remove("d-none");
            successMessage.classList.add("d-none");
        }
    } catch (error) {
        console.log(error)
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "An error occurred while submitting the form.";
        errorMessage.classList.remove("d-none");
    }
}