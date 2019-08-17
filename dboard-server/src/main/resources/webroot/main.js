const output = document.querySelector('.output');

function generateHtml(items) {
    items.forEach(item => {
        const tr = document.createElement('tr');
        tr.classList.add('row-item');
        var ports = item.Ports[0]
        tr.innerHTML = `
            <td>${item.Id}</td>
            <td><span>${item.Names}</span></td>
            <td><span>${item.Image}</span></td>
            <td><span>${item.Command}</span></td>
            <td><span>${item.Created}</span></td>
            <td><span>${item.Status}</span></td>
            <td><span>${ports.PrivatePort}</span></td>
            <td><span>${ports.PublicPort}</span></td>
            <td><span>${ports.Type}</span></td>
        `;
        console.log(JSON.stringify(item));
        output.appendChild(tr);
    });
}

setInterval(() => {
    const url = "http://localhost:3003/api/containers";
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
