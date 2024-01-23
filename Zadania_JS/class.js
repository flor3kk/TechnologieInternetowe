class KatalogProduktow {
  constructor() {
    this.produkty = {};
  }

  dodajProdukt(nazwa, cena, ilosc) {
    if (!this.produkty[nazwa]) {
      const nowyProdukt = { nazwa, cena, ilosc };
      this.produkty[nazwa] = nowyProdukt;
      return nowyProdukt;
    } else {
      return null;
    }
  }

  usunProdukt(nazwa) {
    if (this.produkty[nazwa]) {
      delete this.produkty[nazwa];
    }
  }

  aktualizujIlosc(nazwa, nowaIlosc) {
    if (this.produkty[nazwa]) {
      this.produkty[nazwa].ilosc = nowaIlosc;
    }
  }
}