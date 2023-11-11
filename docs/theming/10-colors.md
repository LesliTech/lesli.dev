# Colors


## Logos

<div class="columns mt-4">
    <div class="column pt-4 pl-6 pb-6 has-background-grey-lighter">
        <h4 class="mb-2">Standard</h4>
        <%= image_tag("brand/lesli-name.svg", :alt => "Lesli logo", :width => "200") %>
    </div>
    <div class="column pt-4 pl-6 pb-6 has-background-grey-darker">
        <h4 class="mb-2 has-text-white">Negative</h4>
        <%= image_tag("brand/lesli-name-white.svg", :alt => "Lesli logo", :width => "200") %>
    </div>
</div>

<br><br>

## Primary colors
<div class="columns mt-1 lesli-css-color-collections">
    <div class="column">
        <div class="has-text-centered py-6 has-text-white" style="background:#0d52bf;">
            LESLI BLUE <br> #0D52Bf
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white" style="background:#001f66;">
            DARK BLUE<br> #001F66
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-primary" style="background:#EBF1FF;">
            FADED BLUE <br> #EBF1FF
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white" style="background:#7E9BF1;">
            EASY BLUE <br> #7E9BF1
        </div>
    </div>
</div>

<br><br>

## Collection colors
<div class="columns mt-1 lesli-css-color-collections">
    <div class="column"> 
        <div class="has-text-centered py-6 has-text-white lesli-css-color-collection-administration">
            Administration
        </div>
    </div>
    <div class="column"> 
        <div class="has-text-centered py-6 has-text-white lesli-css-color-collection-intelligence">
            Intelligence
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white lesli-css-color-collection-productivity">
            Productivity
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black lesli-css-color-collection-integration">
            Integration
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black lesli-css-color-collection-analytics">
            Analytics
        </div>
    </div>
</div>
<div class="columns lesli-css-color-collections">
    <div class="column">
        <div class="has-text-centered py-6 has-text-black lesli-css-color-collection-security">
            Security
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white lesli-css-color-collection-finance">
            Finance
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-white lesli-css-color-collection-sales">
            Sales
        </div>
    </div>
    <div class="column">
        <div class="has-text-centered py-6 has-text-black lesli-css-color-collection-it">
            IT
        </div>
    </div>
</div>

<br><br>

## General colors
```raw
<% [
    "blue",  "lime", "mint","banana","orange", "bubble", "berry", "grape",
    "cocoa",  "silver", "slate", "black"
].each do |color| %>
    <div class="columns mt-1 lesli-css-colors">
        <% [100, 300, 500, 700, 900].each do |variant| %>
            <div class="column">
                <div class="lesli-css-color-<%= color %>-<%= variant %>">
                </div>
                <p class="has-text-centered">
                    color(<%= color %>, <%= variant %>)
                </p>
            </div>
        <% end %>
    </div>
<% end %>
```
