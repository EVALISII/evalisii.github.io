// wait for the DOM content to be fully loaded before executing any JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // get the filter dropdown subject by its ID
    const filter = document.getElementById('category-filter');
    
    // get all items to be filtered by their shared class 'cs-item'
    const items = document.querySelectorAll('.cs-item');

    // add an event listener to the filter dropdown for the 'change' event
    filter.addEventListener('change', function() {
        // get the value of the selected category from the filter dropdown
        const selectedCategory = filter.value;

        // iterate over each item
        items.forEach(item => {
            // check if the selected category is 'all' or if the item belongs to the selected category
            if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                // if the item matches the selected category, display it
                item.style.display = 'flex';
            } else {
                // else, if the item does not match the selected category, hide it from view
                item.style.display = 'none';
            }
        });
    });
});

// code intends to filter through the baking schedule contents
