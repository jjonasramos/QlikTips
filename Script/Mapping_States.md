# Qlik Maps

The below code use [Mapping Table](https://help.qlik.com/en-US/sense/February2019/Subsystems/Hub/Content/Sense_Hub/Scripting/ScriptPrefixes/Mapping.htm).

Copy and enjoy it :)

## Version 1 - States of Brazil - State to Abbreviation

```
Mapping_States:
Mapping Load * Inline [
  STATE,               STATE_ABBR	  	 
  Acre,                AC
  Alagoas,             AL
  Amapá,               AP
  Amazonas,            AM 
  Bahia,               BA
  Ceará,               CE
  Distrito Federal,    DF
  Espírito Santo,      ES
  Goiás,               GO
  Maranhão,            MA
  Mato Grosso,         MT
  Mato Grosso do Sul,  MS
  Minas Gerais,        MG
  Pará,                PA
  Paraíba,             PB
  Paraná,              PR
  Pernambuco,          PE
  Piauí,               PI
  Rio de Janeiro,      RJ
  Rio Grande do Norte, RN
  Rio Grande do Sul,   RS
  Rondônia,            RO
  Roraima,             RR
  Santa Catarina,      SC
  São Paulo,           SP
  Sergipe,             SE
  Tocantins,           TO
];
```
## Version 2 - States of Brazil - Abbreviation to State

```
Mapping_States:
Mapping Load * Inline [
  STATE_ABBR,  STATE	  	 
  AC,          Acre
  AL,          Alagoas
  AP,          Amapá
  AM,          Amazonas
  BA,          Bahia
  CE,          Ceará
  DF,          Distrito Federal
  ES,          Espírito Santo
  GO,          Goiás
  MA,          Maranhão
  MT,          Mato Grosso
  MS,          Mato Grosso do Sul
  MG,          Minas Gerais
  PA,          Pará
  PB,          Paraíba
  PR,          Paraná
  PE,          Pernambuco
  PI,          Piauí
  RJ,          Rio de Janeiro
  RN,          Rio Grande do Norte
  RS,          Rio Grande do Sul
  RO,          Rondônia
  RR,          Roraima
  SC,          Santa Catarina
  SP,          São Paulo
  SE,          Sergipe
  TO,          Tocantins
];
```
