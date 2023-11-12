### Design Pattern:

#### Presentational and Container Component Pattern:

- Separarea componentelor pe baza de smart si dumb components pentru o mai bună întreținere și reutilizare.

- **Smart Components** gestionează logica, fetch-ul de date și gestionarea state-ului. Datele si callback-urile sunt trimise prin props catre Dumb Components.

- **Dumb Components** se concentrează pe partea de prezentare și interactiune cu user-ul. Ele primesc date si callback-uri prin props de la Smart Components.

#### Services Layer:

- **Services Layer-ul** este folosit pentru gestionarea api/request-urilor, folosit si ca o abstractizare a lor. Fiecare feature are propriul serviciu.

#### Folder Structure:

- Organizarea logica pe baza de features (products, users, shipping etc) pentru a mentine fisierele asemanatoare impreuna.

Acest pattern, ofera o separare clara a fiecarui feature, fiind mai usoara intretinerea, testarea si scalarea aplicatiei. Utilizarea de smart si dumb components ofera un flow curat si user de inteles de date si logica.
