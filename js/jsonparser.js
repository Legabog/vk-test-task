function jsonParser() {
  // Json
  this.json = window.jsonData;

  function setAttributes(component, attributes) {
    if (attributes === undefined) return;
    attributes.map((e) => {
      if (e[0] === "text") component.innerText = e[1];
      component.setAttribute(e[0], e[1]);
    });
  }

  function setHandlers(component, handlers) {
    if (handlers === undefined) return;
    handlers.map((e) => {
      component.addEventListener(e[0], e[1]);
    });
  }

  function setCustomStyles(component, custom_styles) {
    if (custom_styles === undefined) return;
    custom_styles.map((e) => {
      component.classList.add(e);
    });
  }

  function setComponents(parent_id, components) {
    if (components === undefined) return;
    components.map((e) => {
      createComponent(
        parent_id,
        e.tag,
        e.attributes,
        e.custom_styles,
        e.handlers,
        e.components
      );
    });
  }

  function createComponent(
    parent_id,
    tag,
    attributes,
    custom_styles,
    handlers,
    components
  ) {
    const parent = document.getElementById(parent_id);
    const component = document.createElement(tag);

    setAttributes(component, attributes);
    setCustomStyles(component, custom_styles);
    setHandlers(component, handlers);
    parent.appendChild(component);

    setComponents(component.id, components);
  }

  return [createComponent];
}

const [createComponent] = jsonParser();
createComponent(
  "body",
  "form",
  jsonData.attributes,
  jsonData.custom_styles,
  jsonData.handlers,
  jsonData.components
);
setTextToComponents();
