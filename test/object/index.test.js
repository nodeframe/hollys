import * as ObjectModule from '../../src/object'
import _ from 'lodash'

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised).should()


describe('ObjectModule', function(){
  context('#lowercaseObjectKey', () => {
	let objTemplate = {
	  "Key1": 'what what',
	  "Key2": 'haha',
	  "AAA": 'hehe',
	  "Dog": 'huhu'
	}
	let objResult = {
	  "key1": 'what what',
	  "key2": 'haha',
	  "aaa": 'hehe',
	  "dog": 'huhu'
	}

    it('should be able to lowercase all the object keys', () => {
	  let obj = _.cloneDeep(objTemplate)
	  ObjectModule.lowercaseObjectKey(obj).should.be.deep.equal(objResult)
    })

	it('should remain old value if the lowercased key is same as the existing key', () => {
	  let obj = _.cloneDeep(objTemplate)
	  obj['dog'] = 'should_show_this?'
	  ObjectModule.lowercaseObjectKey(obj).should.be.deep.equal(
		_.merge(
		  	_.cloneDeep(objResult),
			{ 'dog': 'should_show_this?' }
	  	))
	})

	it('should return null or undefined value same as the input', () => {
	  let obj = {
		"Key1": "this is the probe",
		"Akey": null,
		"Bkey": undefined
	  }
	  ObjectModule.lowercaseObjectKey(obj)
		.should.be.deep.equal({
		  "key1": "this is the probe",
		  "akey": null,
		  "bkey": undefined
	  })
	})
	it('should be able to lowercase nested object', () => {
	  let obj = _.cloneDeep(objTemplate)
	  obj.nest = {
		"ToLower1": 4561,
		"ToLower2": 'hahaha',
		"AnotherNest": {
		  "LowerMe": "yoyo"
		}
	  }
	  ObjectModule.lowercaseObjectKey(obj)
		.should.be.deep.equal(
		  _.merge(
			_.cloneDeep(objResult),
			{
			  "nest": {
				"tolower1": 4561,
				"tolower2": "hahaha",
				"anothernest": {
				  "lowerme": "yoyo"
				}
			  }
			}
		  )
	  )
	})

	it('should be able to lowercase object in the array as well', () => {
	  let obj = _.cloneDeep(objTemplate)
	  obj.Array = ["string", "Should not be lower", {"ShouldBeLower": "Value"}]
	  ObjectModule.lowercaseObjectKey(obj)
		.should.be.deep.equal(
		  _.merge(
			_.cloneDeep(objResult),
			{
			  "array": [
				"string", "Should not be lower",
				{"shouldbelower": "Value"}
			  ]
			}
		  )
	  	)
	})
  })
})
