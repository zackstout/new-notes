# RxJS (with Vue) Notes:
https://egghead.io/lessons/vue-js-configure-vue-js-to-enable-rxjs-streams

- Having installed the vue cli, we can just run `vue create [project_name]`.

### In the project:
- `npm i rxjs vue-rx`
- `import` both, then send in to `Vue.use()`.
- NOTE: We had to import `rxjs-compat`, because for some reason it was looking there. And then instead of importing {Observable} from `rxjs`, had to import from `rxjs/Rx`.

- `$` is convention for a *stream*.
- What we had before: `subscriptions: { interval$: Observable.interval(1000) }`, and in our template, `{{interval$}}`.
- The idea is that we have a DOM element *subscribe* to some async event, so that it updates when that event fires.

- Then we changed it, to see how we can return different things:
` subscriptions() {
    const int$ = Observable.interval(1000);
    const times2$ = int$.map(i => i*2);
    const times3$ = int$.map(i => i*3);

    return {
      times2$,
      times3$
    }
  }
  `
- Huh, got some strange error where `serve` wouldn't work: just remove and reinstall `node_modules` worked.

- To listen for a click event, we write:
` domStreams: ["click$"],
  subscriptions() {
    const random$ = this.click$.map(() => Math.floor(Math.random() * 100))

    return {
      random$
    }
  }`, and then in our HTML template, `<button v-stream:click="click$">Yo</button>`.

  -