## Test technique frontend

Afficher faire un site de listes de vidéos catégorisées via un endPoint GraphQL

Nous pouvons te fournir des designs des pages, au besoin.

Url du endpoint : l'url du endpoint graphql

(Ouvrir cette url dans un navigateur pour avoir un playground graphql et la documentation de l’api)

Query à utiliser :

- allVideos(limit: 4) => pour la home du site
- allVideos(tags: "Funzone", limit: 4) => pour la page "Funzone"
- allVideos(tags: "Testimoniales", limit: 4) => pour la page "Testimoniales"
- video(id: <id de la vidéo à afficher>) => pour la page détails d'une vidéo

Header à configurer : "x-account-key": l'accountKey
TODO :

# Configurer un projet NextJS (ou Create-React-App) + Apollo

# Appeler la requête graphql pour récupérer les évènements :

- click sur le logo => home page du site, requête allVideos(limit: 4) (design OTT-Whitelabel-Home.png)
- click sur le menu items "Funzone" => page dédiée à la catégorie "Funzone", requête allVideos(tags: "Funzone", limit: 4) (design OTT-Whitelabel-Categories.png)
- click sur le menu items "Testimoniales" => page dédiée à la catégorie "Testimoniales", requête allVideos(tags: "Testimoniales", limit: 4) (design OTT-Whitelabel-Categories.png)
- en top de la home page mettre un lecteur video sur l'url suivante : l'url du stream live, avec un placeholder de ton choix (nous pourrons t'en fournir un au besoin).

# Afficher la liste des vidéos sous forme de cartes avec :

- la vignette (video.poster) (utiliser un placeholder générique si poster est vide)
- en dessous, le nom de la vidéo

# Gestion de la pagination avec l'objet 'cursor' (cursor contient 2 attributs : after et before, pour récupérer les éléments suivants il faut passer le after à la requête allVideos)

# Sur click sur une vidéo :

- navigation jusqu'à une page de détails
- appeler la query video(id: <id de la vidéo>)
- un player vidéo avec la vignette (video.poster) (avec un placeholder générique si pas d'image)
- l'url de la vidéo est protégée et ne fonctionnera pas, utiliser l'url du stream live pour le lecteur à la place
- en dessous, le nom de la vidéo
- en dessous, afficher les 4 premières vidéos de la catégorie précédente ("Testimoniales" si on venait de la page "Testimoniales", "Funzone" sinon)

# Utiliser les media queries pour avoir un affichage cohérent sur différentes tailles d’écran

# Ecrire des tests pour valider les composants

# Livraison sur un repository git (utiliser un process de commit tel que le git-flow)

# ATTENTION : l'url du endpoint graphql, l'url du stream live et l'accountKey doivent être absents du repository git pour des raisons de sécurité (utiliser les .env et .gitignore).

REQUIS :

- react / NextJS ou Create-React-App
- apollo

INTERDIT :

- JQuery / Bootstrap / Lodash
- redux

REALISATION :
react/Create-React-App
Apollo
TS/Graphql

<!-- export interface ApolloProviderProps<TCache> {
client: ApolloClient<TCache> | DefaultClient<TCache>; -->
