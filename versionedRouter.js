const Router = require("koa-router");

const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");

const versions = ["v0"];

const router = new Router();

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const getHandler = versionedDestination => {
  return require(`./${versionedDestination}`);
};

versions.forEach(version => {
  const versionDestinations = getDirectories(version);
  versionDestinations.forEach(versionedDestination => {
    const handler = getHandler(versionedDestination);
    handler.initialize();
    router.post(`/${versionedDestination}`, (ctx, next) => {
      ctx.body = handler.transform(ctx.request.body);
    });
  });
});

module.exports = router;
