![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/smartive-education/design-system-component-library-yeahyeahyeah)
# Heading
## Heading properties
| Property|Description|
|-|-|
|alignment|Horizontal *alignment*. Default *left*. Same functionality is in [Paragraph](./?path=/docs/typography-paragraph--paragraph-variants "Heading") implemented.| 
|color|Different *slate* **tone** variants. Caution! Always consider background contrast ratio.|
|label|Heading text.|
|mbSpacing|Margin bottom negative spacing. Creates a gap - negative spacing - to the next HTML element below.|
|size|Always use *large* for message starter elements. Futher details on [Mumble](./?path=/docs/mumble-mumble--mumble-story) component.|
|tag|Choose your heading **tag**. Before you select your *tag*, keep an eye on semantic [HTML order structure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements?retiredLocale=de).|

## Include Heading from the component library

```js
// index.tsx, index.js, index.jsx

import { Heading } from "@smartive-education/design-system-component-library-yeahyeahyeah"

```

### Heading *default* example

```js

<Heading
  alignment="left"
  color="light"
  label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
  mbSpacing="0"
  size="default"
  tag="h1"
/>

```

### Heading *violet* example

```js

<Heading
  alignment="left"
  color="violet"
  label="Lorem ipsum dolor sit amet, consetetur sadipscing elitr..."
  mbSpacing="0"
  size="default"
  tag="h1"
/>

```