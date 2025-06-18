
# Chart Line

The chart line is a wrapper of [Apexchart line](https://apexcharts.com/docs/chart-types/line-chart/). We keep the compatibility with almost all the configuration supported by the original chart object. For more information you can refer to the original documentation.

### Props

| prop   | type             | required | notes |
| ---    | ---              | ---      | ---   |
| title  | string           | true     | Title and main message to include within the graph |
| series | array of objects | true     | The set of data. You can combine as many objects as needed |
| labels | array of strings | true     | Main description of every data in the series data array. |

<br />

### Example of a simple chart:

```html
<lesli-chart-line 
    title="My daily activity graph"
    :series="[{ data:[4, 1, 4, 2, 5] }]"
    :labels="['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']">
</lesli-chart-line>
```

<lesli-chart-line 
    title="My daily activity graph"
    :series="[{ data:[4, 1, 4, 2, 5] }]"
    :labels="['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']">
</lesli-chart-line>

<hr />


### Example of a multiple series chart:

```html
<lesli-chart-line 
    title="My daily activity graph"
    :series="[{ name: 'Last week', data:[4, 1, 4, 2, 5] }, { name: 'Current week', data:[3, 2, 5, 4, 2] }]"
    :labels="['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']">
</lesli-chart-line>
```

<lesli-chart-line 
    title="My daily activity graph"
    :series="[{ name: 'Last week', data:[4, 1, 4, 2, 5] }, { name: 'Current week', data:[3, 2, 5, 4, 2] }]"
    :labels="['Monday','Tuesday','Wednesday', 'Thursday', 'Friday']">
</lesli-chart-line>

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliView/tree/master/docs/chart-line.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/06/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

