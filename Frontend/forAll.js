
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
 
 
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.addEventListener('click', () => {
            const ul = document.getElementsByTagName("ul")[0];
            if (ul.style.display === "none" || ul.style.display === "") {
                ul.style.display = "flex";
                document.getElementById("all").style.display = "flex";
            } else {
                ul.style.display = "none";
                document.getElementById("all").style.display = "none";
            }
        });
    }
});


// Select all titles and lists
const titles = document.querySelectorAll('.title');
const lists = document.querySelectorAll('.list');
const moveBy = 200; 

titles.forEach((title, index) => {
    let offset = 0;
    const list = lists[index];
    const section = list.parentElement;
    const leftArrowContainer = section.querySelector('.leftarrow'); 
    const forwardArrow = title.querySelector('.material-symbols-outlined'); 

    
    const leftArrow = document.createElement('span');
    leftArrow.textContent = 'arrow_back_ios';
    leftArrow.classList.add("material-symbols-outlined");
    leftArrow.style.cursor = 'pointer';
    leftArrow.style.display = 'none'; 

    
    leftArrowContainer.appendChild(leftArrow); 

    
    const updateArrowsVisibility = () => {
        const maxScroll = list.scrollWidth - section.clientWidth;

       
        if (maxScroll > 0) {
            
            const atEnd = -offset >= maxScroll;
            forwardArrow.style.display = atEnd ? 'none' : 'inline'; 
            leftArrow.style.display = offset < 0 ? 'block' : 'none'; 
        } else {
            forwardArrow.style.display = 'none'; 
            leftArrow.style.display = 'none'; 
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

    
    leftArrow.addEventListener('click', () => {
        offset += moveBy;

        
        if (offset > 0) offset = 0;

        
        list.style.transform = `translateX(${offset}px)`;

        
        updateArrowsVisibility();
    });
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


const koreanBtn = document.getElementById('korean');
const turkishBtn = document.getElementById('turkish');
const contentContainer = document.querySelector('.Second-part');


koreanBtn.addEventListener('click', () => {
    contentContainer.classList.remove('show-turkish');
    koreanBtn.classList.add('active');
    turkishBtn.classList.remove('active');
});


turkishBtn.addEventListener('click', () => {
    contentContainer.classList.add('show-turkish');
    turkishBtn.classList.add('active');
    koreanBtn.classList.remove('active');
});


function searchMovie() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let movies = document.getElementsByClassName('movie');
    let noResults = document.getElementById('noResults');
    let secno=document.getElementById('secno');
    let secno1=document.getElementById('secno1');
    let secno2=document.getElementById('secno2');
    let secno3=document.getElementById('secno3');
    let secno4=document.getElementById('secno4');
    let korean=document.getElementById('korean');
    let turkish=document.getElementById('turkish');
    let har=document.getElementById('har');
    let last=document.getElementById('last');
    
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
        secno4.style.display = "none";
        last.style.display = "none";
        korean.style.display = "none";
        turkish.style.display = "none";
        har.style.display = "none";
        
        
        
    } else {
        noResults.style.display = "block";
        secno.style.display = "none";
        secno1.style.display = "none";
        secno2.style.display = "none";
        secno3.style.display = "none";
        secno4.style.display = "none";
        last.style.display = "none";
        korean.style.display = "none";
        turkish.style.display = "none";
        har.style.display = "none";
        

    }
}
 
 

