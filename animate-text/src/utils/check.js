const checkNode= el=> {
  if (!el)  return errorList(el);
  let dom = null;
  if (typeof el === 'string') {
    dom = document.querySelector(el);
    if (!dom) return errorList(el);
  } else if (typeof el === 'object') {
    if (!el.nodeName) return errorList(el);
  }
  return dom || el;
}

const errorList = el=> console.error('找不到当前节点', el);

export {
  checkNode
}