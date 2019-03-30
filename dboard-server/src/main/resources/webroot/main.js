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
    const url = "http://localhost:3000/api/containers";
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var containerList = JSON.parse(this.responseText);
        generateHtml(containerList);
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}, 3000);
