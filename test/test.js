
var _ = require('underscore')
var assert  = require('assert')
var coding = require('../index')

describe('Numbers', function() {

  it('should encode a Number', function() {

    var data = {title: 1 }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
  })
  
  it('should encode an Array of Numbers', function() {

    var data = [ 1, 2, 3 ]
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
  })

})

describe('Strings', function() {

  it('should encode a String', function() {

    var data = { title: 'This is a test' }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })
  
  it('should encode an Array of Strings', function() {

    var data = [ 'one ', 'two', 'three' ]

    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )
   
    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })

})

describe('Objects', function() {

  it('should encode an Object', function() {

    var data = { name: { title: 'This is a test'}  }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })
  
  it('should encode an Array of Objects', function() {

    var data = { name: [ 
    	           { title: 'This is a first test'}, 
    	           { title: 'This is a second test'}
    	         ]  
    	       }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })

})

describe('Mixed', function() {

  it('should encode an Mixed Data', function() {

    var data = { 
    	one: 'One String',
    	two: [ 'One String', 'Two String'],
    	three: { title: 'One String' },
    	four: [ { title: 'One String' }, { title: 'Two String' } ],
    	five: 1,
    	six: [ 1, 2, 3 ],
    	seven: [ 1, { title: 'One Strig' }, 'One String', [ 'One String', 'Two String' ] ]
    }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })
  
})

describe('Nested', function() {

  it('should encode an Nexted Array of String', function() {

    var data = { 
    	title: [
          [ 
            [ 'One String', 'Two String' ]
          ]

    	]
    }
    
    var d1 = coding.encode( data )
    var d2 = coding.decode( d1 )

    assert.deepEqual(d2, data, 'Data makes the encode/decode correctly')
    assert.notDeepEqual(d1, d2, 'Encode and Decode are not the same')
  })
  
})
