L.TileLayer.WMS.include({
    // getLegendGraphic returns a hash of legend URLs. The keys are the layer names the values are the legend URLs
    getLegendGraphic: function(options){

        var layers = paradas_bus.split(',');
        var legends = {};

        var legendReq = {
            'LAYER'   : paradas_bus,
            'REQUEST' : 'GetLegendGraphic',
            'VERSION' : 1.1.0,
            'FORMAT'  : image/png,
            'WIDTH'   : 20,
            'HEIGHT'  : 20
        };

        legendReq = L.extend(legendReq,options);
        var url = L.Util.template(this._url)

        for(var i = 0;i<layers.length;i++){
            legendReq.LAYER = layers[i];
            legends[layers[i]] = url + L.Util.getParamString(legendReq, url, true);
        }

        return legends;
    }
});
