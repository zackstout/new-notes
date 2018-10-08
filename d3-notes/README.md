# d3!

## Scaling
- linear (also supported for times!)
- quantize (continuous to discrete)
- ordinal (discrete to discrete)
- They all have `invert` methods to go from output space to input.

## Load Data
- `d3.json()`, `d3.csv()`. Can use `.max`, `.min`, `.extent` (which pipes nicely into a scale), and `.set` to remove dupes.

## Selections
- `d3.selectAll('div').nodes()`; what returns from this also supports `select` and `selectAll`. Can also use CSS syntax to select "inner" stuff.
- Uses `.attr(KEY, VALUE)` just like jQuery; and calling it with one argument is a getter.
- The `.style()` method is similar; can also use `.classed()` to (de)apply classes, `.text()` and `.html()`.
- Note that `.append()` (and `.insert()`) will return a *new* selection.

## Data Joins
- Ex:
```javascript
d3.select('.chart')
  .selectAll('div')
  .data(scores)
```
- This counts as `enter` section, because we have data but not yet any DOM elements.
- But by default it returns the `update` selection. So we call `.enter()` on it, and *then* we can call `append` to generate a new `div` for each data-element without a DOM element.
- We have to manually tell d3 how to look for DOM elements that already exist.
- ^ I still don't really understand the `enter/update/exit` selection pattern.

## SVGs
- `g` containers are like `divs` for SVGs (graphics containers).
- BUT these must be `transform`-ed, rather than have their `x` and `y` positions set manually.
- We set the `svg` container's height and width manually.
- Main idea: more involved, layered structure, but with more power and flexibility (control).

## Interactivity
- like jQuery, use `.on(EVENT)` to add event listeners.
- Need to use `this`, so we eschew arrow functions. Wrap it in `d3.select(this)`, also like jQuery, so we can apply d3 methods on that selection.
- Can actually pass *three* arguments to our callback functions: data-element, index, and the whole collection.
- Use `.filter` on selections, e.g. `.filter(':not(:hover)')`, to return a new selection.

## Refactor manipulations into functions


## Convention: Margin object


## Creating Axes
- Use `.axisLeft`, e.g., and pass it a scale, and then use `svg.call(yAxis)`.
- formatting properties, and number of ticks, but d3 will still use its best judgment. Can have even finer-grained control with `.tickValues(ARRAY)`. Even has `tickSize()` and `tickPadding()`.
- intelligently updates based on date ranges -- nice.
- can use `.nice()` to make endpoints be whole (ish) numbers.


## Responsiveness
- use `viewBox` method of svgs to get responsiveness.
- the syntax is weird; just use this `responsivefy` function.

## Real Charts
- Feels kind of ugly that so much depends on properties unique to particular kinds of charts (such as `bandWidth` or `scaleBand`, `padding` for bar charts; or `scaleSqrt()` for scatter plots with circles.
- Can rotate our labels with:
```javascript
svg
  .call(xAxis)
  .selectAll('text')
  .style('text-anchor', 'end')
  .attr('transform', 'rotate(-45)');
```
- can use `.style(text-anchor, middle)` to ...well, kind of center text.


## Animations
- Just need to add `.transition()` before calls to `.style` or `.attr`!!!
- Can control by following with `.duration(MILLISECONDS)`, and `.delay(milliseconds)`.
- can also follow with e.g. `.ease(d3.easeCubicOut)`, or `.easeElasticOut`, or `.easeBounceOut`.
- Can easily chain these transitions!
