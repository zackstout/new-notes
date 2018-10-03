# Flexbox Notes

- default of `flex-direction` is horizontal (or 'row').
- we want `display: flex` to be on the parent, or container element.
- can use the `order` property to change the order in which elements appear.

### Spacing
- can use `justify-content: flex-start` (default) or `: center`, or `: space-around`, to change the way space flows in the direction of content, in the `flex-direction`.
- `align-items` moves in the perpendicular direction. Canse use `: baseline`.
- can apply `align-self` on a child, which defaults to `auto`, to apply a custom spacing.

### Sizing
- Use `flex-basis` instead of `width` (for the default flex-direction of row) to determine the *ideal width* of an element, if it has enough room.
- Use `flex-grow` and `flex-shrink` on the children of a `display: flex` container element to determine the *proportion* in which the extra space gets carved up (e.g. if you give them 1, 2 and 3 you'll have 1/6, 1/3 and 1/2 respectively). (`grow` asks how much should each element grow if it has space; `shrink` asks how much it should shrink if there's too much content.)
- And yeah there is a nice shorthand syntax for this, vid 6
