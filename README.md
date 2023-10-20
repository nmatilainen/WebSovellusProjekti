Arvioinnin helpottamiseksi
HTML:
1. Basic juttuja löytyy ympäri sivustoa.
2. mm. h1, 2, 3 ja p tekstejä jne löytyy sieltä täältä sivulta
3. Formseja löytyy Home sivulta sekä Contact sivulta. kahta erilaista
Linkki löytyy Portfolio sivulta.
Erilaista mediaa löytyy Hobbies sivulta (kuvat ja GIF)
kuva löytyy myös välilehden ikonista.
4. Tein ristinolla pelin käyttämällä table ominaisuuksia, löytyy sivulta Games.
5. jotain sommittelua löytyy eri sivuilta mutta ei mitään vakiota että kaikki olisivat tietyssä lokerossa.

CSS:
1. sivulla on sama fontti (Times New Roman) ihan vain visuaalisuuden takia sekä sama väri teksteissä, mutta niiden vaihtaminen onnistuu seuraavalla tavalla jos jotain tarvii todistaa: 
p {
    font-family: Arial, sans-serif;
}
ja 
h1, h2, h3 {
    color: red;
}
2. erilaisia classeja on ID:tä on käytetty seuraavasti:
.img1 {
    display: flex;
    justify-content: center;
    align-items: center;
}
Tuolla esimerkillä olen itse vaihtanut eri kuvien välisiä "asetuksia"
3. responsiivisuuteen ei ole tarkemmin kiinnitetty huomiota.
4. Flex ominaisuuksia käytetty navigation barissa.
Grid ominaisuuksia on käytetty esimerkiksi ristinolla pelissä.
5. mitään ihmeellistä stailaamista ei ole.

JavaScript:
1. Alert löytyy kun pelaa ristinollan loppuun, ylhäälle tulee ilmoitus siitä kumpi voittaa X vai O ja tasapelissä ilmoitus tasapelistä.
2. Home sivulla nappia painamalla voit vaihtaa sivun taustaväriä.
Sivulla on monia eri .js liittyviä väsäyksiä kuten säätiedon tarkistaminen kun kirjoittaa kaupungin nimen laatikkoon (löytyy Hobbies sivun alhaalta)
Kello löytyy jokaisen sivun alalaidasta.
3. Arrayta, Objekteja ja Funktioita löytyy molemmista .js fileistä.
4. Loop löytyy esim ristinolla pelistä sekä aloitussivun värin vaihdosta.
DOM manipulaatio tapahtuu ristinolla pelissä.
5. script.js filessä toteutuu.

Asynchronous:
1. Timeria käytetty sivun alalaidassa olevaan kelloon.
2. Fetch ja AJAX toteutuu sää kohdassa, tieto haetaan API avaimen avulla ilmaisesta sääpalvelusta.
3. asynchronous call näkyy kun painaa Get Weather nappia jolloin tietyn paikan lämpötila sekä ilma mainitaan.
4. Error catch löytyy script.js filen alhaalta, jos API avain ei saa tietoa sivulta niin sivulle tulee error ilmoitus.
5. säähaku filtteröi vain lämpötilan ja ilman näkyviin omille sivuille, ei muuta tietoa.