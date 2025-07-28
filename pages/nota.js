export function getUcapanRandom() {
  const jam = new Date().getHours()

  const ucapan = {
    pagi: [
      "Makasih udah beli pagi-pagi. Aplikasinya udah siap kamu pakai.",
      "Transaksinya aman. Selamat mulai hari dengan versi terbaik.",
      "Langkah awal yang oke banget. Silakan nikmati fitur premiumnya.",
      "Terima kasih. Akses kamu udah aktif, silahkan pakai.",
      "Checkout pagi ini berhasil. Semoga bermanfaat ya."
    ],
    siang: [
      "Makasih udah order di jam segini. Semua udah ready.",
      "Pembayaran sukses. Fitur premiumnya langsung bisa dipakai.",
      "Aplikasi udah aktif. Terima kasih atas kepercayaannya. Rimsfek!",
      "Pilihan kamu udah bener. Tinggal nikmati fiturnya.",
      "Makasih! Akses penuh udah dibuka buat kamu."
    ],
    sore: [
      "Transaksi sore ini lancar. Semoga aplikasinya ngebantu ya.",
      "Akses kamu udah aktif. Silakan lanjut explore.",
      "Terima kasih! Versi premium udah di tangan kamu sekarang.",
      "Checkoutnya sukses. Kalau butuh bantuan, tinggal hubungi.",
      "Semoga upgrade ini bisa kasih pengalaman yang lebih maksimal."
    ],
    malam: [
      "Makasih udah belanja malam-malam gini. Aplikasinya udah aktif ya.",
      "Pembayarannya aman. Tinggal pakai aplikasinya sekarang.",
      "Akses premium kamu udah nyala. Selamat pake!",
      "Terima kasih. Kalau ada yang kurang jelas, feel free buat tanya.",
      "Upgrade udah kelar. Selamat pakai versi lengkapnya."
    ],
    larut: [
      "Checkout tengah malam? Respek! Akses kamu udah aktif.",
      "Makasih udah order jam segini. Fiturnya udah bisa langsung dipakai.",
      "Transaksi berhasil. Gak ada jam tutup buat upgrade bagus kayak gini.",
      "Langsung aja cek aplikasinya. Semua fitur udah kebuka.",
      "Akses premium udah siap. Terima kasih banyak, dan selamat pakai."
    ]
  }

  let kategori = ''
  if (jam >= 9 && jam <= 10) kategori = 'pagi'
  else if (jam >= 11 && jam <= 14) kategori = 'siang'
  else if (jam >= 15 && jam <= 17) kategori = 'sore'
  else if (jam >= 18 && jam <= 21) kategori = 'malam'
  else kategori = 'larut'

  const list = ucapan[kategori]
  const randomUcapan = list[Math.floor(Math.random() * list.length)]
  return randomUcapan
}
