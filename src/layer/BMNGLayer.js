/*
 * Copyright 2003-2006, 2009, 2017, United States Government, as represented by the Administrator of the
 * National Aeronautics and Space Administration. All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @exports BMNGLayer
 */
define([
        '../geom/Location',
        '../geom/Sector',
        '../layer/TiledImageLayer',
        '../util/WmsUrlBuilder'
    ],
    function (Location,
              Sector,
              TiledImageLayer,
              WmsUrlBuilder) {
        "use strict";

        /**
         * Constructs a Blue Marble image layer.
         * @alias BMNGLayer
         * @constructor
         * @augments TiledImageLayer
         * @classdesc Displays a Blue Marble image layer that spans the entire globe.
         * @param {String} layerName The name of the layer to display, in the form "BlueMarble-200401"
         * "BlueMarble-200402", ... "BlueMarble-200412". "BlueMarble-200405" is used if the argument is null
         * or undefined.
         */
        var BMNGLayer = function (layerName) {
            // This LevelSet configuration captures the Blue Marble resolution of 4.166666667E-03 degrees/pixel
            TiledImageLayer.call(this,
                Sector.FULL_SPHERE, new Location(45, 45), 7, "image/jpeg", layerName || "BMNG256", 256, 256);

            this.displayName = "Blue Marble";
            this.pickEnabled = false;

            this.urlBuilder = new WmsUrlBuilder("https://astropedia.astrogeology.usgs.gov/download/Moon/LRO/LOLA/thumbs/LRO_LrocKaguya_DEMmerge_Shade_60N60S_max.jpg", //Pasted Test layer #1 here
                layerName || "BlueMarble-200405", "", "1.3.0");
        };

        BMNGLayer.prototype = Object.create(TiledImageLayer.prototype);

        return BMNGLayer;
    });