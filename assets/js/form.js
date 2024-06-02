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
        const backdrop = document.createElement("div");
        backdrop.classList.add("backdrop");

        document.body.appendChild(backdrop);

        if (response.status === 200) {
            successMessage.textContent = "Thank you for your message. We will reply to you shortly!";
            successMessage.classList.remove("d-none");
            successMessage.classList.add("d-block");
            errorMessage.classList.add("d-none");
            document.getElementById("contact-form").reset();
        } else {
            console.log(response);
            errorMessage.textContent = "Something went wrong! Please try again";
            errorMessage.classList.remove("d-none");
            errorMessage.classList.add("d-block");
            successMessage.classList.add("d-none");
        }

        backdrop.classList.add("d-block");

        // Remove messages and backdrop after 3 seconds
        setTimeout(() => {
            successMessage.classList.remove("d-block");
            successMessage.classList.add("d-none");
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
            backdrop.classList.remove("d-block");
            document.body.removeChild(backdrop);
        }, 3000);
    } catch (error) {
        console.log(error)
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "An error occurred while submitting the form.";
        errorMessage.classList.remove("d-none");
        errorMessage.classList.add("d-block");
        backdrop.classList.add("d-block");

        // Remove messages and backdrop after 3 seconds
        setTimeout(() => {
            errorMessage.classList.remove("d-block");
            errorMessage.classList.add("d-none");
            backdrop.classList.remove("d-block");
            document.body.removeChild(backdrop);
        }, 3000);
    }
}
