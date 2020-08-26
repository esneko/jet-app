# Oracle JET Demo App

## Web Components

Oracle JET Web Components are custom components that include a defined set of properties, methods, events and slots.

```ts
import { SelectorElement } from 'ojs/ojselector'
const selectorElement = document.getElementById('someSelector') as SelectorElement
```

More examples:
- oj-input-search	(InputSearchElement)
- oj-stream-list	(StreamListElement)

## Data binding

Knockout currently provides one and two way data binding:
```ts
import { ojInputText, ojInputPassword } from 'ojs/ojinputtext'
const myInputText = document.getElementById('username') as ojInputText
const myValue = myInputText.value
myInputText.value = "esneko"
```

## Additional resourses

- [Oracle JET Web Components](https://docs.oracle.com/en/middleware/developer-tools/jet/9/develop/web-components.html)
