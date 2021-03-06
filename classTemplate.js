var className = (function() {
    //https://github.com/sevin7676/js_oop_info/blob/master/classTemplate.js
    var local = {},
        parentClass = null,
        mixins = [];

    var Class = function() {
        var _sf = {}, sf = this;
        if (parentClass) parentClass.call(this /*, args*/ );
        (function Private() {}).call(_sf);
        (function Public() {}).call(sf);
    };

    (function Prototype() {
        //this.demo = function() {var sf = this;};
    }).call(Class.prototype);

    (function Static() {
        var _sf = local,
            sf = Class;
        (function Private() {}).call(local);
        (function Public() {}).call(Class);
    })();

    microMixin(Class.prototype, mixins, parentClass);
    return Class;
}());