# Lesli Database structure

The database structure of Lesli and all the engines must be documented and maintained within the respective engine in the following path: *engine\_root/docs/database.md*. If you make any changes that add, remove or renumber any table, you **must** document it within this file, or your pull request will be rejected. 


## Namespace and Table Number Standard and Required Tables 
To calculate engines and tables numerations, you should meet the following requirements:

**1.** Each engine has an account table, that isolates the resources to each account, this table is always the code **CC.EE.00.01** 

**2.** After the account, the catalogs namespace is used with the numeration **CC.EE.01**. A catalog table is a table that has only data, with no foreign key other than the account, and is used to provide data to other more complex tables. Your first catalog table must have the code **CC.EE.01.01** 

**3.** The workflows namespace is next and it contains the codes **CC.EE.02.TT** starting with the table **CC.EE.02.01**: **cloud\_ENGINE\_workflows** 

**4.** The custom\_fields namespace is next and it contains the codes **CC.EE.03.TT** starting with the table **CC.EE.03.01**: **cloud\_ENGINE\_custom_fields** 

**5.** The custom_validations namespace is next and it contains the codes **CC.EE.04.TT** starting with the table **CC.EE.04.01**: **cloud\_ENGINE\_custom\_validations**

**6.** The dashboards namespace is next and it contains the codes **CC.EE.05.TT** starting with the table **CC.EE.05.01**: **cloud\_ENGINE\_dashboards** 

The codes **CC.EE.06.TT** to **CC.EE.09.TT** are reserved for future usage. 

After this you can create any number of tables depending on the amount of resources you will have in your engine. Starting with the namespace **CC.EE.10**, these tables have the following format:

```
- **CC.EE.10.00** Main table
- **CC.EE.10.01** Main table actions
- **CC.EE.10.02** Main table activities
- **CC.EE.10.03** Main table discussions
- **CC.EE.10.04** Main table subscribers
- **CC.EE.10.05** Main table files
- **CC.EE.10.06** Main table custom\_field\_values
- **CC.EE.10.07** to **10.09** are reserved
- **CC.EE.10.10** and higher are for your custom tables
```


## Example of database.md file

Here is an example of a database.md file for the CloudHelp engine (code **07.02**) (this is just an example, for the real database documentation you should review the **DATABASE STRUCTURE** section):

```
    00.01. help/account                     # Required table

    01.01. help/catalogs                    # Required table
    01.02. help/catalog/ticket_categories 
    01.03. help/catalog/ticket_priorities

    01.01. help/catalog_workspaces                    
    01.02. help/catalog_categories 
    01.03. help/catalog_priorities


    02.01. help/workflows                   # Required table
    02.02. help/workflow/statuses           # Required table
    02.03. help/workflow/associations       # Required table
    02.04. help/workflow/actions            # Required table

    03.01. help/custom_fields               # Required table

    04.01. help/custom_validations          # Required table
    04.02. help/custom_validation/rules     # Required table
    04.03. help/custom_validation/fields    # Required table

    05.01. help/dashboards                  # Required table
    05.02. help/dasboard/components         # Required table

    # Note that here 06.XX to 09.XX are unused and reserved

    10.00. help/tickets
    10.01. help/ticket/actions              # Required child table for tickets
    10.02. help/ticket/activities           # Required child table for tickets
    10.03. help/ticket/discussions          # Required child table for tickets
    10.04. help/ticket/subscribers          # Required child table for tickets
    10.05. help/ticket/files                # Required child table for tickets
    10.06. help/ticket/custom_field_values  # Required child table for tickets
    10.10. help/ticket/timelines
    10.11. help/ticket/assignments

    11.00. help/slas
    11.01. help/sla/actions                 # Required child table for tickets
    11.02. help/sla/activities              # Required child table for tickets
    11.03. help/sla/discussions             # Required child table for tickets
    11.04. help/sla/subscribers             # Required child table for tickets
    11.05. help/sla/files                   # Required child table for tickets
    11.06. help/sla/custom_field_values     # Required child table for tickets
    11.10. help/sla/associations
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Lesli/tree/master/docs/database/structure.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/03/24</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

