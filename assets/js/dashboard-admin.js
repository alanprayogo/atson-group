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
const deleteButton = document.querySelector(".modal-footer button.btn-danger");

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
  document.body.insertAdjacentHTML("beforeend", alertDanger);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-admin
const updateButton = document.querySelector(".modal-footer button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updateButton.addEventListener("click", function () {
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
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-user
const updateuserButton = document.querySelector(".user button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updateuserButton.addEventListener("click", function () {
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
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// add-bank
const savebankButton = document.querySelector(".bank button.btn-primary");

// Menambahkan event listener untuk meng-handle klik tombol "Save"
savebankButton.addEventListener("click", function () {
  // Menutup modal
  $("#add-bank-Modal").modal("hide");

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

// delete-bank
const deletebankButton = document.querySelector(".bank button.btn-danger");

// Menambahkan event listener untuk meng-handle klik tombol "Delete"
deletebankButton.addEventListener("click", function () {
  // Menutup modal
  $("#delete-bank-Modal").modal("hide");

  // Menampilkan alert danger dengan latar belakang yang berbeda
  const alertDanger = `
    <div class="alert alert-danger alert-dismissible bg-danger fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert danger ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertDanger);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-user
const updatebankButton = document.querySelector(".bank button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updatebankButton.addEventListener("click", function () {
  // Menutup modal
  $("#update-bank-Modal").modal("hide");

  // Menampilkan alert warning
  const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert warning ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// add-wallet
const savewalletButton = document.querySelector(".wallet button.btn-primary");

// Menambahkan event listener untuk meng-handle klik tombol "Save"
savewalletButton.addEventListener("click", function () {
  // Menutup modal
  $("#add-wallet-Modal").modal("hide");

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

// delete-wallet
const deletewalletButton = document.querySelector(".wallet button.btn-danger");

// Menambahkan event listener untuk meng-handle klik tombol "Delete"
deletewalletButton.addEventListener("click", function () {
  // Menutup modal
  $("#delete-wallet-Modal").modal("hide");

  // Menampilkan alert danger dengan latar belakang yang berbeda
  const alertDanger = `
    <div class="alert alert-danger alert-dismissible bg-danger fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert danger ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertDanger);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-wallet
const updatewalletButton = document.querySelector(".wallet button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updatewalletButton.addEventListener("click", function () {
  // Menutup modal
  $("#update-wallet-Modal").modal("hide");

  // Menampilkan alert warning
  const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert warning ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// add-position
const savepositionButton = document.querySelector(".position button.btn-primary");

// Menambahkan event listener untuk meng-handle klik tombol "Save"
savepositionButton.addEventListener("click", function () {
  // Menutup modal
  $("#add-position-Modal").modal("hide");

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

// delete-position
const deletepositionButton = document.querySelector(".position button.btn-danger");

// Menambahkan event listener untuk meng-handle klik tombol "Delete"
deletepositionButton.addEventListener("click", function () {
  // Menutup modal
  $("#delete-position-Modal").modal("hide");

  // Menampilkan alert danger dengan latar belakang yang berbeda
  const alertDanger = `
    <div class="alert alert-danger alert-dismissible bg-danger fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert danger ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertDanger);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-position
const updatepositionButton = document.querySelector(".position button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updatepositionButton.addEventListener("click", function () {
  // Menutup modal
  $("#update-position-Modal").modal("hide");

  // Menampilkan alert warning
  const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert warning ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// add-article
const savearticleButton = document.querySelector(".article button.btn-primary");

// Menambahkan event listener untuk meng-handle klik tombol "Save"
savearticleButton.addEventListener("click", function () {
  // Menutup modal
  $("#add-article-Modal").modal("hide");

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

// delete-article
const deletearticleButton = document.querySelector(".article button.btn-danger");

// Menambahkan event listener untuk meng-handle klik tombol "Delete"
deletearticleButton.addEventListener("click", function () {
  // Menutup modal
  $("#delete-article-Modal").modal("hide");

  // Menampilkan alert danger dengan latar belakang yang berbeda
  const alertDanger = `
    <div class="alert alert-danger alert-dismissible bg-danger fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data deleted successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert danger ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertDanger);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});

// update-article
const updatearticleButton = document.querySelector(".article button.btn-warning");

// Menambahkan event listener untuk meng-handle klik tombol "Update"
updatearticleButton.addEventListener("click", function () {
  // Menutup modal
  $("#update-article-Modal").modal("hide");

  // Menampilkan alert warning
  const alertWarning = `
    <div class="alert alert-warning alert-dismissible bg-warning fade show w-25 position-fixed top-0 start-50 translate-middle mt-5" role="alert">
      Data updated successfully
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // Menambahkan alert warning ke dalam body
  document.body.insertAdjacentHTML("beforeend", alertWarning);

  // Menghilangkan alert setelah 3 detik
  setTimeout(function () {
    $(".alert").alert("close");
  }, 4000);
});