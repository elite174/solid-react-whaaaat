# WHAAAAT? SOLID + REACT ??????

This example shows how it's possible to embed solid widgets/components into react/preact application.
Turned out that it's quite simple to pass the data into a solid component, because it's easy to use reactive state outside of the component.

In this example I used solid-html in order to do the markdown instead of JSX. To use JSX I would need to do some manipulations on the webpack config.
The performance with `html` is worse for solid, however it's better than react after all.
