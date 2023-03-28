import { Apity } from '@cocreators-ee/apity'
import type { paths } from '$lib/petstore'

const apity = Apity.for<paths>()

apity.configure({
    baseUrl: 'https://petstore.swagger.io/v2',
    init: {}
})

export const findPetsByStatus = apity.path('/pet/findByStatus').method('get').create()
export const getPetsById = apity.path('/pet/{petId}').method('get').create()
export const addPet = apity.path('/pet').method('post').create()
