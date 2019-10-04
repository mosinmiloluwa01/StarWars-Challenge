{
    "compilerOptions": {
      "baseUrl": ".",
      "target": "es6",
      "module": "commonjs",
      "paths": {
        "<server>/*": ["server/*"],
        "<models>/*": ["server/models/*"],
        "<configs>/*": ["server/configs/*"],
        "<controllers>/*": ["server/controllers/*"],
        "<middlewares>/*": ["server/middlewares/*"],
        "<helpers>/*": ["server/helpers/*"],
        "<services>/*": ["server/services/*"]
      }
    },
    "exclude": [
      "node_modules",
      "**/node_modules/*",
      "build"
    ]
  }