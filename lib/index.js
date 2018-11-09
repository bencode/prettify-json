module.exports = function(obj) {
  return prettifyJSON(obj, 0);
};


function prettifyJSON(obj, indent) {
  indent = indent || 0;
  let s = space(indent);
  let parts = null;
  if (obj === null) {
    return 'null';
  }

  if (Array.isArray(obj)) {
    parts = [];
    obj.forEach(function(item) {
      parts.push(prettifyJSON(item, indent).trim());
    });
    s += '[' + parts.join(', ') + ']';
  } else if (typeof obj === 'object') {
    parts = [];
    for (const k in obj) {
      parts.push(space(indent + 2) + k + ': ' +
              prettifyJSON(obj[k], indent + 2).trim());
    }
    s += '{\n' + parts.join(',\n') + '\n' + space(indent) + '}';
  } else {
    s += JSON.stringify(obj);
  }
  return s;
}


function space(len) {
  let s = '';
  for (let i = 0; i < len; i++) {
    s += ' ';
  }
  return s;
}
