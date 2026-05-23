async function loadNavbar() {
    try {
        const response = await fetch("/pages/navbar.html");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const navbarHtml = await response.text();

        document.getElementById("navbarContainer").innerHTML = navbarHtml;
    } catch (error) {
        console.error("Failed to load navbar:", error);
    }
}

loadNavbar();
