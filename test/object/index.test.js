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
  })
})
