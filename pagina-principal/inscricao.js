//Codificação para pré-visualizar a foto

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ifoto").addEventListener("change", function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("preview").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});