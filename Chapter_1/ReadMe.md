### Design Pattern:

#### Presentational and Container Component Pattern:

- Am ales sa folosesc **Presentational and Container Component Pattern** care este bazat pe separarea componentelor pe baza de smart si dumb components pentru o mai buna intretinere, reutilizare si scalabilitate a codului. Practic, Smart Components se ocupa de procesarea logica si fetch-uri, dupa care trimite datele rezultate prin props catre Dumb Components, care se ocupa de parte de afisaj, prezentare si intercatiunea cu user-ul.

- **Smart Components** gestioneaza logica, fetch-ul de date si gestionarea state-ului. Datele si callback-urile sunt trimise prin props catre Dumb Components.

- **Dumb Components** se concentreaza pe partea de prezentare si interactiune cu user-ul. Ele primesc date si callback-uri prin props de la Smart Components.

#### Services Layer:

- **Services Layer-ul** este folosit pentru gestionarea api/request-urilor, folosit si ca o abstractizare a lor. Fiecare feature are propriul serviciu.

#### Folder Structure:

- Organizarea logica pe baza de features (products, users, shipping etc) pentru a mentine fisierele asemanatoare impreuna.

Acest pattern, ofera o separare clara a fiecarui feature, fiind mai usoara intretinerea, testarea si scalarea aplicatiei. Utilizarea de smart si dumb components ofera un flow curat si user de inteles de date si logica.
