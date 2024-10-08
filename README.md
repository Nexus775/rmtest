Rick and Morty Zadatak

Repo na VCS po zelji (Git, Bitbucket)
Inicijalizovati react projekat sa typescriptom
Biblioteka za stilizovanje po zelji (Material UI, Tailwind...)
Axios + React Query - komunikacija sa serverom
React context for global storage
Google Firebase Auth
API: https://rickandmortyapi.com/

Public deo aplikacije:

Login stranica koja sadrzi email i password polja. Ukoliko korisnik nema account potrebno je dodati link na login stranici koji ce voditi do Sign Up stranice gde ce korisnik uneti email i password.

Ceo proces autentikacije korisnika ide preko Google Firebase konzole. Parametri koji su neophodni za konfiguraciju i inicijalizaciju Firebase-a u React aplikaciji su u nastavku:

`const firebaseConfig = {
    apikey: "AIzaSyD8ZZb5TXEo6Qscj4ki8ESMKgS9MOXZSuo",
    authDomain: "shindiri-test.firebaseapp.com",
    projectId: "shindiri-test",
    storageBucket: "shindiri-test.appspot.com",
    messagingSenderId: "52617965392",
    appId: "1:52617965392 : web: fc3ff399c4d2e6db6e4655",
    measurementiId: "G-CBB9@3KCR9", 
};`

Private deo aplikacije:

Nakon uspesne registracije ili logina korisnik ce biti redirektovan na /characters stranicu. Token dobijen od strane Firebase-a zapamtiti u localstorage browsera

Ukoliko korisnik ima zapamcen token u localstorage mocice da pristupi private rutama u aplikaciji.

Header:

- Svaka stranica ce imati header sa linkovima (Characters, Logout)

Characters stranica:

- Korisnik treba da ima listu svih karaktera (slika, status, ime itd.) sa infinite scroll paginacijom.
- Klikom na karaktera bice redirektovan na single character stranicu
- Iznad liste sa karakterima, potrebno je dodati search box polje kojim bi se filtrirala lista karaktera

Single Character stranica:

- Poseduje detaljnije informacije o karakteru.
- Lokacija karaktera je link do single Location stranice.
- Takodje bitno je izlistati brojeve epizoda u kojima se karakter pojavljuje.
- Klikom na broj epizode korisnik treba biti redirektovan na single episode stranicu.

Single Location stranica:

- Informacije o lokaciji i lista svih karaktera sa te lokacije (Koristiti https://rickandmortyapi.com/documentation/#get-multiple-characters) endpoint koji prinvata vise character id-a.
- Klikom na karakter karticu se vodi na single character stranicu.

Single Episode stranica:

- Informacije o epizodi i lista svin karaktera iz te epizode (Koristiti https://rickandmortyapi.com/documentation/#get-multiple-characters) endpoint koji prihnvata vise character id-a. e Klikom na karakter karticu se vodi na single character stranicu.

Potrebne rute u aplikaciji:

- /characters - all characters
- /characters/{id} - Single character
- /location/${id} - single location
- /episode/${id} - single episode