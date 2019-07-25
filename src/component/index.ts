import {
  apply,
  url,
  applyTemplates,
  move,
  mergeWith,
  Rule,
  SchematicsException
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

interface ComponentOptions {
  generate?: string;
  path?: string;
  name?: string;
  className?: string;
  functional?: string;
  pure?: string;
}

export function component(options: ComponentOptions): Rule {
  return () => {
    if (!options.path) {
      throw new SchematicsException('No path provided.');
    }
    if (!options.name) {
      throw new SchematicsException('No name provided');
    }

    options.className = options.className || '';

    const generated = apply(url('./files'), [
      applyTemplates({
        ...options,
        ...strings,
        pure: options.pure === 'true',
        functional: options.functional === 'true',
        'if-functional': (s: string) => options.functional ? '' : s,
        'if-class': (s: string) => !options.functional ? '' : s
      }),
      move(options.path)
    ]);

    return mergeWith(generated);
  };
}
