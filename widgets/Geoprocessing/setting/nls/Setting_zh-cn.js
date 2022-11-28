// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dgrid/extensions/nls/pagination":{status:"${start} - ${end} \u5171 ${total} \u6761\u7ed3\u679c",gotoFirst:"\u9996\u9875",gotoNext:"\u540e\u4e00\u9875",gotoPrev:"\u524d\u4e00\u9875",gotoLast:"\u672b\u9875",gotoPage:"\u5230\u8fd9\u9875",jumpPage:"\u8df3\u5230\u9875",rowsPerPage:"Number of rows per page",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}},"widgets/Geoprocessing/nls/strings":{_widgetLabel:"\u5730\u7406\u5904\u7406",_featureAction_ReceiveFeatureSet:"\u8bbe\u7f6e\u4e3a\u8f93\u5165 ",
requiredInfo:"\u5fc5\u586b\u9879\u3002",drawnOnMap:"\u7ed3\u679c\u7ed8\u5236\u5728\u5730\u56fe\u4e0a\u3002",noToolConfig:"\u65e0\u53ef\u7528\u7684\u9884\u914d\u7f6e\u5730\u7406\u5904\u7406\u4efb\u52a1\u3002",useUrlForGPInput:"URL",useUploadForGPInput:"\u4e0a\u4f20\u6587\u4ef6",selectFileToUpload:"\u9009\u62e9\u6587\u4ef6...",rasterFormat:"\u6805\u683c\u6570\u636e\u683c\u5f0f",noFileSelected:"\u672a\u9009\u62e9\u4efb\u4f55\u6587\u4ef6!",uploadSuccess:"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f!",showLayerContent:"\u663e\u793a\u56fe\u5c42\u5185\u5bb9",
invalidUrl:"\u65e0\u6548\u7684\u8981\u7d20\u670d\u52a1 url",urlPlaceholder:"\u7528\u4e8e\u8bbf\u95ee\u6570\u636e\u7684 URL",addShapefile:"\u6dfb\u52a0 Shapefile",generateShapefileError:"\u751f\u6210 shapefile \u65f6\u51fa\u9519\uff0c\u8bf7\u68c0\u67e5: ",cleared:"\u7ed3\u679c\u5df2\u6e05\u9664\u3002",enlargeView:"\u653e\u5927\u89c6\u56fe",exportOutput:"\u5bfc\u51fa",emptyResult:"\u7ed3\u679c\u4e3a\u7a7a\u3002",useSelectedFeatureset:"\u4f7f\u7528\u751f\u6210\u7684\u8981\u7d20\u3002",closeSelectedFeatureset:"\u6e05\u9664\u5e76\u4f7f\u7528\u5df2\u914d\u7f6e\u7684\u8f93\u5165\u9009\u9879\u3002",
currentMapExtent:"\u5f53\u524d\u5730\u56fe\u8303\u56f4",generalize:"\u6982\u5316\u51e0\u4f55",jsonPlaceholder:"\u6570\u636e\u7684 JSON \u5b57\u7b26\u4e32",chooseATable:"---\u9009\u62e9\u8868---",_localized:{}},"widgets/Geoprocessing/setting/nls/strings":{taskUrl:"\u4efb\u52a1 URL",serviceURLPlaceholder:"\u8bf7\u8f93\u5165\u5730\u7406\u5904\u7406\u4efb\u52a1 URL",layerOrder:"\u56fe\u5c42\u987a\u5e8f",defaultValue:"\u9ed8\u8ba4\u503c",inputFeatureBy:"\u8f93\u5165\u8981\u7d20",inputRecordBy:"\u8f93\u5165\u8bb0\u5f55\u65b9\u6cd5",
renderer:"\u6e32\u67d3\u5668",displayType:"\u663e\u793a\u7c7b\u578b",helpUrl:"\u5e2e\u52a9 URL",useResultMapService:"\u901a\u8fc7\u5730\u56fe\u670d\u52a1\u67e5\u770b\u7ed3\u679c",drawOnMap:"\u5728\u5730\u56fe\u4e0a\u4ea4\u4e92\u7ed8\u5236",selectLayer:"\u4ece\u5730\u56fe\u4e2d\u9009\u62e9\u56fe\u5c42",selectTable:"\u4ece\u5730\u56fe\u4e2d\u9009\u62e9\u8868",shareResults:"\u5c06\u7ed3\u679c\u6dfb\u52a0\u4e3a\u4e1a\u52a1\u56fe\u5c42",setTask:"\u8bbe\u7f6e",setTaskTitle:"\u8bbe\u7f6e GP \u4efb\u52a1",
enablePopup:"\u542f\u7528\u5f39\u51fa\u7a97\u53e3",unSupportGeometryType:"\u7531\u4e8e\u51e0\u4f55\u7c7b\u578b\u672a\u77e5\uff0c\u56e0\u6b64\u65e0\u6cd5\u8bbe\u7f6e\u6e32\u67d3\u5668\u3002",useUrlForGPInput:"URL",useUploadForGPInput:"\u4e0a\u4f20\u6587\u4ef6",selectFileToUpload:"\u9009\u62e9\u6587\u4ef6...",rasterFormat:"\u6805\u683c\u6570\u636e\u683c\u5f0f",noFileSelected:"\u672a\u9009\u62e9\u4efb\u4f55\u6587\u4ef6!",uploadSuccess:"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f!",showLayerContent:"\u663e\u793a\u56fe\u5c42\u5185\u5bb9",
urlPlaceholder:"\u7528\u4e8e\u8bbf\u95ee\u6570\u636e\u7684 URL",useShapefile:"\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u4f7f\u7528 shapefile",allowToExport:"\u5141\u8bb8\u5bfc\u51fa\u7ed3\u679c",useDynamicSchema:"\u8f93\u51fa\u53ef\u80fd\u5177\u6709\u4e0d\u540c\u65b9\u6848\uff0c\u8bf7\u4f7f\u7528\u52a8\u6001\u65b9\u6848\u4ee3\u66ff\u9884\u5b9a\u4e49\u65b9\u6848\u3002",useCurrentMapExtent:"\u4f7f\u7528\u5f53\u524d\u5730\u56fe\u8303\u56f4",ignoreOutput:"\u5ffd\u7565\u6b64\u8f93\u51fa",turnOffOutput:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5173\u95ed\u6b64\u56fe\u5c42",
inputJSONString:"\u8f93\u5165 JSON \u5b57\u7b26\u4e32",useFeatureCollection:"\u4e0d\u8981\u53d1\u9001 URL \u800c\u662f\u53d1\u9001 FeatureCollections \u4f5c\u4e3a\u8f93\u5165\u3002",_localized:{}}});