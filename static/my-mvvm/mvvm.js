// mvvm 数据代理的实现
function Mvvm(option)
{
    this.$option=option;
    var data=this._data=this.$option.data;
    var me=this
    Object.keys(data).forEach(function(key){
        me._proxy(key);
    })
}
Mvvm.prototype= {
    _proxy: function (key) {
        var me = this
        Object.defineProperty(me,key,{
            configurable: false,
            enumerable:true,
            get () {
                return me._data[key]
            },
            set (val) {
                me._data[key]=val
            }
        })
    }
}