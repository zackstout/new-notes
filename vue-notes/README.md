# Vue Notes

## Egghead
- filter only works inside handlebars (invoked via `|`).
- we do NOT put computed properties as data.
- To get `watch` to work, we add 'input' to our data AND add `v-model="input"` to our input fieldd.
- Can add a computed 'styles' property and bind the styles to an element with `v-bind:style="styles"`.
- We can also change which classes are applied in a similar way (`v-bind:class=...`).
- Very nice form-handling functionality (`v-on:submit.prevent`)

## From the Documentation
- from the docs: Note that <keep-alive> requires the components being switched between to all have names, either using the name option on a component, or through local/global registration.
- on state management (from the docs): It’s important to note that you should never replace the original state object in your actions - the components and the store need to share reference to the same object in order for mutations to be observed.
- Unidirectional (from the docs on `props`): All props form a one-way-down binding between the child property and the parent one: when the parent property updates, it will flow down to the child, but not the other way around. This prevents child components from accidentally mutating the parent’s state, which can make your app’s data flow harder to understand.
  - Caveat: Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, mutating the object or array itself inside the child component will affect parent state.

## Associated Technologies
- Nuxt is for server-side rendering (vs. SPAs).
- Vuex is a Vue-specific Flux implementation (unlike Redux which is view-layer agnostic).
- Simple routing without vue-router: https://github.com/chrisvfritz/vue-2.0-simple-routing-example.
