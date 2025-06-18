
```scss

@include lesli-css-breakpoint-small
@include lesli-css-breakpoint-mobile
@include lesli-css-breakpoint-tablet
@include lesli-css-breakpoint-desktop
@include lesli-css-breakpoint-widescreen
@include lesli-css-breakpoint-fullhd
@include lesli-css-breakpoint-touch

@include lesli-css-breakpoint-until-desktop
@include lesli-css-breakpoint-until-widescreen
@include lesli-css-breakpoint-until-fullhd

@include lesli-css-breakpoint-only-tablet
@include lesli-css-breakpoint-only-desktop
@include lesli-css-breakpoint-only-widescreen

@include lesli-css-breakpoint

// Breakpoints
@include lesli-css-breakpoint("small") {
	// your code
}

@include lesli-css-breakpoint-only("mobile") {
	// styles for min-width: 320px and max-width: 768px only
}

@include lesli-css-breakpoint-custom(100px) {
	// styles start at 100px
}

@include lesli-css-breakpoint-custom(200px, 300px) {
	// styles for min-width: 200px and max-width: 300px only
}
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/lesli-css/tree/master/docs/mixin-breakpoint.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

