var wms_layers = [];


        var lyr_BingSatlite_0 = new ol.layer.Tile({
            'title': 'Bing Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n’'
            })
        });

        var lyr_CartoPositron_1 = new ol.layer.Tile({
            'title': 'Carto Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_2023_2 = new ol.format.GeoJSON();
var features_2023_2 = format_2023_2.readFeatures(json_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023_2.addFeatures(features_2023_2);
var lyr_2023_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023_2, 
                style: style_2023_2,
                interactive: true,
                title: '<img src="styles/legend/2023_2.png" /> 2023'
            });
var format_2016_3 = new ol.format.GeoJSON();
var features_2016_3 = format_2016_3.readFeatures(json_2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2016_3.addFeatures(features_2016_3);cluster_2016_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_2016_3
});
var lyr_2016_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_2016_3, 
                style: style_2016_3,
                interactive: true,
                title: '<img src="styles/legend/2016_3.png" /> 2016'
            });
var format_DivisinMunicipalcopiar_4 = new ol.format.GeoJSON();
var features_DivisinMunicipalcopiar_4 = format_DivisinMunicipalcopiar_4.readFeatures(json_DivisinMunicipalcopiar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisinMunicipalcopiar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisinMunicipalcopiar_4.addFeatures(features_DivisinMunicipalcopiar_4);
var lyr_DivisinMunicipalcopiar_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivisinMunicipalcopiar_4, 
                style: style_DivisinMunicipalcopiar_4,
                interactive: false,
                title: '<img src="styles/legend/DivisinMunicipalcopiar_4.png" /> División Municipal copiar'
            });
var format_DivisinEstatalBlanca_5 = new ol.format.GeoJSON();
var features_DivisinEstatalBlanca_5 = format_DivisinEstatalBlanca_5.readFeatures(json_DivisinEstatalBlanca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DivisinEstatalBlanca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivisinEstatalBlanca_5.addFeatures(features_DivisinEstatalBlanca_5);
var lyr_DivisinEstatalBlanca_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DivisinEstatalBlanca_5, 
                style: style_DivisinEstatalBlanca_5,
                interactive: false,
                title: '<img src="styles/legend/DivisinEstatalBlanca_5.png" /> División Estatal Blanca'
            });

lyr_BingSatlite_0.setVisible(true);lyr_CartoPositron_1.setVisible(true);lyr_2023_2.setVisible(true);lyr_2016_3.setVisible(true);lyr_DivisinMunicipalcopiar_4.setVisible(true);lyr_DivisinEstatalBlanca_5.setVisible(true);
var layersList = [lyr_BingSatlite_0,lyr_CartoPositron_1,lyr_2023_2,lyr_2016_3,lyr_DivisinMunicipalcopiar_4,lyr_DivisinEstatalBlanca_5];
lyr_2023_2.set('fieldAliases', {'PERIODO': 'PERIODO', 'cv_credito': 'cv_credito', 'Desarrolladora': 'Desarrolladora', 'ID_CONJUNTO_HAB': 'ID_CONJUNTO_HAB', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_2016_3.set('fieldAliases', {'PERIODO': 'PERIODO', 'cv_credito': 'cv_credito', 'Desarrolladora': 'Desarrolladora', 'ID_CONJUNTO_HAB': 'ID_CONJUNTO_HAB', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_DivisinMunicipalcopiar_4.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'CV_MUN': 'CV_MUN', });
lyr_DivisinEstatalBlanca_5.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CAPITAL': 'CAPITAL', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'Area_1': 'Area_1', 'Zona_geo': 'Zona_geo', 'CV_ENTIDAD': 'CV_ENTIDAD', 'nom_abr': 'nom_abr', });
lyr_2023_2.set('fieldImages', {'PERIODO': 'Range', 'cv_credito': 'Range', 'Desarrolladora': 'TextEdit', 'ID_CONJUNTO_HAB': 'Range', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_2016_3.set('fieldImages', {'PERIODO': 'Range', 'cv_credito': 'Range', 'Desarrolladora': 'TextEdit', 'ID_CONJUNTO_HAB': 'Range', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_DivisinMunicipalcopiar_4.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'CV_MUN': 'TextEdit', });
lyr_DivisinEstatalBlanca_5.set('fieldImages', {'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CAPITAL': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'Range', 'COV_ID': 'Range', 'Area_1': 'TextEdit', 'Zona_geo': 'TextEdit', 'CV_ENTIDAD': 'TextEdit', 'nom_abr': 'TextEdit', });
lyr_2023_2.set('fieldLabels', {'PERIODO': 'header label', 'cv_credito': 'header label', 'Desarrolladora': 'header label', 'ID_CONJUNTO_HAB': 'header label', 'longitud': 'no label', 'latitud': 'no label', });
lyr_2016_3.set('fieldLabels', {'PERIODO': 'header label', 'cv_credito': 'header label', 'Desarrolladora': 'header label', 'ID_CONJUNTO_HAB': 'header label', 'longitud': 'no label', 'latitud': 'no label', });
lyr_DivisinMunicipalcopiar_4.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'CV_MUN': 'no label', });
lyr_DivisinEstatalBlanca_5.set('fieldLabels', {'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CAPITAL': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'Area_1': 'no label', 'Zona_geo': 'no label', 'CV_ENTIDAD': 'no label', 'nom_abr': 'no label', });
lyr_DivisinEstatalBlanca_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});