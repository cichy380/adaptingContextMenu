# jQuery Adapting Context Menu plugin

Plugin generate menu that looks like the browser default context menu.

Live demo on: _[link.will.be.added.soon](#)_

## Browser and Operating System support

|         | Chrome             | Firefox | IE   |
| --------| ------------------ | ------- | ---- |
| Windows | :heavy_check_mark: | :x:     | :x:  |
| Linux   | :x:                | :x:     | :x:  |
| Mac     | :x:                | :x:     | :x:  |

## Setup

Just download the [latest package](https://github.com/cichy380/adaptingContextMenu/archive/master.zip) and put it at the 
[bottom](https://developer.yahoo.com/performance/rules.html#js_bottom) of your markup right after jQuery:

```html
<script src="path/to/jquery.js"></script>
<script src="path/to/jquery.adaptingContextMenu.js"></script>
```

### Usage

Adapting Context Menu needs to be activated from JavaScript. Call the plugin function with options on the area element 
which you want to using it.

HTML:
```html
<span class="custom-context-menu">right click me</span>
```

JavaScript:
```javascript
var options = {
  items: [{
      text: 'First link',
      href: '#',
    },{
      text: 'Second link opens in new tab',
      href: '#',
      target: '_blank',
    },{
      text: '---', // separator
    },{
      text: 'Third item triggers JS function',
      click: function () {console.log('Third item clicked')},
  }],
};

$('.custom-context-menu').adaptingContextMenu(options);
```

Live demo on: _[link.will.be.added.soon](#)_

### Options

| Name  | Type   | Default                 | &nbsp;                                   | 
| ------| ------ | ----------------------- | ---------------------------------------- |
| items | array  | `[]`                    | Array of menu item objects               |
| id    | string | `"custom-context-menu"` | Custom `id` attribute of context menu    |
| class | string | `""`                      | Custom `class` attribute of context menu |

Available params of item object:

| Name   | Type   | &nbsp;  | 
| ------ | ------ | --------------------------------------------------------------------------------------------------- |
| text   | string  | Label text of item (anchor) or `"---"` will convert to separator horizontal ruler                  |
| href   | string | Any URL address                                                                                     |
| target | string | [`target` attribute](https://www.w3schools.com/Tags/att_a_target.asp) of link item (eg. `"_blank"`) |
| click  | function | Function triggered after click on this item                                                       |

## License

Code released under the [MIT license](https://github.com/cichy380/adaptingContextMenu/blob/master/LICENSE).
