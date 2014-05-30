/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(["dojo/ready", "dojo/json", "dojo/_base/array", "dojo/_base/Color", "dojo/_base/declare", "dojo/_base/lang", "dojo/dom", "dojo/dom-attr", "dojo/dom-class", "dojo/dom-construct", "dojo/dom-style", "dojo/on", "dojo/Deferred", "dojo/promise/all", "dojo/query", "dijit/registry", "application/toolbar", "application/has-config", "esri/arcgis/utils", "esri/dijit/HomeButton", "esri/dijit/LocateButton", "esri/geometry/Extent", "esri/layers/FeatureLayer"], function (
ready, JSON, array, Color, declare, lang, dom, domAttr, domClass, domConstruct, domStyle, on, Deferred, all, query, registry, Toolbar, has, arcgisUtils, HomeButton, LocateButton, Extent, FeatureLayer) {


    return declare(null, {
        config: {},
        color: null,
        map: null,
        initExt: null,
        mapExt: null,
        popupHandler: null,
        popupListener: null,

        startup: function (config) {
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id and any url parameters and any application specific configuration information.
            if (config) {
                this.config = config;
                this.setColor();
                // document ready
                ready(lang.hitch(this, function () {
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;
                    //If a custom extent is set as a url parameter handle that before creating the map 
                    if (this.config.extent) {
                        var extArray = decodeURIComponent(this.config.extent).split(",");
                        if (extArray.length === 4) {
                            itemInfo.item.extent = [
                                [parseFloat(extArray[0]), parseFloat(extArray[1])],
                                [parseFloat(extArray[2]), parseFloat(extArray[3])]
                            ];
                        } else if (extArray.length === 5) {
                            this.initExt = new Extent(JSON.parse(this.config.extent));

                        }
                    }
                    this._createWebMap(itemInfo);


                }));
            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }
        },

        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            // an error occurred - notify the user. In this example we pull the string from the
            // resource.js file located in the nls folder because we've set the application up
            // for localization. If you don't need to support multiple languages you can hardcode the
            // strings here and comment out the call in index.html to get the localization strings.
            // set message
            var node = dom.byId("loading_message");
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }
        },

        setColor: function () {
            var rgb = Color.fromHex(this.config.color).toRgb();
            rgb.push(0.9);
            this.color = Color.fromArray(rgb);

        },

        // Map is ready
        _mapLoaded: function () {
            query(".esriSimpleSlider").style("backgroundColor", this.color.toString());
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
        },

        // Create UI
        _createUI: function () {

            //No tools are specified in the configuration so hide the panel and update the title area styles 
            if (this.config.tools.length < 1) {
                domConstruct.destroy("panelTools");
                domStyle.set("panelContent", "display", "none");
                domStyle.set("panelTitle", "border-bottom", "none");
                domStyle.set("panelTop", "height", "52px");
                this._updateTheme();
                return;
            }

            //Add tools to the toolbar. The tools are listed in the defaults.js file 
            var toolbar = new Toolbar(this.config);
            toolbar.startup().then(lang.hitch(this, function () {

                // set map so that it can be repositioned when page is scrolled
                toolbar.map = this.map;

                var toolList = [];
                for (var i = 0; i < this.config.tools.length; i++) {
                    switch (this.config.tools[i].name) {
                    case "legend":
                        toolList.push(this._addLegend(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "bookmarks":
                        toolList.push(this._addBookmarks(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "layers":
                        toolList.push(this._addLayers(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "basemap":
                        toolList.push(this._addBasemapGallery(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "overview":
                        toolList.push(this._addOverviewMap(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "measure":
                        toolList.push(this._addMeasure(this.config.tools[i], toolbar, "small"));
                        break;
                    case "edit":
                        toolList.push(this._addEditor(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "print":
                        toolList.push(this._addPrint(this.config.tools[i], toolbar, "small"));
                        break;
                    case "details":
                        toolList.push(this._addDetails(this.config.tools[i], toolbar, "medium"));
                        break;
                    case "share":
                        toolList.push(this._addShare(this.config.tools[i], toolbar, "small"));
                        break;
                    default:
                        break;
                    }
                }

                all(toolList).then(lang.hitch(this, function (results) {
                    //Now that all the tools have been added to the toolbar we can add page naviagation
                    //to the toolbar panel, update the color theme and set the active tool. 
                    this._updateTheme();
                    // toolbar.updateToolbar(this.config.tools);
                    toolbar.updatePageNavigation();
                    toolbar.activateTool(this.config.activeTool);
                    on(toolbar, "updateTool", lang.hitch(this, function (name) {
                        if (name === "measure" || name === "edit") {
                            this._disablePopups();
                        } else {
                            this._enablePopups();
                        }
                    }));
                }));
            }));
        },
        _addBasemapGallery: function (tool, toolbar, panelClass) {
            //Add the basemap gallery to the toolbar. 
            var deferred = new Deferred();
            require(["application/has-config!basemap?esri/dijit/BasemapGallery"], lang.hitch(this, function (BasemapGallery) {
                if (!BasemapGallery) {
                    deferred.resolve();
                    return;
                }
                var basemapDiv = toolbar.createTool(tool, panelClass);
                var basemap = new BasemapGallery({
                    id: "basemapGallery",
                    map: this.map,
                    showArcGISBasemaps: true,
                    portalUrl: this.config.sharinghost,
                    basemapGroup: this._getBasemapGroup()
                }, domConstruct.create("div", {}, basemapDiv));
                basemap.startup();
                deferred.resolve();

            }));

            return deferred.promise;
        },

        _addBookmarks: function (tool, toolbar, panelClass) {
            //Add the bookmarks tool to the toolbar. Only activated if the webmap contains bookmarks. 
            var deferred = new Deferred();
            if (this.config.response.itemInfo.itemData.bookmarks) {

                require(["application/has-config!bookmarks?esri/dijit/Bookmarks"], lang.hitch(this, function (Bookmarks) {
                    if (!Bookmarks) {
                        deferred.resolve();
                        return;
                    }
                    var bookmarkDiv = toolbar.createTool(tool, panelClass);
                    var bookmarks = new Bookmarks({
                        map: this.map,
                        bookmarks: this.config.response.itemInfo.itemData.bookmarks
                    }, bookmarkDiv);

                    deferred.resolve();

                }));

            } else {
                deferred.resolve();
            }

            return deferred.promise;
        },
        _addDetails: function (tool, toolbar, panelClass) {
            //Add the default map description panel 
            var deferred = new Deferred();
            if (has("details")) {
                var description = this.config.response.itemInfo.item.description || this.config.response.itemInfo.item.snippet;
                if (description) {
                    var detailDiv = toolbar.createTool(tool, panelClass);
                    detailDiv.innerHTML = description;
                }
            }
            deferred.resolve();
            return deferred.promise;

        },
        _addEditor: function (tool, toolbar, panelClass) {

            //Add the editor widget to the toolbar if the web map contains editable layers 
            var deferred = new Deferred();
            var layers = this._getEditableLayers(this.config.response.itemInfo.itemData.operationalLayers);
            if (layers.length > 0) {

                require(["application/has-config!edit?esri/dijit/editing/Editor"], lang.hitch(this, function (Editor) {
                    if (!Editor) {
                        deferred.resolve();
                        return;
                    }
                    var editorDiv = toolbar.createTool(tool, panelClass);

                    //add field infos if necessary. Field infos will contain hints if defined in the popup and hide fields where visible is set
                    //to false. The popup logic takes care of this for the info window but not the edit window. 
                    array.forEach(layers, lang.hitch(this, function (layer) {
                        if (layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos) {
                            //only display visible fields 
                            var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
                            var fieldInfos = [];
                            array.forEach(fields, function (field) {
                                if (field.visible) {
                                    fieldInfos.push(field);
                                }
                            });
                            layer.fieldInfos = fieldInfos;
                        }
                    }));
                    var settings = {
                        map: this.map,
                        layerInfos: layers,
                        toolbarVisible: has("edit-toolbar")
                    };
                    var editor = new Editor({
                        settings: settings
                    }, editorDiv);


                    editor.startup();
                    deferred.resolve();

                }));

            } else {
                console.log("No Editable Layers");
                deferred.resolve();
            }
            return deferred.promise;
        },
        _addLayers: function (tool, toolbar, panelClass) {
            //Toggle layer visibility if web map has operational layers 
            var deferred = new Deferred();

            var layers = this.config.response.itemInfo.itemData.operationalLayers;

            if (layers.length === 0) {
                deferred.resolve();
            } else {
                if (has("layers")) {
                    require(["dijit/Menu", "dijit/CheckedMenuItem"], lang.hitch(this, function (Menu, CheckedMenuItem) {
                        //Build a menu to display the layers in the web map. 
                        var layerInfos = this._getVisibleLayers(layers);
                        if (layerInfos.length > 0) {
                            layerInfos.reverse();

                            var layersDiv = toolbar.createTool(tool, panelClass);
                            var menu = new Menu({
                                id: "layerMenu"
                            }, domConstruct.create("div", {}, layersDiv)); //, layersDiv);
                            array.forEach(layerInfos, function (layer) {
                                menu.addChild(new CheckedMenuItem({
                                    label: layer.title,
                                    checked: layer.visible,
                                    onChange: function () {

                                        if (layer.layer.featureCollection) {
                                            array.forEach(layer.layer.featureCollection.layers, function (layer) {
                                                layer.layerObject.setVisibility(!layer.layerObject.visible);
                                            });
                                        } else {
                                            layer.layer.setVisibility(!layer.layer.visible);
                                        }
                                    }
                                }));

                            });

                        }
                        deferred.resolve();
                    }));
                }else{
                    deferred.resolve();
                }
            }
            return deferred.promise;
        },
        _addLegend: function (tool, toolbar, panelClass) {
            //Add the legend tool to the toolbar. Only activated if the web map has operational layers. 
            var deferred = new Deferred();
            var layers = arcgisUtils.getLegendLayers(this.config.response);

            if (layers.length === 0) {
                deferred.resolve();
            } else {
                require(["application/has-config!legend?esri/dijit/Legend"], lang.hitch(this, function (Legend) {
                    if (!Legend) {
                        deferred.resolve();
                        return;
                    }
                    var legendDiv = toolbar.createTool(tool, panelClass);
                    var legend = new Legend({
                        map: this.map
                    }, legendDiv);
                    legend.startup();
                    toolbar.activateTool(this.config.activeTool || "legend");
                    deferred.resolve();

                }));
            }
            return deferred.promise;
        },

        _addMeasure: function (tool, toolbar, panelClass) {
            //Add the measure widget to the toolbar.
            var deferred = new Deferred();
            require(["application/has-config!measure?esri/dijit/Measurement"], lang.hitch(this, function (Measurement) {
                if (!Measurement) {
                    deferred.resolve();
                    return;
                }
                var measureDiv = toolbar.createTool(tool, panelClass);
                var areaUnit = (this.config.units === "metric") ? "esriSquareKilometers" : "esriSquareMiles";
                var lengthUnit = (this.config.units === "metric") ? "esriKilometers" : "esriMiles";

                var measure = new Measurement({
                    map: this.map,
                    defaultAreaLength: areaUnit,
                    defaultLengthUnit: lengthUnit
                }, domConstruct.create("div", {}, measureDiv));

                measure.startup();

                deferred.resolve();

            }));

            return deferred.promise;
        },
        _addOverviewMap: function (tool, toolbar, panelClass) {
            //Add the overview map to the toolbar 
            var deferred = new Deferred();
            require(["application/has-config!overview?esri/dijit/OverviewMap"], lang.hitch(this, function (OverviewMap) {
                if (!OverviewMap) {
                    deferred.resolve();
                    return;
                }
                var ovMapDiv = toolbar.createTool(tool, panelClass);


                domStyle.set(ovMapDiv, {
                    "height": "100%",
                    "width": "100%"
                });

                var panelHeight = this.map.height;
                if (panelClass === "small") {
                    panelHeight = 250;
                } else if (panelClass === "medium") {
                    panelHeight = 350;
                }

                var ovMap = new OverviewMap({
                    id: "overviewMap",
                    map: this.map,
                    height: panelHeight
                }, domConstruct.create("div", {}, ovMapDiv));

                ovMap.startup();

                on(this.map, "layer-add", lang.hitch(this, function (args) {
                    //delete and re-create the overview map if the basemap gallery changes  
                    if (args.layer.hasOwnProperty("_basemapGalleryLayerType") && args.layer._basemapGalleryLayerType === "basemap") {
                        registry.byId("overviewMap").destroy();
                        var ovMap = new OverviewMap({
                            id: "overviewMap",
                            map: this.map,
                            height: this.map.height - 100,
                            visible: false
                        }, domConstruct.create("div", {}, ovMapDiv));

                        ovMap.startup();
                    }
                }));
                deferred.resolve();

            }));

            return deferred.promise;
        },
        _addPrint: function (tool, toolbar, panelClass) {
            //Add the print widget to the toolbar. TODO: test custom layouts. 
            var deferred = new Deferred();

            require(["application/has-config!print?esri/dijit/Print"], lang.hitch(this, function (Print) {
                var layoutOptions = {
                    "titleText": this.config.title,
                    "scalebarUnit": this.config.units
                };
                if (!Print) {
                    deferred.resolve();
                    return;
                }

                if (has("print-legend")) {
                    var legendLayers = [];
                    var layers = arcgisUtils.getLegendLayers(this.config.response);
                    legendLayers = array.map(layers, function (layer) {
                        return {
                            "layerId": layer.layer.id
                        };
                    });
                    if (legendLayers.length > 0) {
                        layoutOptions.legend = legendLayers;
                    }


                }

                require(["application/has-config!print-layouts?esri/request", "application/has-config!print-layouts?esri/tasks/PrintTemplate"], lang.hitch(this, function (esriRequest, PrintTemplate) {
                    if (!esriRequest && !PrintTemplate) {

                        //Use the default print templates 
                        var layoutOptions = {
                            "titleText": this.config.title,
                            "scalebarUnit": this.config.units
                        };

                        var templates = [{
                            layout: "Letter ANSI A Landscape",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label1,
                            format: "PDF"
                        },
                        {
                            layout: "Letter ANSI A Portrait",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label2,
                            format: "PDF"
                        },
                        {
                            layout: "Letter ANSI A Landscape",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label3,
                            format: "PNG32"
                        },
                        {
                            layout: "Letter ANSI A Portrait",
                            layoutOptions: layoutOptions,
                            label: this.config.i18n.tools.print.layouts.label4,
                            format: "PNG32"
                        }];
                        var printDiv = toolbar.createTool(tool, panelClass);
                        var print = new Print({
                            map: this.map,
                            templates: templates,
                            url: this.config.helperServices.printTask.url
                        }, printDiv);
                        print.startup();

                        deferred.resolve();
                        return;
                    }

                    esriRequest({
                        url: this.config.helperServices.printTask.url,
                        content: {
                            "f": "json"
                        },
                        "callbackParamName": "callback"
                    }).then(function (response) {
                        var layoutTemplate, templateNames, mapOnlyIndex, templates;

                        layoutTemplate = array.filter(response.parameters, function (param, idx) {
                            return param.name === "Layout_Template";
                        });

                        if (layoutTemplate.length === 0) {
                            console.log("print service parameters name for templates must be \"Layout_Template\"");
                            return;
                        }
                        templateNames = layoutTemplate[0].choiceList;

                        // remove the MAP_ONLY template then add it to the end of the list of templates 
                        mapOnlyIndex = array.indexOf(templateNames, "MAP_ONLY");
                        if (mapOnlyIndex > -1) {
                            var mapOnly = templateNames.splice(mapOnlyIndex, mapOnlyIndex + 1)[0];
                            templateNames.push(mapOnly);
                        }

                        // create a print template for each choice
                        templates = array.map(templateNames, function (name) {
                            var plate = new PrintTemplate();
                            plate.layout = plate.label = name;
                            plate.format = "pdf";
                            plate.layoutOptions = layoutOptions;
                            return plate;
                        });

                        var printDiv = toolbar.createTool(tool, panelClass);
                        var print = new Print({
                            map: this.map,
                            templates: templates,
                            url: this.config.helperServices.printTask.url
                        }, printDiv);
                        print.startup();
                        deferred.resolve();

                    });
                }));

            }));


            return deferred.promise;
        },
        _addShare: function (tool, toolbar, panelClass) {
            //Add share links for facebook, twitter and direct linking. 
            if (has("share")) {
                var shareDiv = toolbar.createTool(tool, panelClass);

                var url = document.location.href;

                this._updateShareLinks(shareDiv, false);



                on(dom.byId("shareCheck"), "click", lang.hitch(this, function () {
                    var checked = dom.byId("shareCheck").checked;
                    this._updateShareLinks(shareDiv, checked);
                }));

            }
        },

        _updateShareLinks: function (shareDiv, useExtent) {
            //If the use extent checkbox is enabled append the extent to the sharing url 
            var url = null,
                extent = null,
                appurl = null,
                content = null;

            appurl = document.location.href.split("?");
            url = appurl[0];

            if (useExtent) {
                extent = JSON.stringify(this.map.extent.toJson());
                url += "?extent=" + extent;
            }
            if (appurl[1]) {
                url += "&" + appurl[1];
            }
            content = "<div class='share-input-header'>" + this.config.i18n.tools.share.label + "</div>";
            content += "<input id='shareCheck' class='share-input-check' type='checkbox'> " + this.config.i18n.tools.share.extent + "</input>";
            //Facebook and Twitter 
            content += "<br/><a class='share-input-buttons' target='_blank' href='http://www.facebook.com/sharer.php?u=" + encodeURIComponent(url) + "&t=" + document.title + "'><img src='./images/facebookBtn.png'/></a>";
            content += "<a class='share-input-buttons' target='_blank' href='http://www.twitter.com/home?status=" + document.title + " + " + encodeURIComponent(url) + "'><img src='./images/twitterBtn.png'/></a><br/>";

            //Direct map link 
            content += "<div class='share-input-subheader'>" + this.config.i18n.tools.share.link + "</div><input class='share-input' size=20 readonly value='" + url + "'</input>";
            shareDiv.innerHTML = content;

        },
        _getEditableLayers: function (layers) {
            var layerInfos = [];
            array.forEach(layers, function (layer) {

                if (layer && layer.layerObject) {
                    var eLayer = layer.layerObject;
                    if (eLayer instanceof FeatureLayer && eLayer.isEditable()) {
                        layerInfos.push({
                            "featureLayer": eLayer
                        });
                    }
                }
            });
            return layerInfos;
        },
        _getVisibleLayers: function (layers) {
            //Function that creates the list of layers for the layers tool. 
            var layerInfos = [];
            array.forEach(layers, function (mapLayer) {
                if (mapLayer.featureCollection && !mapLayer.layerObject) {
                    if (mapLayer.featureCollection.layers) {
                        //add the first layer in the layer collection... not all  - when we turn off the layers we'll 
                        //turn them all off 
                        if (mapLayer.featureCollection.layers) {
                            layerInfos.push({
                                "layer": mapLayer,
                                "visible": mapLayer.visibility,
                                "title": mapLayer.title
                            });
                        }
                    }
                } else if (mapLayer.layerObject) {
                    layerInfos.push({
                        layer: mapLayer.layerObject,
                        visible: mapLayer.layerObject.visible,
                        title: mapLayer.title
                    });
                }
            });
            return layerInfos;
        },

        _getBasemapGroup: function () {
            //Get the id or owner and title for an organizations custom basemap group. 
            var basemapGroup = null;
            if (this.config.basemapgroup.title && this.config.basemapgroup.owner) {
                basemapGroup = {
                    "owner": this.config.basemapgroup.owner,
                    "title": this.config.basemapgroup.title
                };
            } else if (this.config.basemapgroup.id) {
                basemapGroup = {
                    "id": this.config.basemapgroup.id
                };
            }
            return basemapGroup;
        },


        _createMapUI: function () {
            // Add map specific widgets like the Home  and locate buttons. Also add the geocoder. 
            if (has("home")) {
                domConstruct.create("panelHome", {
                    id: "panelHome",
                    innerHTML: "<div id='btnHome'></div>"
                }, dom.byId("panelTools"), 0);
                var home = new HomeButton({
                    map: this.map
                }, dom.byId("btnHome"));
                //add a tooltip
                domAttr.set("btnHome", "data-title", this.config.i18n.tooltips["home"]);
                home.startup();
            }

            if (has("locate")) {
                domConstruct.create("panelHome", {
                    id: "panelLocate",
                    innerHTML: "<div id='btnLocate'></div>"
                }, dom.byId("panelTools"), 1);
                var geoLocate = new LocateButton({
                    map: this.map
                }, dom.byId("btnLocate"));
                domAttr.set("btnLocate", "data-title", this.config.i18n.tooltips["locate"]);
                geoLocate.startup();

            }

            //Add the location search widget 
            require(["application/has-config!search?application/CreateGeocoder"], lang.hitch(this, function (CreateGeocoder) {
                if (!CreateGeocoder) {
                    return;
                }

                var geocoder = new CreateGeocoder({
                    map: this.map,
                    config: this.config
                });
                if (geocoder.geocoder && geocoder.geocoder.domNode) {
                    domConstruct.place(geocoder.geocoder.domNode, "panelGeocoder");
                }
            }));

            //create the tools 
            this._createUI();

        },
        _updateTheme: function () {
            query(".bg").style("backgroundColor", this.color.toString());
            query(".esriPopup .pointer").style("backgroundColor", this.color.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.color.toString());
        },
        _checkExtent: function () {
            var pt = this.map.extent.getCenter();
            if (!this.initExt.contains(pt)) {
                this.map.setExtent(this.mapExt);
            } else {
                this.mapExt = this.map.extent;
            }
        },
        _enablePopups: function () {
            if (this.popupListener && !this.popupHandler) {
                this.popupHandler = this.map.on("click", this.popupListener);
            }

        },
        _disablePopups: function () {
            if (this.popupHandler) {
                this.popupHandler.remove();
                this.popupHandler = null;
            }

        },
        _createWebMap: function (itemInfo) {
            // create a map based on the input web map id
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {},
                bingMapsKey: this.config.bingKey
            }).then(lang.hitch(this, function (response) {

                this.map = response.map;

                //Save the popup click handler and listener so we can enable/disable popups as needed 
                this.popupHandler = response.clickEventHandle;
                this.popupListener = response.clickEventListener;


                //Set the application title
                this.map = response.map;
                //Set the title - use the config value if provided. 
                var title = this.config.title === null ? response.itemInfo.item.title : this.config.title;
                document.title = title;
                dom.byId("panelText").innerHTML = title;
                this.config.response = response;
                window.config = this.config;

                if (this.initExt !== null) {
                    this.map.setExtent(this.initExt);
                }
                this.initExt = this.map.extent;
                on.once(this.map, "extent-change", lang.hitch(this, this._checkExtent));

                this._createMapUI();
                // make sure map is loaded
                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), this.reportError);
        }
    });
});