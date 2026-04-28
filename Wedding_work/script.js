window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    const homeSection = document.getElementById('home');

    // 1. Force the scroll to top immediately on load 
    // (Prevents the browser from jumping to old positions)
    window.scrollTo(0, 0);

    setTimeout(() => {
        // 2. Hide the preloader
        if (preloader) {
            preloader.classList.add('loader-hidden');
        }

        // 3. Ensure the home section is in view once the logo disappears
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'instant' });
        }
    }, 2000); // Your 2-second delay for the logo
});

// Set the date we're counting down to
const weddingDate = new Date("May 31, 2026 09:50:00").getTime();

// Update the count down every 1 second
const countdownTask = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the wedding date
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id="days", "hours", etc.
    document.getElementById("days").innerHTML = d.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = s.toString().padStart(2, '0');

    // If the count down is finished, display some text
    if (distance < 0) {
        clearInterval(countdownTask);
        document.querySelector(".countdown-badge").innerHTML = "<h3>Just Married!</h3>";
    }
}, 1000);

document.getElementById('autoDownloadBtn').addEventListener('click', function () {
    // 1. Define your file path and desired name
    const fileUrl = './assets/anandhu_anaswara_wedding_invitation.pdf';
    const fileName = 'Anandhu_Anaswara_Invitation.pdf';

    // 2. Fetch the file data
    fetch(fileUrl)
        .then(response => {
            if (!response.ok) throw new Error('File not found');
            return response.blob(); // Convert the data to a 'Blob' (Binary Large Object)
        })
        .then(blob => {
            // 3. Create a temporary 'object URL' for the blob
            const url = window.URL.createObjectURL(blob);

            // 4. Create a hidden anchor element
            const anchor = document.createElement('a');
            anchor.style.display = 'none';
            anchor.href = url;
            anchor.download = fileName;

            // 5. Add to page, trigger click, and remove
            document.body.appendChild(anchor);
            anchor.click();

            // 6. Cleanup memory
            window.URL.revokeObjectURL(url);
            document.body.removeChild(anchor);
        })
        .catch(error => console.error('Download failed:', error));
});
