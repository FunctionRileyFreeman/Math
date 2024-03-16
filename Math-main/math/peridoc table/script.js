function searchElement() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("periodic-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]; // Index of column containing atomic number
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() === filter) {
                tr[i].style.display = "";
                return;
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", searchElement);
});
