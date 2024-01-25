import {describe, it, expect, test} from 'vitest'
import {fetchSurfaceNecessaire} from './getSurfacesNecessaires'

import {IDS_REGIMES_ALIMENTAIRES} from '../config/regimeIds'

describe('Test du plugin getSurfacesNecessaires', () => {

    it('Test appel API surfaces_necessaires, Régime alimentaire ACTUEL', async ({}) => {
        const response = await fetchSurfaceNecessaire("https://lebasic.nohost.me/api/parcel/belgique/surfaces_necessaires", ["mun91114"], IDS_REGIMES_ALIMENTAIRES.ACTUEL)
        const expectedData = {data: 'expected data'}
        let surfaceNecessaireBioViandeBovine = response.find((e) => e.code_parcel === "EL.BVV").surface_necessaire_bio;
        expect(surfaceNecessaireBioViandeBovine).toEqual(3222)
    });
    it('Test appel API surfaces_necessaires, Régime alimentaire VEGETARIEN', async ({}) => {
        const response = await fetchSurfaceNecessaire("https://lebasic.nohost.me/api/parcel/belgique/surfaces_necessaires", ["mun91114"], IDS_REGIMES_ALIMENTAIRES.VEGETARIEN)
        const expectedData = {data: 'expected data'}
        let surfaceNecessaireBioViandeBovine = response.find((e) => e.code_parcel === "EL.BVV").surface_necessaire_bio;
        expect(surfaceNecessaireBioViandeBovine).toEqual(483)
    });

});
