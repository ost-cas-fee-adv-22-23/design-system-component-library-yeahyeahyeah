![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Container
## Container properties

**Explanation:** This element serves as a wrapper element for the specific mumble feeds.

| Property|Description|
|-|-|
|layout|**box**: a colored, rounded white box. **plain**: container with no colored attributes. HTML-Element: **section**.|

## Include Container from the component library

```js
// index.tsx, index.js, index.jsx

import { Container } from "@smartive-education/design-system-component-library-yeahyeahyeah"
```

### Container *box* example

```js

<Container layout="box">
  Content goes here
</Container>

```

### Container *plain* example

```js

<Container layout="plain">
  Content goes here
</Container>

```