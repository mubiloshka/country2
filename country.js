function displayCountryDetail(country) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content'); 

  modalContent.innerHTML = `
    <span class="close-btn" id="closeModal">&times;</span>
    <h2 class="pi">${country.name.common}</h2>
    <img src="${country.flags.png}" alt="${country.name.common}" class="modal-img" />
    <p class="pi"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p class="pi"><strong>Region:</strong> ${country.region}</p>
    <p class="pi"><strong>Capital:</strong> ${country.capital}</p>
    <a class="pi" target="_blank" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(country.capital)}">
      показать на карте
    </a>
  `;

  modal.classList.remove('hidden');

  document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
}
