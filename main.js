window.addEventListener('load', adjustParentHeight);
window.addEventListener('resize', adjustParentHeight);

function adjustParentHeight() {
    const parent = document.querySelector('.header');
    const child = document.querySelector('.header img');
    parent.style.maxHeight = `${child.clientHeight}px`;
}

// Get all the <li> elements
const listItems = document.querySelectorAll('.menu-filters li');

// Add a click event listener to each <li> element
listItems.forEach((li) => {
    li.addEventListener('click', function () {
        // Remove the 'active' class from all <li> elements
        listItems.forEach((item) => {
            item.classList.remove('active');
        });

        // Add the 'active' class to the clicked <li> element
        this.classList.add('active');
    });
});

