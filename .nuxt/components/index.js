export { default as Logo } from '../../components/Logo.vue'
export { default as Card } from '../../components/card.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyCard = import('../../components/card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
