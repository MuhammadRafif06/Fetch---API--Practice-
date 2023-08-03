document.addEventListener('DOMContentLoaded', () => {
    const volcanoTableBody = document.querySelector('#volcanoTable tbody');
    axios.get('https://indonesia-public-static-api.vercel.app/api/volcanoes')
        .then(response => {

            const volcanoes = response.data;
            volcanoes.forEach(volcano => {
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${volcano.nama}</td>
                    <td>${volcano.bentuk}</td>
                    <td>${volcano.tinggi_meter}</td>
                    <td>${volcano.estimasi_letusan_terakhir}</td>
                    <td>${volcano.geolokasi}</td>`;
                volcanoTableBody.appendChild(row);

            });
        })
});