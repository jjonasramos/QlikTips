custom = 

define( [
    'jquery'
],
function ( $ ) {
    'use strict';

    var dimensions = {
        uses: "dimensions",
		min: 0,
		max: 1
    };
    
	var measures = {
		uses: "measures",
		min: 0,
		max: 1
    };
    
	var appearanceSection = {
		uses: "settings"
    };

    var dataSection = {
        uses: "data",
    };
    
    // ============================= Seção Customizada 
    var header1 = {
        ref: "item1",
        label: "Expressão",
        type: "string",
        expression: "optional"
    };

    var header2 = {
        ref: "item2",
        label: "Rótulo",
        type: "string",
        expression: "optional"
    };

    var minhaSecao = {
        component: "expandable-items",
        label: "Minha Seção",
        items: {
            h1: {
                type: "items",
                label: "Header 1",
                items: {
                    header1,
                    header2
                }
            }            
        }
    };

    return {

        //criar os menus laterais
        definition: {
            type: "items",
            component: "accordion",
            items: {
                data: dataSection,
                customSection: minhaSecao,
                dimensions: dimensions,
                measures: measures,
                appearance: appearanceSection
            }
        },

        // executa sempre que mexe no objeto
        paint: function ( elemento, layout ) {

            elemento.empty();
            elemento.html( 'Hello World, asaK.<br/>' );


            return qlik.Promise.resolve();

        }
    };
} );