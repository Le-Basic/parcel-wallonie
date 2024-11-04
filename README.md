# parcel-vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Optimisation des images

Avec [svgo](https://github.com/svg/svgo)

et la commande suivante

```bash
svgo -f public/img/cartes/ -p 1 -r
```

## Store
### Store pour la simulation de base

parameters: 
- population: 'toute' | 'groupe' | 'institution'
- regimeAlimentaire
- listeTerritoires
- partBio object

additional objects:
- pour les institutions
- pour les personnes

Un commit et une action:
- action qui change tous les paramètres based on 