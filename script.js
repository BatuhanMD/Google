document.getElementById('searchForm').addEventListener('submit', function(event) {
    var query = document.getElementById('searchBox').value;
    if (query === "") {
        alert("Lütfen bir arama terimi girin.");
        event.preventDefault();
    }
});