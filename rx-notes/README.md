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
```javascript
subscriptions() {
  const int$ = Observable.interval(1000);
  const times2$ = int$.map(i => i*2);
  const times3$ = int$.map(i => i*3);

  return {
    times2$,
    times3$
  }
}
```
- Huh, got some strange error where `serve` wouldn't work: just remove and reinstall `node_modules` worked.

- To listen for a click event, we write:
```javascript
subscriptions() {
  const random$ = this.click$.map(() => Math.floor(Math.random() * 100))

  return {
    random$
  }
}
```
- and then add `domStreams: ['click$']` to our Vue object, and in our HTML template, add `<button v-stream:click="click$">Yo</button>`.

- I confess, so far I'm not seeing the advantage: just feels like a bloated version of Vue.
- Would be nice to have a real use case, like we ran into with the diesel-to-solar conversion.

- Next up, vid 4, about Axios and `pluck` and `Observable.from()`.
- Vid 5 on click listening for axios call and `switchMap`.
- Vid 6 involves `bind`-ing with `:`, and the need for `map` when server has the data, reminiscent of React.
- Vid 7 is image error handling with `Observable.merge()`, `this.imageError$.mapTo()`, and adding an error event to the dom stream (and `v-stream`-ing it into our HTML `img` tag).
- Vid 8 is about deferring Ajax requests from page load until the user clicks -- some kung fu function abstraction stuff.
- Vid 9 is about gracefully handling errors with `.catch()` to return a NEW request via `createLoader` (which I think was a custom function he defined).
