import { HomePage, PokemonPage } from '../../pages/index'

export const unauthorized = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/pokemon/:id',
    component: PokemonPage,
    exact: true,
  },
]
