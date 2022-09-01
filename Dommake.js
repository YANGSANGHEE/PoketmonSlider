const makeDom = {
  MakeTag: (
    ParentTag,
    ChildTag,
    Attri = '',
    AttriName = '',
    Count,
    Content = ''
  ) => {
    let CreEleArr = [];
    if (typeof ParentTag === 'string') {
      CreEleArr.unshift(`<${ParentTag}>`);
      CreEleArr.push(`</${ParentTag}>`);
    }
    if (typeof Count === 'number') {
      for (let i = 0; i < Count; i++) {
        if (typeof ChildTag === 'string') {
          CreEleArr.push(
            `<${ChildTag} ${Attri} = "${AttriName}">${Content}</${ChildTag}>`
          );
        }
      }
    }
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
