# prettify-json

prettify json object for output


```js
const prettifyJSON = require('prettify-json');

const o = {
  name: 'hello'
};

const json = prettifyJSON(o);
```

then you can use it in html template file

```html
<pre>
{{json}}
</pre>
```
