document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById('category-filter');
    const items = document.querySelectorAll('.cs-item');

    filter.addEventListener('change', function() {
        const selectedCategory = filter.value;

        items.forEach(item => {
            if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
