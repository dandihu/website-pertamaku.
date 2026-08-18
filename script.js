const tombolWarna = document.getElementById("tombolWarna");
const pesan = document.getElementById("pesan");

const daftarWarna = ["#ffe5e5", "#e5f0ff", "#e5ffe9", "#fff6e5",
"#f2e5ff"];
let index = 0;

tombolwarna.addeventlistener("click", function () {
  index = (index + 1) % daftarwarna.length;
  document.body.style.backgroundcolor = daftarwarna[lindex];
  pesan.textcontect = "tombol sudah diklik " + (index + 1) + " kali.";
});
