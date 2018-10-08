const createEnumerableProperty = (property) => {return property};

const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    configurable: true,
    enumerable: false,
    get : () => {return property},
    set : (value) => {property = value}
  });
  return property;
};

const createProtoMagicObject = () => {
  let obj = () => {};
  obj.prototype = obj.__proto__;
  return obj;
};


let index = 0;

Function.__proto__.valueOf = () => {
  return index;
};

const incrementor = () => {
  ++index;
  return incrementor;
};

let asyncCount = 0;

const asyncIncrementor = () => {
  return new Promise ((resolve) => {resolve(++asyncCount);});
};

const createIncrementer = () => {
  const incrementer = function* () {
    let index = 0;

    while(true) 
      yield ++index;
  }
  return incrementer();
};

const returnBackInSecond = (param) => {
  return new Promise((resolve)  => {
    setTimeout(() => {resolve(param);}, 1000)});
};

const getDeepPropertiesCount = (obj) => {
  let count = Object.getOwnPropertyNames(obj).length;
  for (let key of Object.getOwnPropertyNames(obj)) {
    if (Object.getOwnPropertyNames(obj[key]).length > 0) {
      count += getDeepPropertiesCount(obj[key]);
    }
  }
  return count;
}

const createSerializedObject = () => {
  return new String(JSON.stringify({key: 'value'}));
}

const sortByProto = (arr) => {
  arr.sort((a,b) => a - b);
  return arr;
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;