function getElementsByStyle(property, value) {
  const elements = [];

  const helper = (element) => {
    const elementStyles = getComputedStyle(element);

    if (property in elementStyles && elementStyles[property] === value) {
      elements.push(element);
    }
    for (let i = 0; i < element.children.length; i++) {
      helper(element.children[i]);
    }
  };

  helper(document.body);

  return elements;
}

console.log(getElementsByStyle("text-align", "center"));
