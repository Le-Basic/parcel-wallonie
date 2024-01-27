import { describe, it, expect } from 'vitest';
import { calculerResultatSimulation } from './calculResultatSimulation';

describe('Test du calcul du resultat de la simulation', () => {
    it('Test appel API surfaces_necessaires, Régime alimentaire ACTUEL', () => {
        const resultatSimulation = calculerResultatSimulation(REPONSE_API_SURFACE_NECESSAIRE);
        expect(resultatSimulation.surfaceAMobiliser).toEqual(3335);
        expect(resultatSimulation.emploisAMobiliser).toEqual(120);
        // expect(resultatSimulation.surfacesEmploisAMobiliser).toEqual({});
    });
});

// TODO simplifier pour avoir une donnée de test plus facile a maintenir (taille nécessaire et suffisante pour exercer le code)
const REPONSE_API_SURFACE_NECESSAIRE = [
    {
        code_parcel: 'EL.BVV',
        libelle_parcel: 'Viande bovine à viande',
        libelle_parcel_niveau_1: 'Elevage',
        surface_necessaire_conventionnel: 1708,
        surface_necessaire_bio: 3222,
        emploi_bio: 82,
        emploi_conventionnel: 42
    },
    {
        code_parcel: 'EL.LAI',
        libelle_parcel: 'Lait',
        libelle_parcel_niveau_1: 'Elevage',
        surface_necessaire_conventionnel: 944,
        surface_necessaire_bio: 921,
        emploi_bio: 23,
        emploi_conventionnel: 22
    },
    {
        code_parcel: 'EL.VLA',
        libelle_parcel: 'Volailles, lapins et autres',
        libelle_parcel_niveau_1: 'Elevage',
        surface_necessaire_conventionnel: 74,
        surface_necessaire_bio: 529,
        emploi_bio: 13,
        emploi_conventionnel: 2
    },
    {
        code_parcel: 'EL.VPO',
        libelle_parcel: 'Viande porcine',
        libelle_parcel_niveau_1: 'Elevage',
        surface_necessaire_conventionnel: 228,
        surface_necessaire_bio: 774,
        emploi_bio: 20,
        emploi_conventionnel: 6
    },
    {
        code_parcel: 'FR.CER',
        libelle_parcel: 'Cerises',
        libelle_parcel_niveau_1: 'Fruits',
        surface_necessaire_conventionnel: 6,
        surface_necessaire_bio: 8,
        emploi_bio: 1,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'FR.POI',
        libelle_parcel: 'Poires',
        libelle_parcel_niveau_1: 'Fruits',
        surface_necessaire_conventionnel: 9,
        surface_necessaire_bio: 13,
        emploi_bio: 2,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'FR.POM',
        libelle_parcel: 'Pommes',
        libelle_parcel_niveau_1: 'Fruits',
        surface_necessaire_conventionnel: 23,
        surface_necessaire_bio: 39,
        emploi_bio: 5,
        emploi_conventionnel: 3
    },
    {
        code_parcel: 'FR.PRU',
        libelle_parcel: 'Prunes',
        libelle_parcel_niveau_1: 'Fruits',
        surface_necessaire_conventionnel: 51,
        surface_necessaire_bio: 66,
        emploi_bio: 8,
        emploi_conventionnel: 7
    },
    {
        code_parcel: 'GC.AVO',
        libelle_parcel: 'Avoine',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.BLT',
        libelle_parcel: 'Blé tendre',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 137,
        surface_necessaire_bio: 241,
        emploi_bio: 4,
        emploi_conventionnel: 2
    },
    {
        code_parcel: 'GC.CER',
        libelle_parcel: 'Autres céréales',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 4,
        surface_necessaire_bio: 5,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.COL',
        libelle_parcel: 'Huile de colza',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 21,
        surface_necessaire_bio: 38,
        emploi_bio: 1,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.ORG',
        libelle_parcel: 'Orge',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 1,
        surface_necessaire_bio: 1,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.PDT',
        libelle_parcel: 'Pomme de terre',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 21,
        surface_necessaire_bio: 42,
        emploi_bio: 1,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.POS',
        libelle_parcel: 'Pois secs et autres protéagineux',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 4,
        surface_necessaire_bio: 7,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'GC.SEI',
        libelle_parcel: 'Seigle',
        libelle_parcel_niveau_1: 'Céréales et autres cultures',
        surface_necessaire_conventionnel: 1,
        surface_necessaire_bio: 1,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'LG.AIL',
        libelle_parcel: 'Ail, Echalotes, Oignons',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 21,
        surface_necessaire_bio: 28,
        emploi_bio: 10,
        emploi_conventionnel: 7
    },
    {
        code_parcel: 'LG.ASP',
        libelle_parcel: 'Asperges',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 6,
        surface_necessaire_bio: 7,
        emploi_bio: 3,
        emploi_conventionnel: 2
    },
    {
        code_parcel: 'LG.AUB',
        libelle_parcel: 'Aubergines',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'LG.CAR',
        libelle_parcel: 'Carottes, Navets potagers, Céleris raves',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 16,
        surface_necessaire_bio: 25,
        emploi_bio: 9,
        emploi_conventionnel: 5
    },
    {
        code_parcel: 'LG.CHO',
        libelle_parcel: 'Choux',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 8,
        surface_necessaire_bio: 10,
        emploi_bio: 3,
        emploi_conventionnel: 3
    },
    {
        code_parcel: 'LG.CON',
        libelle_parcel: 'Concombres, Cornichons',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 0,
        surface_necessaire_bio: 0,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'LG.COU',
        libelle_parcel: 'Courgettes',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 2,
        surface_necessaire_bio: 3,
        emploi_bio: 1,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'LG.EPI',
        libelle_parcel: 'Epinards',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 3,
        surface_necessaire_bio: 4,
        emploi_bio: 1,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'LG.HAR',
        libelle_parcel: 'Haricot',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 31,
        surface_necessaire_bio: 40,
        emploi_bio: 14,
        emploi_conventionnel: 10
    },
    {
        code_parcel: 'LG.POR',
        libelle_parcel: 'Poireaux',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 1,
        surface_necessaire_bio: 1,
        emploi_bio: 0,
        emploi_conventionnel: 0
    },
    {
        code_parcel: 'LG.POV',
        libelle_parcel: 'Poivrons et piments',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 2,
        surface_necessaire_bio: 2,
        emploi_bio: 1,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'LG.RAD',
        libelle_parcel: 'Betteraves, Radis, Salsifis, Similaires',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 9,
        surface_necessaire_bio: 11,
        emploi_bio: 4,
        emploi_conventionnel: 3
    },
    {
        code_parcel: 'LG.SAL',
        libelle_parcel: 'Salades et endives',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 3,
        surface_necessaire_bio: 3,
        emploi_bio: 1,
        emploi_conventionnel: 1
    },
    {
        code_parcel: 'LG.TOM',
        libelle_parcel: 'Tomates',
        libelle_parcel_niveau_1: 'Légumes',
        surface_necessaire_conventionnel: 1,
        surface_necessaire_bio: 1,
        emploi_bio: 1,
        emploi_conventionnel: 0
    }
];
