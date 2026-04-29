// window.addEventListener('load', function () {
//     const preloader = document.getElementById('preloader');
//     const homeSection = document.getElementById('home');
//     const musicBtn = document.getElementById('music-control'); // Add this line

//     // 1. Force the scroll to top immediately on load 
//     window.scrollTo(0, 0);

//     setTimeout(() => {
//         // 2. Hide the preloader
//         if (preloader) {
//             preloader.classList.add('loader-hidden');
//         }

//         // 3. SHOW the music button now that loading is done
//         if (musicBtn) {
//             musicBtn.style.display = "flex";
//         }

//         // 4. Ensure the home section is in view
//         if (homeSection) {
//             homeSection.scrollIntoView({ behavior: 'instant' });
//         }
//     }, 2000);
// });


// window.addEventListener('load', function () {
//     // 1. Select all elements
//     const preloader = document.getElementById('preloader');
//     const homeSection = document.getElementById('home');
//     const musicBtn = document.getElementById('music-control');
//     const bottomNav = document.getElementById('bottom-nav');

//     // 2. Force scroll to top immediately on load
//     window.scrollTo(0, 0);

//     // 3. Handle the 2-second reveal logic
//     setTimeout(() => {
//         // Hide the preloader
//         if (preloader) {
//             preloader.classList.add('loader-hidden');
//         }

//         // Show the music button
//         if (musicBtn) {
//             musicBtn.style.display = "flex";
//         }

//         // Show the bottom navigation bar
//         if (bottomNav) {
//             bottomNav.style.display = "flex";
//         }

//         // Ensure the home section is snapped into view
//         if (homeSection) {
//             homeSection.scrollIntoView({ behavior: 'instant' });
//         }
//     }, 2000);
// });




window.addEventListener('load', function () {
    // 1. Select all necessary elements
    const preloader = document.getElementById('preloader');
    const homeSection = document.getElementById('home');
    const musicBtn = document.getElementById('music-control');
    const bottomNav = document.getElementById('bottom-nav');

    // Select all sections and nav links for scroll-spy
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // 2. Force scroll to top immediately on load
    window.scrollTo(0, 0);

    // 3. Handle the 2-second Reveal Logic
    setTimeout(() => {
        // Hide the preloader
        if (preloader) {
            preloader.classList.add('loader-hidden');
        }

        // Show the music button and navigation bar
        if (musicBtn) musicBtn.style.display = "flex";
        if (bottomNav) bottomNav.style.display = "flex";

        // Snap home section into view
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'instant' });
        }
    }, 2000);

    // 4. CLICK LOGIC: Update color instantly when a nav button is tapped
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 5. SCROLL-SPY LOGIC: Update icons automatically while scrolling
    window.addEventListener('scroll', () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Detect if the section is currently occupying the middle of the screen
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            // Check if the link's href matches the section currently in view
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
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

// document.getElementById('autoDownloadBtn').addEventListener('click', function () {
//     // 1. Define your file path and desired name
//     const fileUrl = './assets/anandhu_anaswara_wedding_invitation.pdf';
//     const fileName = 'Anandhu_Anaswara_Invitation.pdf';

//     // 2. Fetch the file data
//     fetch(fileUrl)
//         .then(response => {
//             if (!response.ok) throw new Error('File not found');
//             return response.blob(); // Convert the data to a 'Blob' (Binary Large Object)
//         })
//         .then(blob => {
//             // 3. Create a temporary 'object URL' for the blob
//             const url = window.URL.createObjectURL(blob);

//             // 4. Create a hidden anchor element
//             const anchor = document.createElement('a');
//             anchor.style.display = 'none';
//             anchor.href = url;
//             anchor.download = fileName;

//             // 5. Add to page, trigger click, and remove
//             document.body.appendChild(anchor);
//             anchor.click();

//             // 6. Cleanup memory
//             window.URL.revokeObjectURL(url);
//             document.body.removeChild(anchor);
//         })
//         .catch(error => console.error('Download failed:', error));
// });


const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicIcon.className = 'fas fa-pause'; // Change to pause icon
        musicBtn.classList.add('playing');
    } else {
        bgMusic.pause();
        musicIcon.className = 'fas fa-music'; // Change back to play icon
        musicBtn.classList.remove('playing');
    }
});
