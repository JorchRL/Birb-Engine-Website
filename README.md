# Birb Engine website

This repo is for the website for the Birb Engine I am working on at https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno

I am of course using Deno, with the [fresh framework](https://fresh.deno.dev/)

## Using TWind

I am working on integrating the Twind with the fresh framework in a way that makes sense to me.
Maybe I could share it as a template?

Im using a `twind.config.ts` file and a `useStyles()` custom hook. 
As well as the setup `/routes/_render.ts` to [add twind support to fresh](https://github.com/lucacasonato/fresh/blob/main/www/routes/_render.ts)

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### License

MIT.

:D 