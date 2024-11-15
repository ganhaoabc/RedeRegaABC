ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([92068.826976, -81181.497779, 97371.127957, -78320.355170]);
var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Condutas2024ETRS89_1 = new ol.format.GeoJSON();
var features_Condutas2024ETRS89_1 = format_Condutas2024ETRS89_1.readFeatures(json_Condutas2024ETRS89_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Condutas2024ETRS89_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Condutas2024ETRS89_1.addFeatures(features_Condutas2024ETRS89_1);
var lyr_Condutas2024ETRS89_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Condutas2024ETRS89_1, 
                style: style_Condutas2024ETRS89_1,
                popuplayertitle: "Condutas 2024 ETRS89",
                interactive: true,
    title: 'Condutas 2024 ETRS89<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_0.png" /> Canal Campo Maior<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_1.png" /> Canal de Elvas<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_2.png" /> Condutor Geral<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_3.png" /> Distribuidor Almadragueira<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_4.png" /> Distribuidor Campo Maior<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_5.png" /> Distribuidor Carrascal<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_6.png" /> Distribuidor da Comenda<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_7.png" /> Distribuidor da Fronteira<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_8.png" /> Distribuidor da Gramicha<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_9.png" /> Distribuidor das Barrancas<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_10.png" /> Distribuidor Godinha<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_11.png" /> Regadeira Desactivada<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_12.png" /> Regadeiras Canal Campo Maior<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_13.png" /> Regadeiras Canal de Elvas<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_14.png" /> Regadeiras Condutor Geral<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_15.png" /> Regadeiras Distribuidor Almadragueira<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_16.png" /> Regadeiras Distribuidor Campo Maior<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_17.png" /> Regadeiras Distribuidor Carrascal<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_18.png" /> Regadeiras Distribuidor da Comenda<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_19.png" /> Regadeiras Distribuidor da Fronteira<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_20.png" /> Regadeiras Distribuidor da Gramicha<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_21.png" /> Regadeiras Distribuidor das Barrancas<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_22.png" /> Regadeiras Distribuidor Godinha<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_23.png" /> Regadeiras Provaveis<br />\
    <img src="styles/legend/Condutas2024ETRS89_1_24.png" /> <br />'
        });
var format_CaixasPresso2023ETRS89_2 = new ol.format.GeoJSON();
var features_CaixasPresso2023ETRS89_2 = format_CaixasPresso2023ETRS89_2.readFeatures(json_CaixasPresso2023ETRS89_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_CaixasPresso2023ETRS89_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaixasPresso2023ETRS89_2.addFeatures(features_CaixasPresso2023ETRS89_2);
var lyr_CaixasPresso2023ETRS89_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaixasPresso2023ETRS89_2, 
                style: style_CaixasPresso2023ETRS89_2,
                popuplayertitle: "Caixas Pressão 2023 ETRS89",
                interactive: true,
                title: '<img src="styles/legend/CaixasPresso2023ETRS89_2.png" /> Caixas Pressão 2023 ETRS89'
            });
var format_CaixasAuxiliares2023ETRS89_3 = new ol.format.GeoJSON();
var features_CaixasAuxiliares2023ETRS89_3 = format_CaixasAuxiliares2023ETRS89_3.readFeatures(json_CaixasAuxiliares2023ETRS89_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_CaixasAuxiliares2023ETRS89_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaixasAuxiliares2023ETRS89_3.addFeatures(features_CaixasAuxiliares2023ETRS89_3);
var lyr_CaixasAuxiliares2023ETRS89_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaixasAuxiliares2023ETRS89_3, 
                style: style_CaixasAuxiliares2023ETRS89_3,
                popuplayertitle: "Caixas Auxiliares 2023 ETRS89",
                interactive: true,
                title: '<img src="styles/legend/CaixasAuxiliares2023ETRS89_3.png" /> Caixas Auxiliares 2023 ETRS89'
            });
var format_Bocas_Rega_24_4 = new ol.format.GeoJSON();
var features_Bocas_Rega_24_4 = format_Bocas_Rega_24_4.readFeatures(json_Bocas_Rega_24_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Bocas_Rega_24_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bocas_Rega_24_4.addFeatures(features_Bocas_Rega_24_4);
var lyr_Bocas_Rega_24_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bocas_Rega_24_4, 
                style: style_Bocas_Rega_24_4,
                popuplayertitle: "Bocas_Rega_24",
                interactive: true,
    title: 'Bocas_Rega_24<br />\
    <img src="styles/legend/Bocas_Rega_24_4_0.png" /> Bruno Cardoso<br />\
    <img src="styles/legend/Bocas_Rega_24_4_1.png" /> Bruno Carvalho<br />\
    <img src="styles/legend/Bocas_Rega_24_4_2.png" /> Carlos Pires<br />\
    <img src="styles/legend/Bocas_Rega_24_4_3.png" /> João Paulo Pires<br />\
    <img src="styles/legend/Bocas_Rega_24_4_4.png" /> Manuel do Bico<br />\
    <img src="styles/legend/Bocas_Rega_24_4_5.png" /> Nuno Conceicao<br />\
    <img src="styles/legend/Bocas_Rega_24_4_6.png" /> Nuno Espada<br />\
    <img src="styles/legend/Bocas_Rega_24_4_7.png" /> Paulo Panacas<br />\
    <img src="styles/legend/Bocas_Rega_24_4_8.png" /> Pedro Carvalho<br />\
    <img src="styles/legend/Bocas_Rega_24_4_9.png" /> <br />'
        });

lyr_ESRISatellite_0.setVisible(true);lyr_Condutas2024ETRS89_1.setVisible(true);lyr_CaixasPresso2023ETRS89_2.setVisible(true);lyr_CaixasAuxiliares2023ETRS89_3.setVisible(true);lyr_Bocas_Rega_24_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Condutas2024ETRS89_1,lyr_CaixasPresso2023ETRS89_2,lyr_CaixasAuxiliares2023ETRS89_3,lyr_Bocas_Rega_24_4];
lyr_Condutas2024ETRS89_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'CANAL_REGA': 'CANAL_REGA', 'Diametro': 'Diametro', 'Shape_Leng': 'Shape_Leng', 'OBS_': 'OBS_', 'Regadeira': 'Regadeira', 'Orgão': 'Orgão', 'Macro': 'Macro', 'Contoneiro': 'Contoneiro', 'Shape_Le_1': 'Shape_Le_1', 'Zona': 'Zona', });
lyr_CaixasPresso2023ETRS89_2.set('fieldAliases', {'BOCA': 'BOCA', 'DISTRIBUID': 'DISTRIBUID', 'CANAL': 'CANAL', 'REGADEIRA': 'REGADEIRA', 'OBSERVACOE': 'OBSERVACOE', 'CAUDAL_TOM': 'CAUDAL_TOM', 'AREA_DOMIN': 'AREA_DOMIN', 'CAUDAL_T_T': 'CAUDAL_T_T', 'ID': 'ID', 'ZMATRIZ': 'ZMATRIZ', 'Caudal': 'Caudal', 'Zona': 'Zona', });
lyr_CaixasAuxiliares2023ETRS89_3.set('fieldAliases', {'Id': 'Id', 'BOCA': 'BOCA', 'DISTRIBUID': 'DISTRIBUID', 'CANAL': 'CANAL', 'REGADEIRA': 'REGADEIRA', 'OBSERVACOE': 'OBSERVACOE', 'CAUDAL_TOM': 'CAUDAL_TOM', 'AREA_DOMIN': 'AREA_DOMIN', 'ZMATRIZ': 'ZMATRIZ', 'Zona': 'Zona', });
lyr_Bocas_Rega_24_4.set('fieldAliases', {'BOCA': 'BOCA', 'DISTRIBUID': 'DISTRIBUID', 'CANAL': 'CANAL', 'REGADEIRA': 'REGADEIRA', 'OBSERVACOE': 'OBSERVACOE', 'CAUDAL_TOM': 'CAUDAL_TOM', 'AREA_DOMIN': 'AREA_DOMIN', 'CAUDAL_T_T': 'CAUDAL_T_T', 'ZMATRIZ': 'ZMATRIZ', 'Caudal': 'Caudal', 'C_X': 'C_X', 'C_Y': 'C_Y', 'Id': 'Id', 'Direção': 'Direção', 'Macro': 'Macro', 'Orgão': 'Orgão', 'Cantoneiro': 'Cantoneiro', 'OBSERV': 'OBSERV', 'Predio': 'Predio', 'Local': 'Local', 'ZonaRega': 'ZonaRega', });
lyr_Condutas2024ETRS89_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'CANAL_REGA': 'TextEdit', 'Diametro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'OBS_': 'TextEdit', 'Regadeira': 'TextEdit', 'Orgão': 'TextEdit', 'Macro': 'TextEdit', 'Contoneiro': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Zona': 'TextEdit', });
lyr_CaixasPresso2023ETRS89_2.set('fieldImages', {'BOCA': 'TextEdit', 'DISTRIBUID': 'TextEdit', 'CANAL': 'TextEdit', 'REGADEIRA': 'TextEdit', 'OBSERVACOE': 'TextEdit', 'CAUDAL_TOM': 'TextEdit', 'AREA_DOMIN': 'TextEdit', 'CAUDAL_T_T': 'TextEdit', 'ID': 'Range', 'ZMATRIZ': 'TextEdit', 'Caudal': 'TextEdit', 'Zona': 'TextEdit', });
lyr_CaixasAuxiliares2023ETRS89_3.set('fieldImages', {'Id': 'TextEdit', 'BOCA': 'TextEdit', 'DISTRIBUID': 'TextEdit', 'CANAL': 'TextEdit', 'REGADEIRA': 'TextEdit', 'OBSERVACOE': 'TextEdit', 'CAUDAL_TOM': 'TextEdit', 'AREA_DOMIN': 'TextEdit', 'ZMATRIZ': 'TextEdit', 'Zona': 'TextEdit', });
lyr_Bocas_Rega_24_4.set('fieldImages', {'BOCA': 'TextEdit', 'DISTRIBUID': 'TextEdit', 'CANAL': 'TextEdit', 'REGADEIRA': 'TextEdit', 'OBSERVACOE': 'TextEdit', 'CAUDAL_TOM': 'TextEdit', 'AREA_DOMIN': 'TextEdit', 'CAUDAL_T_T': 'TextEdit', 'ZMATRIZ': 'TextEdit', 'Caudal': 'TextEdit', 'C_X': 'TextEdit', 'C_Y': 'TextEdit', 'Id': 'TextEdit', 'Direção': 'TextEdit', 'Macro': 'TextEdit', 'Orgão': 'TextEdit', 'Cantoneiro': 'TextEdit', 'OBSERV': 'TextEdit', 'Predio': 'Range', 'Local': 'TextEdit', 'ZonaRega': 'TextEdit', });
lyr_Condutas2024ETRS89_1.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'CANAL_REGA': 'inline label - always visible', 'Diametro': 'hidden field', 'Shape_Leng': 'inline label - always visible', 'OBS_': 'hidden field', 'Regadeira': 'inline label - always visible', 'Orgão': 'inline label - always visible', 'Macro': 'hidden field', 'Contoneiro': 'inline label - always visible', 'Shape_Le_1': 'hidden field', 'Zona': 'hidden field', });
lyr_CaixasPresso2023ETRS89_2.set('fieldLabels', {'BOCA': 'inline label - always visible', 'DISTRIBUID': 'hidden field', 'CANAL': 'hidden field', 'REGADEIRA': 'hidden field', 'OBSERVACOE': 'hidden field', 'CAUDAL_TOM': 'hidden field', 'AREA_DOMIN': 'hidden field', 'CAUDAL_T_T': 'hidden field', 'ID': 'hidden field', 'ZMATRIZ': 'hidden field', 'Caudal': 'hidden field', 'Zona': 'hidden field', });
lyr_CaixasAuxiliares2023ETRS89_3.set('fieldLabels', {'Id': 'hidden field', 'BOCA': 'inline label - always visible', 'DISTRIBUID': 'hidden field', 'CANAL': 'hidden field', 'REGADEIRA': 'hidden field', 'OBSERVACOE': 'hidden field', 'CAUDAL_TOM': 'hidden field', 'AREA_DOMIN': 'hidden field', 'ZMATRIZ': 'hidden field', 'Zona': 'hidden field', });
lyr_Bocas_Rega_24_4.set('fieldLabels', {'BOCA': 'inline label - always visible', 'DISTRIBUID': 'inline label - always visible', 'CANAL': 'inline label - always visible', 'REGADEIRA': 'inline label - visible with data', 'OBSERVACOE': 'hidden field', 'CAUDAL_TOM': 'hidden field', 'AREA_DOMIN': 'hidden field', 'CAUDAL_T_T': 'hidden field', 'ZMATRIZ': 'hidden field', 'Caudal': 'hidden field', 'C_X': 'hidden field', 'C_Y': 'hidden field', 'Id': 'hidden field', 'Direção': 'hidden field', 'Macro': 'hidden field', 'Orgão': 'hidden field', 'Cantoneiro': 'hidden field', 'OBSERV': 'hidden field', 'Predio': 'hidden field', 'Local': 'hidden field', 'ZonaRega': 'hidden field', });
lyr_Bocas_Rega_24_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});