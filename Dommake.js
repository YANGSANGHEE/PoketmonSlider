const makeDom = {
  MakeTag: (ParentTag, Count, ChildTag) => {
    let CreEleArr = [];
    if (typeof ParentTag === 'string') {
      CreEleArr.unshift(`<${ParentTag}>`);
      CreEleArr.push(`</${ParentTag}>`);
    }
    if (typeof Count === 'number') {
      for (let i = 0; i < Count; i++) {
        CreEleArr.splice(1, 0, `<${ChildTag}></${ChildTag}>`);
      }
    }
    // console.log(CreEleArr);
    return CreEleArr.join('');
  },
  MakeTag2: (Count, ChildTag) => {
    let CreEleArr = [];
    if (typeof Count === 'number') {
      for (let i = 0; i < Count; i++) {
        CreEleArr.push(`<${ChildTag}></${ChildTag}>`);
      }
    }
    // console.log(CreEleArr);
    return CreEleArr.join('');
  },
  AppendTag: (ParentNode, ChildNode) => {
    ParentNode.innerHTML = `${ChildNode}`;
  },
  Style: (Element, StyleProp) => {
    for (const key in StyleProp) {
      Element.style[key] = StyleProp[key];
    }
  },
};

export { makeDom };
