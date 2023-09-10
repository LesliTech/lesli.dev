# Theme
Lesli support native color customization through lesli.yml file.

## Color customization 
To customize the Lesli colors, you can use the "theme" section in lesli.yml file:

```
color_primary: [primary color, this will also change bulma primary color]
color_header: [header color background]
color_footer: [footer color background]
color_sidebar: [left sidebar color background]
color_sidebar_hover: [left sidebar color background on hover]
color_background: [body background color]

```

<br>

This is going to modify the corresponding SASS variables in the Lesli core:

```
color_primary -> $lesli-color-primary & $primary (bulma)
color_header -> $lesli-header-color
color_footer -> $lesli-footer-color
color_sidebar -> $lesli-sidebar-color
color_sidebar_hover -> $lesli-sidebar-hover
color_background -> $lesli-color-background
```


## Custom variables (Dedicated Lesli instances only or Builder engines) 
To customize the Lesli color palette you must create a variables.scss file in: builder_engine/app/assets/stylesheets/lesli/variables.scss, in this file you can override all the core SASS variables and even create a new ones:

**Examples:**

```scss
$lesli-color-primary: blue;
$lesli-color-background: white;

$lesli-header-color: white;
$lesli-header-height: 100px;

$lesli-footer-color: white;
$lesli-footer-height: 84px;

$lesli-sidebar-color: white;
$lesli-sidebar-width: 50px;

$lesli-font-color: black;
$lesli-font-size: 16px;
```

## Bulma customization 
You can customize bulma changing the value of the variables, see: [https://bulma.io/documentation/customize/variables/](https://bulma.io/documentation/customize/variables/)
