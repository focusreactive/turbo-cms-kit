module.exports = {
  root: true,
  extends: ["@shared/eslint-config"],
  settings: {
    next: {
      rootDir: ["apps/sanity", "apps/storyblok"],
    },
  },
}
