# Lessons Learned

## [Library](https://github.com/vanpeerdevelopment/ng2-library-demo)
### src/package.json
- name: name used to publish to npm registry
- version: version used to publish to npm registry
- main: file which will be loaded when the library is `required`, everything available in the `exports` object is available for clients to use.

### Dependencies
1. Add all dependencies of the library as `peerDependency` in `src/package.json` to give the users of the library the freedom to choose the exact version of e.g. `@angular/forms` themselves
2. When adding a module dependency don't forgot to `import` it in `src/index.ts` and add it to the list of `imports`
3. When using the library in a client application make sure to also `npm install --save` these `peerDepenencies` as real dependencies. It is not necessary to import these dependencies in the client application.
4. When using the library in `npm run playground` make sure to add the `peerDependencies` as `devDependencies` to the `package.json` at the root.

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

## [Client](https://github.com/vanpeerdevelopment/ng2-library-client-demo)

## To Do
- [ ] Document change name of library in `index.ts`, playground and in readme
- [ ] Check git logs for mistakes in client
- [ ] Check git logs for mistakes in library
- [ ] Check library for unused generated stuff and prune, e.g. travis
- [ ] Try to use it in `<script>`, e.g. for documentation
- [ ] Deployment diagram for [huisstijl](jenkins-delivery.vdab.be:8080/job/huisstijl) and [huisstijl-angular](jenkins-delivery.vdab.be:8080/job/huisstijl-angular)
- [ ] Go over todos in [huisstijl-angular](http://git.ops.vdab.be/vdab/huisstijl-angular/blob/master/README.md)