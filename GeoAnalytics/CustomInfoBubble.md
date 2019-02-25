# Custom info bubble

Remember: All alternatives you can use [HTML tags](https://www.w3schools.com/tags/ref_byfunc.asp) and [Qlik Chart Expressions](https://help.qlik.com/en-US/qlikview/November2017/Subsystems/Client/Content/ChartFunctions/chart-expressions.htm).

Copy and enjoy it :)

## Info Table

```
='<b>' & Header & '</b>' & 
    '<table>
       <tr><td>'&'Label0: '&'</td><td>'& 'Value0' &'</td></tr>
       <tr><td>'&'Label1: '&'</td><td>'& 'Value1' & '</td></tr> 
       <tr><td>'&'Label2: '&'</td><td>'& 'Value2' &'</td></tr>
       <tr><td>'&'Label3: '&'</td><td>'& 'Value3' &'</td></tr>
    </table>'
```
