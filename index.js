var _ = require('underscore')

module.exports = {

  _cheapClone: function(obj) {

  	// Stupid hacky way to perform a deep clone.
  	
    return JSON.parse( JSON.stringify(obj) )
  },

  _encode: function(obj) {
    var self = this

    Object.keys(obj).forEach(function(key) {
      if (typeof obj[key] == 'string')
        obj[key] = escape(obj[key])

      if (_.isArray(obj[key]))
        obj[key] = _.map(obj[key], function(k) { 
          if (_.isObject(k)) 
            return self._encode(k)

          return escape(k) 
        })

      if (_.isObject(obj[key]))
        obj[key] = self._encode(obj[key])
    })
    return obj
  },

  _decode: function(obj) {
    var self = this

    Object.keys(obj).forEach(function(key) {
      if (typeof obj[key] == 'string')
        obj[key] = unescape(obj[key])

      if (_.isArray(obj[key]))
        obj[key] = _.map(obj[key], function(k) { 
          if (_.isObject(k)) 
            return self._decode(k)

          return unescape(k) 
        })

      if (_.isObject(obj[key]))
        obj[key] = self._decode(obj[key])
    })
    return obj
  },

  encode: function(obj) {

    return this._encode( this._cheapClone(obj) )
  },

  decode: function(obj) {

    return this._decode( this._cheapClone(obj) )
  }
}