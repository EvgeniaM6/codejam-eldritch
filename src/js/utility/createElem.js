export function createElem(tagName, clasName, attributesObj, appendArr, parent) {
  const createdElem = typeof tagName === 'string' ? document.createElement(tagName) : tagName;
  

  if (clasName) {
    createdElem.className = clasName;
  }
  if (attributesObj) {
    Object.keys(attributesObj).forEach(attributeName => {
      createdElem.setAttribute(attributeName, attributesObj[attributeName])
    })
  }
  if (appendArr) {
    if (typeof appendArr === 'string') {
      createdElem.textContent = appendArr;
    } else {
      appendArr.forEach(element => {
        createdElem.append(element)
      });
    }
  }
  if (parent) {
    parent.append(createdElem)
  }
  return createdElem
}