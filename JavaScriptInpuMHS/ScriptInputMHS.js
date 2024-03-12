      // Define array for student list
      var arrStudent = [];

      // Define Student object
      function Student(nim, name, ttl, alamat, email, noHp) {
        this.nim = nim;
        this.name = name;
        this.ttl = ttl;
        this.alamat = alamat;
        this.email = email;
        this.noHp = noHp;
      }

      // Function to save student data
      function saveStudent() {
        // Get form elements
        var studentForm = document.getElementById("studentForm");
        var nim = document.getElementById("nim").value;
        var name = document.getElementById("name").value;
        var ttl = document.getElementById("ttl").value;
        var alamat = document.getElementById("alamat").value;
        var email = document.getElementById("email").value;
        var noHp = document.getElementById("noHp").value;

        // Input validation (assuming validation logic is already implemented)
        if (!validateInput(nim, name, ttl, alamat, email, noHp)) {
          return; // Exit if validation fails
        }

        // Create student object and add to array
        var student = new Student(nim, name, ttl, alamat, email, noHp);
        arrStudent.push(student);

        // Reset form
        studentForm.reset();

        // Display student data
        showStudent(student); // Call the function to display data

        showMessage("Data Saved Successfully")

        // Log for verification (optional)
        console.log(student);
        console.log(arrStudent);
      }

      // Function to validate input (replace with your actual validation logic)
      function validateInput(nim, name, ttl, alamat, email, noHp) {
        if (
          nim === "" ||
          name === "" ||
          ttl === "" ||
          alamat === "" ||
          email === "" ||
          noHp === ""
        ) {
          alert("Mohon Lengkapi Semua Data Anda!");
          return false;
        } else if (isNaN(nim)) {
          alert("NIM Harus Berupa Angka!");
          return false;
        } else if (name.split(" ").length < 2) {
          alert("Mohon Masukkan Nama Lengkap Anda!");
          return false;
        } else if (!/\S+@\S+\.\S+/.test(email) || email.length > 50) {
          alert("Format Email Tidak Valid!");
          return false;
        } else if (noHp.length < 10 || isNaN(noHp)) {
          alert("No. Handphone Anda Tidak Valid!");
          return false;
        }
        return true;
      }

      // Function to display student data in the table
      function showStudent(student) {
        // Get tbody element (ensure correct ID)
        var tbody = document
          .getElementById("studentTable")
          .getElementsByTagName("tbody")[0]; // Select the first tbody element within the table

        // Create table row element
        var tr = document.createElement("tr");

        // Create table data elements (tds) and populate with student data
        var tdNim = document.createElement("td");
        tdNim.textContent = student.nim;
        tr.appendChild(tdNim);

        var tdNama = document.createElement("td");
        tdNama.textContent = student.name;
        tr.appendChild(tdNama);

        var tdTtl = document.createElement("td");
        tdTtl.textContent = student.ttl;
        tr.appendChild(tdTtl);

        var tdAlamat = document.createElement("td");
        tdAlamat.textContent = student.alamat;
        tr.appendChild(tdAlamat);

        var tdEmail = document.createElement("td");
        tdEmail.textContent = student.email;
        tr.appendChild(tdEmail);

        var tdNoHP = document.createElement("td");
        tdNoHP.textContent = student.noHp;
        tr.appendChild(tdNoHP);

        // Append the row to the tbody
        tbody.appendChild(tr);
      }
