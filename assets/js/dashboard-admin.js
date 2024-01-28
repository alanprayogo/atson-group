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


