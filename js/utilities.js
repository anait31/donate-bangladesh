function getElementValueById(id) {
    return document.getElementById(id);
}

// function getInputValueById(id) {
//     return document.getElementById(id).value;
// }

document.getElementById('blogs').addEventListener('click', function() {
    window.location.href = ('../blogs.html')
})

document.getElementById('home').addEventListener('click', function() {
    window.location.href = ('../index.html')
})