# react-schematics-demo
A simple demo of a [Schematic](https://github.com/angular/angular-cli/tree/master/packages/angular_devkit/schematics) which generates a React component.

### Usage

1. Build the Schematic via `npm run build`
2. Run the Schematic via `npm run gen -- --path=<RELATIVE_PATH> --name=<NAME>`

### Schematic options

- `path` (required) - relative; where the component is created/generated
- `name` (required) - name of the component; will be converted to Pascal case automatically
- `className` - specifies a custom class name for the main element of the component
- `functional` - if set to `true`, the generator will create a functional component instead of a class-based one
- `pure` - whether the generated component must be a `PureComponent` or not
