 const inp1 = document.getElementById('inp1');
 const btn = document.getElementById('btn1');

    btn.addEventListener('click', function() {
      const city = inp1.value.trim();
      if (!city) {
        alert('გთხოვთ შეიყვანოთ ქალაქი');
        return;
      }
      // ვიკიპედიის ქართული ვერსია
      const wikiUrl = `https://ka.wikipedia.org/wiki/${encodeURIComponent(city)}`;
      // ახალ ფანჯარაში გახსნა
      window.open(wikiUrl, '_blank');
    });