# Lessons Learned

## [Library](https://github.com/vanpeerdevelopment/ng2-library-demo)
### src/package.json
- `name`: name used to publish to npm registry
- `version`: version used to publish to npm registry
- `main`:
  * points to the ES5 umd bundle (`ng2-library-demo.umd.js`)
  * file which will be loaded when the library is `required`, everything available in the `exports` object is available for clients to use.
- `module`, `jsnext:main`:
  * points to the ES2015 version of the library (`ng2-library-demo.js`) (TODO: why is it called `index.js` in `dist`)
  * bundlers such as rollup and webpack use these entries to find the ES2015 version of the code
- `typings`: points to the type definitions for the library (`ng2-library-demo.d.ts`)

### Dependencies
1. Add all dependencies of the library as `peerDependency` in `src/package.json` to give the users of the library the freedom to choose the exact version of e.g. `@angular/forms` themselves
2. When adding a module dependency don't forgot to `import` it in `src/index.ts` and add it to the list of `imports`
3. When using the library in a client application make sure to also `npm install --save` these `peerDepenencies` as real dependencies. It is not necessary to import these dependencies in the client application.
4. When using the library in `npm run playground` make sure to add the `peerDependencies` as `devDependencies` to the `package.json` at the root.

### Rename module
- Rename `SampleModule` in `src/index.ts` to `Ng2LibraryDemoModule` 
- Rename `SampleModule` in `playground/index.ts` to `Ng2LibraryDemoModule`
- Rename `SampleModule` and `LibraryModule` in `README.MD` to `Ng2LibraryDemoModule`

### Publish to npm
1. create a user on [npm](https://www.npmjs.com/signup) or [nexus](http://nexus.vdab.be:8081)
2. login to npm on the command line with `npm login` to add you credentials to `~/.npmrc` or add credentials to `.npmrc` in the project, e.g. [huisstijl-angular](http://git.ops.vdab.be/vdab/huisstijl-angular/blob/master/.npmrc)
3. `npm version <update_type>` in `src` to update the [version](https://docs.npmjs.com/getting-started/semantic-versioning)
  * not necessary to do this in root `package.json` because this is not the `package.json` which will be published. It is the `package.json` in `src` which will be used to publish and which will define the version.
  * `patch` for bugfixes and minor changes
  * `minor` for new features which don't break existing features
  * `major` for changes which break backwards compatibility
  * TODO: check that this also adds a commit and tag with this release number to your git repository
4. `npm run build` to generate the `dist` folder containing the library code
5. `npm publish dist` to publish the `dist` folder to npm or nexus

## dist
- `index.js`:
  * ES5 version of the library that uses ES2015 modules
  * Used by bundlers such as rollup, webpack to be able to tree shake the unused imports
  * Generated using `tsc` based on the configuration in `src/tsconfig.es5.json`
- `ng2-library-demo.umd.js`
  * ES5 version the library that doesn't use ES2015 modules, but is in [UMD](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/) (universal module definition) format
  * Generated using `rollup` based on the configuration in `gulpfile.js`
- `*.d.ts`
  * Type definitions
  * Generated because `declarations` is true in `src/tsconfig.es5.json`
- `ng2-library-demo.metadata.json`
  * Metadata to make it possible to users of our library to compile their typescript angular application
  * Generated because `skipTemplateCodegen` is true in `src/tsconfig.es5.json`

## [Client](https://github.com/vanpeerdevelopment/ng2-library-client-demo)

## Links
- [Angular 2 library yeoman generator](https://github.com/jvandemo/generator-angular2-library)
- [Creating node modules](https://docs.npmjs.com/getting-started/creating-node-modules)
- [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Creating and publishing a node.js module](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)
- [Distributing an Angular Library](http://blog.mgechev.com/2017/01/21/distributing-an-angular-library-aot-ngc-types/)
- [Module best practicecs](https://github.com/mattdesl/module-best-practices)
- [UMD](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/)

## To Do
- [ ] Go through generated files and document + go through https://github.com/jvandemo/generator-angular2-library + list things to prune
- [ ] Check library for unused generated stuff and prune, e.g. travis, docs, samples, ...
- [ ] Document client lib
- [x] Document change name of library in `index.ts`, playground and in readme
- [ ] Check git logs for mistakes in client
- [ ] Check git logs for mistakes in library

- [x] Change name of lib
- [ ] Prune
- [ ] Add demo component (angular-forms)
- [ ] Jenkins pipeline met job-dsl (nexus, cdn, version?)
- [ ] Test nexus version in demo client
- [ ] Configure lint
- [ ] Configure tests

- [ ] Setup documentation module with documentation component
- [ ] Separate nexus, cdn entry
- [ ] Include documentation umd bundle and dependencies from cdn on http://swo.ops.vdab.be/huisstijl
- [ ] Try to use it in `<script>`, e.g. for documentation
- [ ] rollup:umd No name was provided for external module '@angular/core' in options.globals - guessing 'core' (umd naming problem)

- [ ] Deployment diagram for [huisstijl](jenkins-delivery.vdab.be:8080/job/huisstijl) and [huisstijl-angular](jenkins-delivery.vdab.be:8080/job/huisstijl-angular)
- [ ] Go over todos in [huisstijl-angular](http://git.ops.vdab.be/vdab/huisstijl-angular/blob/53020e444d8435f0083d976d94031969634a2ed1/README.md)

