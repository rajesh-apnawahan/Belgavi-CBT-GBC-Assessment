var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundary_1 = new ol.format.GeoJSON();
var features_BelgaviBoundary_1 = format_BelgaviBoundary_1.readFeatures(json_BelgaviBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_1.addFeatures(features_BelgaviBoundary_1);
var lyr_BelgaviBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_1, 
                style: style_BelgaviBoundary_1,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_1.png" /> Belgavi Boundary'
            });
var format_Temple_2 = new ol.format.GeoJSON();
var features_Temple_2 = format_Temple_2.readFeatures(json_Temple_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_2.addFeatures(features_Temple_2);
var lyr_Temple_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_2, 
                style: style_Temple_2,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_2.png" /> Temple'
            });
var format_Education_3 = new ol.format.GeoJSON();
var features_Education_3 = format_Education_3.readFeatures(json_Education_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_3.addFeatures(features_Education_3);
var lyr_Education_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_3, 
                style: style_Education_3,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_3.png" /> Education'
            });
var format_BelgaviPSU_4 = new ol.format.GeoJSON();
var features_BelgaviPSU_4 = format_BelgaviPSU_4.readFeatures(json_BelgaviPSU_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPSU_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPSU_4.addFeatures(features_BelgaviPSU_4);
var lyr_BelgaviPSU_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPSU_4, 
                style: style_BelgaviPSU_4,
                popuplayertitle: "Belgavi PSU",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPSU_4.png" /> Belgavi PSU'
            });
var format_BelgaviOffice_5 = new ol.format.GeoJSON();
var features_BelgaviOffice_5 = format_BelgaviOffice_5.readFeatures(json_BelgaviOffice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOffice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOffice_5.addFeatures(features_BelgaviOffice_5);
var lyr_BelgaviOffice_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOffice_5, 
                style: style_BelgaviOffice_5,
                popuplayertitle: "Belgavi Office",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOffice_5.png" /> Belgavi Office'
            });
var format_BelgaviIndustries_6 = new ol.format.GeoJSON();
var features_BelgaviIndustries_6 = format_BelgaviIndustries_6.readFeatures(json_BelgaviIndustries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviIndustries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviIndustries_6.addFeatures(features_BelgaviIndustries_6);
var lyr_BelgaviIndustries_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviIndustries_6, 
                style: style_BelgaviIndustries_6,
                popuplayertitle: "Belgavi Industries",
                interactive: true,
                title: '<img src="styles/legend/BelgaviIndustries_6.png" /> Belgavi Industries'
            });
var format_BelgaviRailwayStn_7 = new ol.format.GeoJSON();
var features_BelgaviRailwayStn_7 = format_BelgaviRailwayStn_7.readFeatures(json_BelgaviRailwayStn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRailwayStn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRailwayStn_7.addFeatures(features_BelgaviRailwayStn_7);
var lyr_BelgaviRailwayStn_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRailwayStn_7, 
                style: style_BelgaviRailwayStn_7,
                popuplayertitle: "Belgavi Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/BelgaviRailwayStn_7.png" /> Belgavi Railway Stn'
            });
var format_BelgaviRWI_8 = new ol.format.GeoJSON();
var features_BelgaviRWI_8 = format_BelgaviRWI_8.readFeatures(json_BelgaviRWI_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRWI_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRWI_8.addFeatures(features_BelgaviRWI_8);
var lyr_BelgaviRWI_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRWI_8, 
                style: style_BelgaviRWI_8,
                popuplayertitle: "Belgavi RWI",
                interactive: true,
    title: 'Belgavi RWI<br />\
    <img src="styles/legend/BelgaviRWI_8_0.png" /> -0.18 - 0.175<br />\
    <img src="styles/legend/BelgaviRWI_8_1.png" /> 0.175 - 0.225<br />\
    <img src="styles/legend/BelgaviRWI_8_2.png" /> 0.225 - 0.251<br />\
    <img src="styles/legend/BelgaviRWI_8_3.png" /> 0.251 - 0.367<br />\
    <img src="styles/legend/BelgaviRWI_8_4.png" /> 0.367 - 0.519<br />\
    <img src="styles/legend/BelgaviRWI_8_5.png" /> 0.519 - 0.582<br />\
    <img src="styles/legend/BelgaviRWI_8_6.png" /> 0.582 - 0.671<br />\
    <img src="styles/legend/BelgaviRWI_8_7.png" /> 0.671 - 0.774<br />\
    <img src="styles/legend/BelgaviRWI_8_8.png" /> 0.774 - 0.837<br />\
    <img src="styles/legend/BelgaviRWI_8_9.png" /> 0.837 - 0.89<br />\
    <img src="styles/legend/BelgaviRWI_8_10.png" /> 0.89 - 0.972<br />\
    <img src="styles/legend/BelgaviRWI_8_11.png" /> 0.972 - 1.354<br />\
    <img src="styles/legend/BelgaviRWI_8_12.png" /> 1.354 - 1.399<br />\
    <img src="styles/legend/BelgaviRWI_8_13.png" /> 1.399 - 1.478<br />\
    <img src="styles/legend/BelgaviRWI_8_14.png" /> 1.478 - 1.593<br />'
        });
var format_Belgavistats_9 = new ol.format.GeoJSON();
var features_Belgavistats_9 = format_Belgavistats_9.readFeatures(json_Belgavistats_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistats_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistats_9.addFeatures(features_Belgavistats_9);
var lyr_Belgavistats_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistats_9, 
                style: style_Belgavistats_9,
                popuplayertitle: "Belgavi stats",
                interactive: true,
                title: '<img src="styles/legend/Belgavistats_9.png" /> Belgavi stats'
            });
var format_RouteGPCCBTMtrs_10 = new ol.format.GeoJSON();
var features_RouteGPCCBTMtrs_10 = format_RouteGPCCBTMtrs_10.readFeatures(json_RouteGPCCBTMtrs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteGPCCBTMtrs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteGPCCBTMtrs_10.addFeatures(features_RouteGPCCBTMtrs_10);
var lyr_RouteGPCCBTMtrs_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteGPCCBTMtrs_10, 
                style: style_RouteGPCCBTMtrs_10,
                popuplayertitle: "Route GPC-CBT Mtrs",
                interactive: true,
                title: '<img src="styles/legend/RouteGPCCBTMtrs_10.png" /> Route GPC-CBT Mtrs'
            });
var format_StopsGPCCBT_11 = new ol.format.GeoJSON();
var features_StopsGPCCBT_11 = format_StopsGPCCBT_11.readFeatures(json_StopsGPCCBT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsGPCCBT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsGPCCBT_11.addFeatures(features_StopsGPCCBT_11);
var lyr_StopsGPCCBT_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsGPCCBT_11, 
                style: style_StopsGPCCBT_11,
                popuplayertitle: "Stops GPC-CBT",
                interactive: true,
    title: 'Stops GPC-CBT<br />\
    <img src="styles/legend/StopsGPCCBT_11_0.png" /> 2nd GATE<br />\
    <img src="styles/legend/StopsGPCCBT_11_1.png" /> ASHOKA PLANT 2<br />\
    <img src="styles/legend/StopsGPCCBT_11_2.png" /> CBT<br />\
    <img src="styles/legend/StopsGPCCBT_11_3.png" /> COLLEGE ROAD<br />\
    <img src="styles/legend/StopsGPCCBT_11_4.png" /> COURT<br />\
    <img src="styles/legend/StopsGPCCBT_11_5.png" /> DSC<br />\
    <img src="styles/legend/StopsGPCCBT_11_6.png" /> FISH MARKET<br />\
    <img src="styles/legend/StopsGPCCBT_11_7.png" /> GP COLONY<br />\
    <img src="styles/legend/StopsGPCCBT_11_8.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/StopsGPCCBT_11_9.png" /> RCN 2 STAGE<br />\
    <img src="styles/legend/StopsGPCCBT_11_10.png" /> RTO<br />\
    <img src="styles/legend/StopsGPCCBT_11_11.png" /> Sardar Ground b/s<br />\
    <img src="styles/legend/StopsGPCCBT_11_12.png" /> <br />'
        });
var format_CBTGPCRtPop1000Mtrs_12 = new ol.format.GeoJSON();
var features_CBTGPCRtPop1000Mtrs_12 = format_CBTGPCRtPop1000Mtrs_12.readFeatures(json_CBTGPCRtPop1000Mtrs_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop1000Mtrs_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop1000Mtrs_12.addFeatures(features_CBTGPCRtPop1000Mtrs_12);
var lyr_CBTGPCRtPop1000Mtrs_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop1000Mtrs_12, 
                style: style_CBTGPCRtPop1000Mtrs_12,
                popuplayertitle: "CBT-GPC Rt Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop1000Mtrs_12.png" /> CBT-GPC Rt Pop 1000 Mtrs'
            });
var format_CBTGPCRtPop500Mtrs_13 = new ol.format.GeoJSON();
var features_CBTGPCRtPop500Mtrs_13 = format_CBTGPCRtPop500Mtrs_13.readFeatures(json_CBTGPCRtPop500Mtrs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop500Mtrs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop500Mtrs_13.addFeatures(features_CBTGPCRtPop500Mtrs_13);
var lyr_CBTGPCRtPop500Mtrs_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop500Mtrs_13, 
                style: style_CBTGPCRtPop500Mtrs_13,
                popuplayertitle: "CBT-GPC Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop500Mtrs_13.png" /> CBT-GPC Rt Pop 500 Mtrs'
            });
var format_CBTGPCRtPop250Mtrs_14 = new ol.format.GeoJSON();
var features_CBTGPCRtPop250Mtrs_14 = format_CBTGPCRtPop250Mtrs_14.readFeatures(json_CBTGPCRtPop250Mtrs_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop250Mtrs_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop250Mtrs_14.addFeatures(features_CBTGPCRtPop250Mtrs_14);
var lyr_CBTGPCRtPop250Mtrs_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop250Mtrs_14, 
                style: style_CBTGPCRtPop250Mtrs_14,
                popuplayertitle: "CBT-GPC Rt Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop250Mtrs_14.png" /> CBT-GPC Rt Pop 250 Mtrs'
            });
var format_CBTGPCRtPop100Mtrs_15 = new ol.format.GeoJSON();
var features_CBTGPCRtPop100Mtrs_15 = format_CBTGPCRtPop100Mtrs_15.readFeatures(json_CBTGPCRtPop100Mtrs_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPop100Mtrs_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPop100Mtrs_15.addFeatures(features_CBTGPCRtPop100Mtrs_15);
var lyr_CBTGPCRtPop100Mtrs_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPop100Mtrs_15, 
                style: style_CBTGPCRtPop100Mtrs_15,
                popuplayertitle: "CBT-GPC Rt Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPop100Mtrs_15.png" /> CBT-GPC Rt Pop 100 Mtrs'
            });
var format_CBTGPCRWI_16 = new ol.format.GeoJSON();
var features_CBTGPCRWI_16 = format_CBTGPCRWI_16.readFeatures(json_CBTGPCRWI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRWI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRWI_16.addFeatures(features_CBTGPCRWI_16);
var lyr_CBTGPCRWI_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRWI_16, 
                style: style_CBTGPCRWI_16,
                popuplayertitle: "CBT-GPC RWI",
                interactive: true,
    title: 'CBT-GPC RWI<br />\
    <img src="styles/legend/CBTGPCRWI_16_0.png" /> 0.875 - 0.8998<br />\
    <img src="styles/legend/CBTGPCRWI_16_1.png" /> 0.8998 - 0.9246<br />\
    <img src="styles/legend/CBTGPCRWI_16_2.png" /> 0.9246 - 0.9494<br />\
    <img src="styles/legend/CBTGPCRWI_16_3.png" /> 0.9494 - 0.9742<br />\
    <img src="styles/legend/CBTGPCRWI_16_4.png" /> 0.9742 - 0.999<br />\
    <img src="styles/legend/CBTGPCRWI_16_5.png" /> 0.999 - 1.092<br />\
    <img src="styles/legend/CBTGPCRWI_16_6.png" /> 1.092 - 1.185<br />\
    <img src="styles/legend/CBTGPCRWI_16_7.png" /> 1.185 - 1.278<br />\
    <img src="styles/legend/CBTGPCRWI_16_8.png" /> 1.278 - 1.371<br />\
    <img src="styles/legend/CBTGPCRWI_16_9.png" /> 1.371 - 1.464<br />\
    <img src="styles/legend/CBTGPCRWI_16_10.png" /> 1.464 - 1.4682<br />\
    <img src="styles/legend/CBTGPCRWI_16_11.png" /> 1.4682 - 1.4724<br />\
    <img src="styles/legend/CBTGPCRWI_16_12.png" /> 1.4724 - 1.4766<br />\
    <img src="styles/legend/CBTGPCRWI_16_13.png" /> 1.4766 - 1.4808<br />\
    <img src="styles/legend/CBTGPCRWI_16_14.png" /> 1.4808 - 1.485<br />'
        });
var format_CBTGPCStopPopDissolved_17 = new ol.format.GeoJSON();
var features_CBTGPCStopPopDissolved_17 = format_CBTGPCStopPopDissolved_17.readFeatures(json_CBTGPCStopPopDissolved_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCStopPopDissolved_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCStopPopDissolved_17.addFeatures(features_CBTGPCStopPopDissolved_17);
var lyr_CBTGPCStopPopDissolved_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCStopPopDissolved_17, 
                style: style_CBTGPCStopPopDissolved_17,
                popuplayertitle: "CBT-GPC Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCStopPopDissolved_17.png" /> CBT-GPC Stop Pop Dissolved'
            });
var format_CBTGPCStopPop_18 = new ol.format.GeoJSON();
var features_CBTGPCStopPop_18 = format_CBTGPCStopPop_18.readFeatures(json_CBTGPCStopPop_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCStopPop_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCStopPop_18.addFeatures(features_CBTGPCStopPop_18);
var lyr_CBTGPCStopPop_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCStopPop_18, 
                style: style_CBTGPCStopPop_18,
                popuplayertitle: "CBT-GPC Stop Pop",
                interactive: true,
    title: 'CBT-GPC Stop Pop<br />\
    <img src="styles/legend/CBTGPCStopPop_18_0.png" /> 5 min<br />\
    <img src="styles/legend/CBTGPCStopPop_18_1.png" /> 10 min<br />'
        });
var format_RouteCBTGPCMtrs_19 = new ol.format.GeoJSON();
var features_RouteCBTGPCMtrs_19 = format_RouteCBTGPCMtrs_19.readFeatures(json_RouteCBTGPCMtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RouteCBTGPCMtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RouteCBTGPCMtrs_19.addFeatures(features_RouteCBTGPCMtrs_19);
var lyr_RouteCBTGPCMtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RouteCBTGPCMtrs_19, 
                style: style_RouteCBTGPCMtrs_19,
                popuplayertitle: "Route CBT-GPC Mtrs",
                interactive: true,
                title: '<img src="styles/legend/RouteCBTGPCMtrs_19.png" /> Route CBT-GPC Mtrs'
            });
var format_StopsCBTGPC_20 = new ol.format.GeoJSON();
var features_StopsCBTGPC_20 = format_StopsCBTGPC_20.readFeatures(json_StopsCBTGPC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsCBTGPC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsCBTGPC_20.addFeatures(features_StopsCBTGPC_20);
var lyr_StopsCBTGPC_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StopsCBTGPC_20, 
                style: style_StopsCBTGPC_20,
                popuplayertitle: "Stops CBT - GPC",
                interactive: true,
    title: 'Stops CBT - GPC<br />\
    <img src="styles/legend/StopsCBTGPC_20_0.png" /> 2nd gate 1<br />\
    <img src="styles/legend/StopsCBTGPC_20_1.png" /> ARUN TALKIES<br />\
    <img src="styles/legend/StopsCBTGPC_20_2.png" /> CBT<br />\
    <img src="styles/legend/StopsCBTGPC_20_3.png" /> Court 1<br />\
    <img src="styles/legend/StopsCBTGPC_20_4.png" /> Dsc 1<br />\
    <img src="styles/legend/StopsCBTGPC_20_5.png" /> GP COLONY<br />\
    <img src="styles/legend/StopsCBTGPC_20_6.png" /> HP STOP<br />\
    <img src="styles/legend/StopsCBTGPC_20_7.png" /> Millitry Mahadev Mandir<br />\
    <img src="styles/legend/StopsCBTGPC_20_8.png" /> RAILWAY 1ST GATE<br />\
    <img src="styles/legend/StopsCBTGPC_20_9.png" /> RCN 2 STAGE<br />\
    <img src="styles/legend/StopsCBTGPC_20_10.png" /> RLS COLLEGE<br />\
    <img src="styles/legend/StopsCBTGPC_20_11.png" /> Rst 1<br />\
    <img src="styles/legend/StopsCBTGPC_20_12.png" /> SBI STOP<br />\
    <img src="styles/legend/StopsCBTGPC_20_13.png" /> <br />'
        });
var format_BelgaviPOIMerged_21 = new ol.format.GeoJSON();
var features_BelgaviPOIMerged_21 = format_BelgaviPOIMerged_21.readFeatures(json_BelgaviPOIMerged_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPOIMerged_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPOIMerged_21.addFeatures(features_BelgaviPOIMerged_21);
var lyr_BelgaviPOIMerged_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPOIMerged_21, 
                style: style_BelgaviPOIMerged_21,
                popuplayertitle: "Belgavi POI Merged",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPOIMerged_21.png" /> Belgavi POI Merged'
            });
var format_CBTGPCRtPOI_22 = new ol.format.GeoJSON();
var features_CBTGPCRtPOI_22 = format_CBTGPCRtPOI_22.readFeatures(json_CBTGPCRtPOI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPOI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPOI_22.addFeatures(features_CBTGPCRtPOI_22);
var lyr_CBTGPCRtPOI_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPOI_22, 
                style: style_CBTGPCRtPOI_22,
                popuplayertitle: "CBT-GPC Rt POI",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPOI_22.png" /> CBT-GPC Rt POI'
            });
var format_CBTGPCRtPopMerged_23 = new ol.format.GeoJSON();
var features_CBTGPCRtPopMerged_23 = format_CBTGPCRtPopMerged_23.readFeatures(json_CBTGPCRtPopMerged_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTGPCRtPopMerged_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTGPCRtPopMerged_23.addFeatures(features_CBTGPCRtPopMerged_23);
var lyr_CBTGPCRtPopMerged_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTGPCRtPopMerged_23, 
                style: style_CBTGPCRtPopMerged_23,
                popuplayertitle: "CBT-GPC Rt Pop Merged",
                interactive: true,
                title: '<img src="styles/legend/CBTGPCRtPopMerged_23.png" /> CBT-GPC Rt Pop Merged'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_BelgaviBoundary_1.setVisible(true);lyr_Temple_2.setVisible(true);lyr_Education_3.setVisible(true);lyr_BelgaviPSU_4.setVisible(true);lyr_BelgaviOffice_5.setVisible(true);lyr_BelgaviIndustries_6.setVisible(true);lyr_BelgaviRailwayStn_7.setVisible(true);lyr_BelgaviRWI_8.setVisible(true);lyr_Belgavistats_9.setVisible(true);lyr_RouteGPCCBTMtrs_10.setVisible(true);lyr_StopsGPCCBT_11.setVisible(true);lyr_CBTGPCRtPop1000Mtrs_12.setVisible(true);lyr_CBTGPCRtPop500Mtrs_13.setVisible(true);lyr_CBTGPCRtPop250Mtrs_14.setVisible(true);lyr_CBTGPCRtPop100Mtrs_15.setVisible(true);lyr_CBTGPCRWI_16.setVisible(true);lyr_CBTGPCStopPopDissolved_17.setVisible(true);lyr_CBTGPCStopPop_18.setVisible(true);lyr_RouteCBTGPCMtrs_19.setVisible(true);lyr_StopsCBTGPC_20.setVisible(true);lyr_BelgaviPOIMerged_21.setVisible(true);lyr_CBTGPCRtPOI_22.setVisible(true);lyr_CBTGPCRtPopMerged_23.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BelgaviBoundary_1,lyr_Temple_2,lyr_Education_3,lyr_BelgaviPSU_4,lyr_BelgaviOffice_5,lyr_BelgaviIndustries_6,lyr_BelgaviRailwayStn_7,lyr_BelgaviRWI_8,lyr_Belgavistats_9,lyr_RouteGPCCBTMtrs_10,lyr_StopsGPCCBT_11,lyr_CBTGPCRtPop1000Mtrs_12,lyr_CBTGPCRtPop500Mtrs_13,lyr_CBTGPCRtPop250Mtrs_14,lyr_CBTGPCRtPop100Mtrs_15,lyr_CBTGPCRWI_16,lyr_CBTGPCStopPopDissolved_17,lyr_CBTGPCStopPop_18,lyr_RouteCBTGPCMtrs_19,lyr_StopsCBTGPC_20,lyr_BelgaviPOIMerged_21,lyr_CBTGPCRtPOI_22,lyr_CBTGPCRtPopMerged_23];
lyr_BelgaviBoundary_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Temple_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'check_date': 'check_date', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'historic': 'historic', 'building': 'building', 'landuse': 'landuse', 'layer': 'layer', 'path': 'path', });
lyr_Education_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'barrier': 'barrier', 'name_etymo': 'name_etymo', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'email': 'email', 'alt_name': 'alt_name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPSU_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'phone': 'phone', 'name_kn': 'name_kn', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'police': 'police', 'operator_w': 'operator_w', 'operator': 'operator', 'addr_distr': 'addr_distr', 'type': 'type', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviOffice_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'name': 'name', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviIndustries_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_BelgaviRailwayStn_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'operator': 'operator', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'building': 'building', 'name_kn': 'name_kn', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'opening_ho': 'opening_ho', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'wheelchair': 'wheelchair', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'wikidata': 'wikidata', 'network': 'network', 'internet_a': 'internet_a', 'website': 'website', 'phone': 'phone', 'designatio': 'designatio', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRWI_8.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Belgavistats_9.set('fieldAliases', {'shapeName': 'shapeName', 'area': 'area', 'perimeter': 'perimeter', 'Area SqKm': 'Area SqKm', 'Peri KM': 'Peri KM', });
lyr_RouteGPCCBTMtrs_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Bus Travel': 'Bus Travel', });
lyr_StopsGPCCBT_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTGPCRtPop1000Mtrs_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop500Mtrs_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop250Mtrs_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRtPop100Mtrs_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCRWI_16.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTGPCStopPopDissolved_17.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_CBTGPCStopPop_18.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_RouteCBTGPCMtrs_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_StopsCBTGPC_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPOIMerged_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', 'amenity': 'amenity', 'police': 'police', 'operator_w': 'operator_w', 'addr_distr': 'addr_distr', 'type': 'type', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'network': 'network', 'internet_a': 'internet_a', 'designatio': 'designatio', 'descriptio': 'descriptio', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'name_etymo': 'name_etymo', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'email': 'email', 'religion': 'religion', 'historic': 'historic', });
lyr_CBTGPCRtPOI_22.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', 'CBT-GPC Rt': 'CBT-GPC Rt', });
lyr_CBTGPCRtPopMerged_23.set('fieldAliases', {'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_BelgaviBoundary_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Temple_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Education_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'name_etymo': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPSU_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviOffice_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviIndustries_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_BelgaviRailwayStn_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'operator': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'building': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'opening_ho': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'wheelchair': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'wikidata': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRWI_8.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Belgavistats_9.set('fieldImages', {'shapeName': '', 'area': '', 'perimeter': '', 'Area SqKm': '', 'Peri KM': '', });
lyr_RouteGPCCBTMtrs_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'Range', 'Bus Travel': 'Range', });
lyr_StopsGPCCBT_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTGPCRtPop1000Mtrs_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop500Mtrs_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop250Mtrs_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRtPop100Mtrs_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTGPCRWI_16.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_CBTGPCStopPopDissolved_17.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Pax': 'Range', 'Ridership%': 'Range', });
lyr_CBTGPCStopPop_18.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_RouteCBTGPCMtrs_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': '', 'Bus Time': '', });
lyr_StopsCBTGPC_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPOIMerged_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'amenity': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'name_etymo': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'email': 'TextEdit', 'religion': 'TextEdit', 'historic': 'TextEdit', });
lyr_CBTGPCRtPOI_22.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', 'CBT-GPC Rt': 'TextEdit', });
lyr_CBTGPCRtPopMerged_23.set('fieldImages', {'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'TextEdit', 'Ridership%': 'TextEdit', });
lyr_BelgaviBoundary_1.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Temple_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'check_date': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'historic': 'hidden field', 'building': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Education_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'name_etymo': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'alt_name': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviPSU_4.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviOffice_5.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviIndustries_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_BelgaviRailwayStn_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'operator': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'building': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'opening_ho': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'wheelchair': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'wikidata': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviRWI_8.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'hidden field', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Belgavistats_9.set('fieldLabels', {'shapeName': 'header label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'Peri KM': 'inline label - visible with data', });
lyr_RouteGPCCBTMtrs_10.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Time': 'inline label - visible with data', 'Bus Travel': 'inline label - visible with data', });
lyr_StopsGPCCBT_11.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CBTGPCRtPop1000Mtrs_12.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop500Mtrs_13.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop250Mtrs_14.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRtPop100Mtrs_15.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTGPCRWI_16.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_CBTGPCStopPopDissolved_17.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_CBTGPCStopPop_18.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_RouteCBTGPCMtrs_19.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_StopsCBTGPC_20.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'inline label - visible with data', 'path': 'hidden field', });
lyr_BelgaviPOIMerged_21.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'amenity': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'name_etymo': 'hidden field', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'email': 'hidden field', 'religion': 'hidden field', 'historic': 'hidden field', });
lyr_CBTGPCRtPOI_22.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'CBT-GPC Rt': 'hidden field', });
lyr_CBTGPCRtPopMerged_23.set('fieldLabels', {'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_CBTGPCRtPopMerged_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});