// list.js

document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const items = [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
        { id: 3, name: 'Item 3', description: 'Description for Item 3' }
    ];

    items.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td><button class="btn btn-primary btn-sm">Edit</button> <button class="btn btn-danger btn-sm">Delete</button></td>
        `;

        itemList.appendChild(row);
    });

    itemList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.textContent.toLowerCase();
            const itemId = event.target.closest('tr').querySelector('td:first-child').textContent;

            if (action === 'delete') {
                alert(`Delete action for item ID ${itemId}`);
                // Add your delete functionality here
            } else if (action === 'edit') {
                alert(`Edit action for item ID ${itemId}`);
                // Add your edit functionality here
            }
        }
    });
});
