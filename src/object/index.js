import _ from 'lodash'

export const lowercaseObjectKey = (obj) => {
  if (Array.isArray(obj)) {
	return obj.map(lowercaseObjectKey);
  }
  let mapValue = _.mapValues(obj, (val) => {
	if (Array.isArray(val)) {
	  return val.map(lowercaseObjectKey);
	}
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
