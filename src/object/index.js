import _ from 'lodash'

export const lowercaseObjectKey = (obj) => {
  if (Array.isArray(obj)) {
	return obj.map(lowercaseObjectKey);
  }
  let type = typeof obj
  if (type === 'string' || type === 'number') { return obj }
  let mapValue = _.mapValues(obj, (val) => {
	if (Array.isArray(val)) {
	  return val.map(lowercaseObjectKey);
	}
	if(_.isNil(val)) { return val }
	switch (typeof val) {
	  case 'string':
		return val.trim();
	  case 'object':
		return lowercaseObjectKey(val);
	  default:
		return val;
	}
  });
  return _.mapKeys(mapValue, (val, key) => {
	return key.toLowerCase()
  });
};
