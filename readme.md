# Oracle JET Web App

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

## Custom events

For example:
- oj-list-view

Applications can register an `itemAction` event which will be fired when user performs an action gesture on an item while `ListView` is in navigation mode. The action gestures include:
- User clicks anywhere in an item
- User taps anywhere in an item
- User pressed enter key while an item or its content has focus

## Additional resourses

- [Developing Applications with Oracle JET - Web Components](https://docs.oracle.com/en/middleware/developer-tools/jet/9.1/develop/web-components.html)
- [Oracle JET Web Components](https://www.oracle.com/webfolder/technetwork/jet/jsdocs/CustomElementOverview.html)
