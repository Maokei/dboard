const output = document.querySelector('.output');

function generateHtml(items) {
    items.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('row-item');
        tr.innerHTML = `
            <td>${item.Id}</td>
            <td><span>Description: ${item.Names}</span></td>
            <td><span>Image: ${item.Image}</span></td>
            <td><span>Command: ${item.Command}</span></td>
            <td><span>Created: ${item.Created}</span></td>
            <td><span>Created: ${item.Status}</span></td>
            <td><span>Created: ${item.Ports}</span></td>
        `;
        console.log(tr.innerHTML);
        output.appendChild(tr);
    });
}

setInterval(() => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function() {

    }
}, 3000);
