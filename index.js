const selectorParser = require("postcss-selector-parser");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ theme, addVariant, prefix, e }) => {
  const namedGroups = theme("namedGroups") || [];

  addVariant(`group-hover`, ({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return selectorParser((root) => {
        root.walkClasses((node) => {
          // Regular group
          const value = node.value;
          node.value = `group-hover${separator}${value}`;

          node.parent.insertBefore(
            node,
            selectorParser().astSync(prefix(`.group:hover `))
          );

          // Named groups
          namedGroups.forEach((namedGroup) => {
            node.parent.parent.insertAfter(
              node.parent,
              selectorParser().astSync(
                prefix(`.group-${namedGroup}:hover .`) +
                  e(`group-${namedGroup}-hover${separator}${value}`)
              )
            );
          });
        });
      }).processSync(selector);
    });
  });

  addVariant(`group-focus`, ({ modifySelectors, separator }) => {
    return modifySelectors(({ selector }) => {
      return selectorParser((root) => {
        root.walkClasses((node) => {
          // Regular group
          const value = node.value;
          node.value = `group-focus${separator}${value}`;

          node.parent.insertBefore(
            node,
            selectorParser().astSync(prefix(`.group:focus `))
          );

          // Named groups
          namedGroups.forEach((namedGroup) => {
            node.parent.parent.insertAfter(
              node.parent,
              selectorParser().astSync(
                prefix(`.group-${namedGroup}:focus .`) +
                  e(`group-${namedGroup}-focus${separator}${value}`)
              )
            );
          });
        });
      }).processSync(selector);
    });
  });
});
