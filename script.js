// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
    };

const hamburger = document.querySelector('#hamburger-menu');

    // Jquery

    $(document).ready(function() {
        $("#contactForm").submit(function(e) {
            e.preventDefault(); // Mencegah submit default
    
            var isValid = true;
    
            // Validasi Nama
            if ($("#nama").val().trim() === "") {
                $("#namaError").text("Nama tidak boleh kosong");
                isValid = false;
            } else {
                $("#namaError").text("");
            }
    
            // Validasi Email
            var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if ($("#email").val().trim() === "") {
                $("#emailError").text("Email tidak boleh kosong");
                isValid = false;
            } else if (!emailPattern.test($("#email").val().trim())) {
                $("#emailError").text("Format email tidak valid");
                isValid = false;
            } else {
                $("#emailError").text("");
            }

             // Validasi Nomor Handphone
        var phonePattern = /^[0-9]+$/;
        if ($("#phone").val().trim() === "") {
            $("#phoneError").text("Nomor HP tidak boleh kosong");
            isValid = false;
        } else if (!phonePattern.test($("#phone").val().trim())) {
            $("#phoneError").text("Nomor HP hanya boleh berisi angka");
            isValid = false;
        } else {
            $("#phoneError").text("");
        }

        // Validasi Pesan
        if ($("#pesan").val().trim() === "") {
            $("#pesanError").text("Pesan tidak boleh kosong");
            isValid = false;
        } else {
            $("#pesanError").text("");
        }

        // Jika semua validasi lolos, tampilkan alert
        if (isValid) {
            $.ajax({
                type: "POST",
                url: "process_form.php",
                data: $("#contactForm").serialize(),
                success: function(response) {
                    if (response.trim() === "success") {
                        alert("Formulir berhasil dikirim!");
                        $("#contactForm")[0].reset(); // Reset form
                    } else {
                        alert("Terjadi kesalahan: " + response);
                    }
                }
            });
        }
    });
});