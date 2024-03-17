
        // Pobierz wartości z pól formularza
        var imie = document.getElementById('imie');
        var nazwisko = document.getElementById('nazwisko');
        var adres = document.getElementById('adres');
        var email = document.getElementById('email');
        var wiek = document.getElementById('wiek');

        imie.addEventListener("input", updateValue);
        nazwisko.addEventListener("input", updateValue);
        adres.addEventListener("input", updateValue);
        email.addEventListener("input", updateValue);
        wiek.addEventListener("input", updateValue);

        function updateValue() {
            var dane = {
                'imie': imie.value,
                'nazwisko': nazwisko.value,
                'adres': adres.value,
                'email': email.value,
                'wiek': wiek.value
            };

            localStorage.setItem('formularzDane', JSON.stringify(dane));
        }

        function wczytajDane() {
            var savedData = localStorage.getItem('formularzDane');
            if (savedData) {
                var parsedData = JSON.parse(savedData);
                imie.value = parsedData.imie;
                nazwisko.value = parsedData.nazwisko;
                adres.value = parsedData.adres;
                email.value = parsedData.email;
                wiek.value = parsedData.wiek;
            }
        }

        window.onload = wczytajDane;