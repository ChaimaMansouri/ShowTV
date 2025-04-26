function activateSpan(element) {
    // إزالة الفعالية من جميع العناصر
    var spans = document.querySelectorAll('.options span');
    spans.forEach(function(span) {
        span.classList.remove('activespan');
    });

    // إضافة الفعالية إلى العنصر الذي تم الضغط عليه
    element.classList.add('activespan');

}

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0; 
    const slides = document.querySelectorAll('.slide'); 
    const dots = document.querySelectorAll('.dot'); 

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active'); 
                slide.style.display = 'block'; 
            } else {
                slide.classList.remove('active'); 
                slide.style.display = 'none'; 
            }
        });

        // Update dots
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active'); 
            } else {
                dot.classList.remove('active'); 
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; 
        showSlide(currentIndex); 
    }

    setInterval(nextSlide, 3000); 
    showSlide(currentIndex);

    // Page login
    const closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.getElementById('login-modal').style.display = 'none';
        });
    }

    const accountBtn = document.getElementById('account');
    if (accountBtn) {
        accountBtn.addEventListener('click', function() {
            document.getElementById('login-modal').style.display = 'flex';
        });
    }

    // Select all titles and lists
const titles = document.querySelectorAll('.title');
const lists = document.querySelectorAll('.list');
const moveBy = 200; // Movement amount per click

titles.forEach((title, index) => {
    let offset = 0;
    const list = lists[index];
    const section = list.parentElement; // The parent of the list is assumed to be the section
    const leftArrowContainer = section.querySelector('.leftarrow'); // Select the leftarrow container
    const forwardArrow = title.querySelector('.material-symbols-outlined'); // Get the arrow icon inside title

    // Create left arrow element for each section and add styles
    const leftArrow = document.createElement('span');
    leftArrow.textContent = 'arrow_back_ios';
    leftArrow.classList.add("material-symbols-outlined");
    leftArrow.style.cursor = 'pointer';
    leftArrow.style.display = 'none'; 

    // Append to the left arrow container
    leftArrowContainer.appendChild(leftArrow); 

    // Function to update arrow visibility
    const updateArrowsVisibility = () => {
        const maxScroll = list.scrollWidth - section.clientWidth;

        // Show or hide arrows based on the overflow
        if (maxScroll > 0) {
            // Check if the end of the list is reached
            const atEnd = -offset >= maxScroll;
            forwardArrow.style.display = atEnd ? 'none' : 'inline'; // Hide forward arrow at end
            leftArrow.style.display = offset < 0 ? 'block' : 'none'; // Show left arrow if scrolled
        } else {
            forwardArrow.style.display = 'none'; // Hide forward arrow if no overflow
            leftArrow.style.display = 'none'; // Hide left arrow if no scroll
        }
    };

    // Call update visibility initially
    updateArrowsVisibility();

    // Add click event to scroll right
    title.addEventListener('click', () => {
        const maxScroll = list.scrollWidth - section.clientWidth;

        if (maxScroll > 0) { // Only scroll if overflow exists
            offset -= moveBy;

            // Limit scroll to max scrollable width
            if (-offset >= maxScroll) {
                offset = -maxScroll;
            }

            // Apply scroll transformation
            list.style.transform = `translateX(${offset}px)`;

            // Update arrow visibility
            updateArrowsVisibility();
        }
    });

    // Add click event to scroll back to start using left arrow
    leftArrow.addEventListener('click', () => {
        offset += moveBy;

        // Limit scroll so it doesn't exceed the starting position
        if (offset > 0) offset = 0;

        // Apply scroll transformation
        list.style.transform = `translateX(${offset}px)`;

        // Update arrow visibility
        updateArrowsVisibility();
    });
});



// video 





const videoElements = document.querySelectorAll('.video');

videoElements.forEach((video, index) => {
    const number = video.querySelector('.video-number');
    number.textContent = "Episode: " + (index + 1);
    
});

const videoElement = document.querySelectorAll('.videos');

videoElement.forEach((video, index) => {
    const number = video.querySelector('.video-number');
    number.textContent = "Announcement: " + (index + 1);
    
});

document.getElementById('Episodes').addEventListener('click', function() {
    document.getElementById('Episode').style.display = 'grid';
    document.getElementById('Announcements').style.display = 'none';
});
document.getElementById('Announcement').addEventListener('click', function() {
    document.getElementById('Episode').style.display = 'none';
    document.getElementById('Announcements').style.display = 'grid';
});



    // Liste js 
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const overlay = movie.querySelector('.overlay');
        const btn = movie.querySelector('.btn');

        movie.addEventListener('mouseenter', () => {
            overlay.style.display = 'flex'; 
            btn.style.display = 'flex'; 
        });

        movie.addEventListener('mouseleave', () => {
            overlay.style.display = 'none'; 
            btn.style.display = 'none'; 
        });
    });
});

document.getElementById("menu").addEventListener('click', () => {
    const ul = document.getElementsByTagName("ul")[0]; // Selects the first <ul> element
    if (ul.style.display === "none" || ul.style.display === "") {
        ul.style.display = "flex";
        document.getElementById("all").style.display = "flex";

    } else {
        ul.style.display = "none";
        document.getElementById("all").style.display = "none";
    }
});


// grand video 
 function makeFullscreen(videoElement) {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { 
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { 
        videoElement.msRequestFullscreen();
    }
}


var videos = document.querySelectorAll('.myVideo');


videos.forEach(function(video) {
    video.addEventListener('click', function() {
        makeFullscreen(this); 
    });
});


function searchMovie() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let movies = document.getElementsByClassName('movie');
    let noResults = document.getElementById('noResults');
    let secno=document.getElementById('secno');
    let secno1=document.getElementById('secno1');
    let secno2=document.getElementById('secno2');
    let secno3=document.getElementById('secno3');
    
    let visibleMovies = 0; 

    for (let i = 0; i < movies.length; i++) {
        let title = movies[i].getElementsByTagName('h2')[0]; 
        
        if (title.innerHTML.toLowerCase().indexOf(input) > -1) {
            movies[i].style.display = ""; 
            visibleMovies++;
        } else {
            movies[i].style.display = "none"; 
        }
    }
    
    
    if (visibleMovies === 0) {
        noResults.style.display = "block";
        secno.style.display = "none";
        secno1.style.display = "none";
        secno2.style.display = "none";
        secno3.style.display = "none";
    } else {
        noResults.style.display = "none";
        secno.style.display = "none";
        secno1.style.display = "none";
        secno2.style.display = "none";
        secno3.style.display = "none";
    }
}


function searchVideo() {
    let input = document.getElementById('searchInput').value.toLowerCase();

    let videos = document.querySelectorAll('.video');
    
    videos.forEach(function(video) {
        
        let title = video.querySelector('.video-number').textContent.toLowerCase();
        
        if (title.includes(input)) {
            video.style.display = ''; 
        } else {
            video.style.display = 'none'; 
        }
    });
}
