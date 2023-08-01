async function load() {
    const apiUrl = 'https://indonesia-public-static-api.vercel.app/api/volcanoes';

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Respons jaringan tidak berhasil');
      }
      const data = await response.json();
      const tableBody = document.querySelector('#volcanoesTable tbody');

      // Bersihkan baris yang sudah ada, jika ada
      tableBody.innerHTML = '';

      // Melakukan perulangan data dan membuat baris untuk tabel
      data.forEach(volcano => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${volcano.nama}</td>
          <td>${volcano.bentuk}</td>
          <td>${volcano.tinggi_meter}</td>
          <td>${volcano.estimasi_letusan_terakhir}</td>
          <td>${volcano.geolokasi}</td>
        `;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error saat mengambil data:', error);
    }
  }

  // Panggil fungsi untuk mengambil dan menampilkan data
  load();