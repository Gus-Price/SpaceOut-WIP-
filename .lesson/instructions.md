## Some Example repl.it's

The goal here was that you can use the example code in *this* repl.it as needed, but students have been getting themselves confused nonetheless, so I've made a handful of examples for students that might help others as well. Here they are:
- [Rotating Sprite with keyboard controls](https://replit.com/@iacs-js-22-23/Rotating-Drawing-Controlled-by-Keyboard-Example#app/controls.ts)
- [How to include multiple animations using the animation module in examples](https://replit.com/@iacs-js-22-23/Multiple-Animation-Example#app/index.ts)
- [An example of a "card matching" game](https://replit.com/@iacs-js-22-23/Matching-Game-Example#app/matchingCards.ts)

## Some video walkthroughs
- [Getting a fancy sprite working](https://youtu.be/OcAK57LORvo)
- [Getting a background moving](https://youtu.be/UtT-Fr0Zf6k)

- [An example game](https://replit.com/@iacs-js-22-23/Game-with-Animation-TestStudent69#app)

## Using the Examples
There are examples in the `examples` directory of this file that you can look at and copy/paste from as needed.

You can also see all instructions available at [my js-docs page](https://thinkle-iacs.github.io/js1-docs/)

To try out an example, try importing it in index.ts

```ts
import '../examples/projectileGameExample/'
```

Or

```ts
import '../examples/clickableObjectExample';
```

Or

```ts
import '../examples/spriteAnimationExample';
```

When you write your own code, add it directly to app rather than to the examples directory. You'll likely be changing elements rather than using my examples wholesale (for example, you might have a different way of setting up a canvas, or you might have a different way of drawing your sprite based on the art that you made).

## About Assets

You'll notice a "Hide me" heading when you run your game. That's a heading on the <div id="assets"> div that I made for you to add your images to. I recommend leaving this while you're testing so you can always see if your sprites get loaded correctly (this helps you see if you made a simple mistake like mistyping a URL). Once you're game is working, you can hide the "Hide me" div by making a simple change in HTML, just change `<div id="assets">` to `<div id="assets" style="display:none">`