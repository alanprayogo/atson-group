$(document).ready(function () {
  // Mengatur active class pada tombol dashboard saat halaman dimuat
  $("#v-pills-dashboard-tab").addClass("active");

  // Mengatur active class pada tombol sidebar saat tombol diklik
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");

    // Tutup semua collapse ketika tombol dashboard atau settings diklik
    if (
      $(this).is("#v-pills-dashboard-tab") ||
      $(this).is("#v-pills-settings-tab")
    ) {
      $(".collapse").collapse("hide");
    }
  });

  // Mengatur active class pada tombol collapse saat tombol diklik
  $(".collapse").on("show.bs.collapse", function () {
    $(this).prev(".nav-link").addClass("active");
  });

  // Mengatur active class pada tombol collapse saat tombol diklik
  $(".collapse").on("hide.bs.collapse", function () {
    $(this).prev(".nav-link").removeClass("active");
  });
});
$(document).ready(function () {
  // ...

  // Menutup collapse saat collapse yang lain dibuka
  $(".collapse").on("show.bs.collapse", function () {
    var currentCollapse = $(this);
    $(".collapse").each(function () {
      if (!$(this).is(currentCollapse)) {
        $(this).collapse("hide");
      }
    });
    $(this).prev(".nav-link").addClass("active");
  });

  // ...
});


// add-admin
const saveButton = document.querySelector(".modal-footer button.btn-primary");

// Menambahkan event listener untuk meng-handle klik tombol "Save"
saveButton.addEventListener("click", function () {
  // Menutup modal
  $("#add-admin-Modal").modal("hide");

  // Menampilkan alert success
  const alertSuccess = `
                              <div class="alert alert-success alert-dismissible fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
                                Data saved successfully
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div>
                            `;

  // Menambahkan alert success ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertSuccess);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// delete-admin
const deleteButton = document.querySelector(
  ".modal-footer button.btn-danger"
);

// Menambahkan event listener untuk meng-handle klik tombol "Delete"
deleteButton.addEventListener("click", function () {
  // Menutup modal
  $("#delete-admin-Modal").modal("hide");

  // Menampilkan alert danger dengan latar belakang yang berbeda
  const alertDanger = `
    <div class="alert alert-danger alert-dismissible bg-danger fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert danger ke dalam body
  document.body.insertAdjacentHTML(
    "beforeend",
    alertDanger
  );

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-admin
const updateButton = document.querySelector(
  ".modal-footer button.btn-warning"
);

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updateButton.addEventListener(
  "click",
  function () {
    // Menutup modal
    $("#update-admin-Modal").modal("hide");

    // Menampilkan alert warning
    const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

    // Menambahkan alert warning ke dalam body
    document.body.insertAdjacentHTML(
      "beforeend",
      alertWarning
    );

    // Menghilangkan alert setelah 3 detik
    setTimeout(function () {
      $(".alert").alert("close");
    }, 4000);
  }
);

// update-user
const updateuserButton = document.querySelector(
  ".user button.btn-warning"
);

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updateuserButton.addEventListener(
  "click",
  function () {
    // Menutup modal
    $("#update-user-Modal").modal("hide");

    // Menampilkan alert warning
    const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

    // Menambahkan alert warning ke dalam body
    document.body.insertAdjacentHTML(
      "beforeend",
      alertWarning
    );

    // Menghilangkan alert setelah 3 detik
    setTimeout(function () {
      $(".alert").alert("close");
    }, 4000);
  }
);
