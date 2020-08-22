# TailwindCSS named groups

TailwindCSS plugin that adds named groups to the group variant. This is handy if you have nested groups hovers.

![idle](images/idle.png)
![foo-hover](images/foo.png)
![bar-hover](images/bar.png)

## Installation

```
# npm
npm install tailwindcss-named-groups --save-dev

# yarn
yarn add --dev tailwindcss-named-groups
```

Add the plugin to the `plugins` array of the tailwind config file.  

```js
// tailwind.config.js
module.exports = {
  // ...

  plugins: [
    // ...
    require("tailwindcss-named-groups"),
  ],
};
```

Then create your named groups in the config (no need to type group-, that will be prepended for you).

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
    namedGroups: ["foo", "bar"],
    // will result in group-foo and group-bar being available in addition to the base group
  },
  // ...
};
```

### Usage

Having the named groups as `foo` and `bar`:

```html
<div class="group-foo bg-white hover:bg-blue-500 ...">
  <p class="text-gray-900 group-foo-hover:text-white ...">
    New Project
  </p>
  <div class="group-bar bg-gray-100 hover:bg-green-500 ...">
    <p class="text-gray-500 group-bar-hover:text-white ...">
      Create a new project from a variety of starting templates.
    </p>
  </div>
</div>
```

Will result into this:

![in-action](images/in-action.gif)

## Extra

`group-focus` is also supported.

This plugin respects the group-hover and group-focus variants, so you must have them enabled where you want to use named groups:

```js
// tailwind.config.js
module.exports = {
  // ...
  variants: {
    // Now you can use named groups in textColor for hover and focus
    textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
};
```
