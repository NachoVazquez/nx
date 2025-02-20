import type { ProjectNameAndRootFormat } from '@nx/devkit/src/generators/project-name-and-root-utils';
import type { Linter } from '@nx/linter';

export interface Schema {
  name: string;
  displayName?: string;
  style?: string;
  skipFormat: boolean; // default is false
  directory?: string;
  projectNameAndRootFormat?: ProjectNameAndRootFormat;
  tags?: string;
  unitTestRunner: 'jest' | 'none'; // default is jest
  pascalCaseFiles?: boolean;
  classComponent?: boolean;
  js: boolean; // default is false
  linter: Linter; // default is eslint
  setParserOptionsProject?: boolean; // default is false
  e2eTestRunner: 'detox' | 'none'; // default is detox
  standaloneConfig?: boolean;
  skipPackageJson?: boolean; // default is false
}
