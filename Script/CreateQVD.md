# Create QVD

The below code is used to generate qvd files on Qlik script using [SUB function](https://help.qlik.com/en-US/qlikview/November2018/Subsystems/Client/Content/QV_QlikView/Scripting/ScriptControlStatements/Sub.htm)

Copy and enjoy it :)

## Version 1

```
SUB CreateQVD(Table);
  STORE [$(Table)] INTO [lib://HereIsYourLib/$(Table).qvd] (qvd);
  DROP TABLE [$(Table)];
EndSub;
```

```
CALL CreateQVD('Your Table Name without [ ]');
```

## Version 2 with specific table name

```
SUB CreateQVD(Table, Name);
  STORE [$(Table)] INTO [lib://HereIsYourLib/$(Name).qvd] (qvd);
  DROP TABLE [$(Table)];
EndSub;
```

```
CALL CreateQVD('Your Table Name without [ ]', 'Your specific table name');
```
