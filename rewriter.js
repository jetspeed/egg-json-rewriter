module.exports = options => {
  return async function rewriter(ctx, next) {
    const url = ctx.url

    ctx.url = url.replace(/\.json/g, '');
    await next();
  };
};
