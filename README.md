# Remix / React Router TopLoader

- A Remix and React Router Top Loading bar Component **heavily** inspired by [Next.js TopLoader](https://github.com/TheSGJ/nextjs-toploader). Based on [NProgress](https://www.npmjs.com/package/nprogress)

> :exclamation: This is my first package. Contributions are welcomed 👍

![Remix/Router v7 Top Loader](https://github.com/user-attachments/assets/99723ebb-c35b-4d47-b14c-577aeaa5aa22)

## Install

using npm:

```bash
npm install remix-toploader
```

using yarn:

```bash
yarn add remix-toploader
```

using pnpm:

```bash
pnpm add remix-toploader
```

## Usage

import using:

```js
// in Remix v2
import RemixTopLoader from "remix-toploader";
// or
import { RemixTopLoader } from "remix-toploader";

// in React Router v7
import { RouterTopLoader } from "remix-toploader";
```

Navigate to `root.tsx` of your app and add `<RemixTopLoader />` to the `<body>` tag.

```js
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* in Remix v2 */}
        <RemixTopLoader />
        {/* in React Router v7 */}
        <RouterTopLoader />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

### Default Configuration

Default styles and configuration without any props passed

```jsx
<RemixTopLoader
  color="#2299DD"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  zIndex={1600}
  showAtBottom={false}
/>
```

- `color`: to change the default color of TopLoader.
- `initialPosition`: to change initial position for the TopLoader in percentage, : `0.08 = 8%`.
- `crawlSpeed`: increment delay speed in `ms`.
- `speed`: animation speed for the TopLoader in `ms`
- `easing`: animation settings using easing (a CSS easing string).
- `height`: height of TopLoader in `px`.
- `crawl`: auto incrementing behavior for the TopLoader.
- `showSpinner`: to show spinner or not.
- `shadow`: a smooth shadow for the TopLoader. (set to `false` to disable it)
- `template`: to include custom HTML attributes for the TopLoader.
- `zIndex`: defines zIndex for the TopLoader.
- `showAtBottom`: To show the TopLoader at bottom. (increase height for the TopLoader to ensure it's visibility at the mobile devices)

#### `RemixTopLoaderProps`

| **Name**            | **Type**          | **Default Value**                                                                                                                       |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `color`             | `string`          | `"#2299DD"`                                                                                                                             |
| `initialPosition`   | `number`          | `0.08`                                                                                                                                  |
| `crawlSpeed`        | `number`          | `200`                                                                                                                                   |
| `height`            | `number`          | `3`                                                                                                                                     |
| `crawl`             | `boolean`         | `true`                                                                                                                                  |
| `showSpinner`       | `boolean`         | `true`                                                                                                                                  |
| `easing`            | `string`          | `"ease"`                                                                                                                                |
| `speed`             | `number`          | `200`                                                                                                                                   |
| `shadow`            | `string \| false` | `"0 0 10px #2299DD,0 0 5px #2299DD"`                                                                                                    |
| `template`          | `string`          | `"<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>"` |
| `zIndex`            | `number`          | `1600`                                                                                                                                  |
| `showAtBottom`      | `boolean`         | `false`                                                                                                                                 |
| `showForHashAnchor` | `boolean`         | `true`                                                                                                                                  |
