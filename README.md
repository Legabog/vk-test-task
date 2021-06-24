<p align="center">
  <a href="https://vk.com/@vkteam-testovoe-zadanie-frontend-infrastruktura">
    <img alt="Vk-logo" src="https://user-images.githubusercontent.com/44378669/123253109-c1e4b780-d4f5-11eb-9603-6bb600dfcd1b.png" width="60" />
  </a>
</p>
<h1 align="center">
  VK-frontend-test-task &middot;  <img alt="MIT-logo" src="https://img.shields.io/badge/license-MIT-green.svg" /> 
</h1>



## Оглавление

- [Задание](#Задание)
- [Формат компонентов](#Формат-компонентов)
- [Механзим парсера json](#Механзим-парсера-json)
- [Форма регистрации](#Форма-регистрации)

## Задание
<a name="Задание"></a> 
### Тестовое задание для стажёра в команду фронтенд-инфраструктуры.
### Генератор форм. 

**Задание:** ```Напишите код, который будет преобразовывать JSON с описанием контента формы — в готовую вёрстку.```

## Формат компонентов
<a name="Формат-компонентов"></a> 
Форма описывается с помощью объекта и его свойств:
```
{
  tag: "form",
  attributes: [
    ["action", "url"],
    ["autocomplete", "off"],
    ["name", "Form-1"],
    ["id", "form-1"],
  ],
  handlers: [["click", () => console.log("Wow. Form click!")]],
  custom_styles: ["classic-form"],
  components: [
    components.FormTitle,
    components.EmailInput,
    components.PasswordInput,
    components.NameSurnameDoubleInputs,
    components.GenderSelect,
    components.DocumentCheckbox,
    components.PostCodeInput,
    components.CountryInput,
    components.CityInput,
    components.PurposeSelect,
    components.MyInfoTextarea,
    components.AgreeCheckbox,
    components.RegistrationButton,
  ],
}
```
1. **tag** - это свойство хранит тег компонента.
2. **attributes** - это свойство хранит массив атрибутов формата [attribute, value], в парсере происходит обход этого массива и присваивание всех атрибутов компоненту. ```Важно! Каждому компоненту необходимо присваивать id. Потому что в механизме парсинга присутствует parentId.```
3. **handlers** - это свойство хранит массив хендлеров, которые присваиваются компоненту.
4. **custom_styles** - это свойство хранит массив классов, которые добавляются компоненту.
5. **components** - это свойство хранит массив вложенных компонентов.

```Важно! Сама по себе структура предполагает расширение структуры. Для этого в парсере мы должны добавить обработчик нового свойства. Напрмер, мы можем добавить свойство validation, которое будет хранить в себе результат валидирования компонента.```

Пример: компонент кнопки для реистрации:
```
RegistrationButton: {
    tag: "div",
    attributes: [["id", "input-wrapper-13"]],
    custom_styles: ["form-button-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "button-second-wrapper"]],
        custom_styles: ["form-button-second-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "registration-button-title"]],
          },
        ],
      },
    ],
  },
```
## Механзим парсера json
<a name="Механзим-парсера-json"><a/>
Парсер по своей сути проходит по всей структуре json, пока не дойдёт до последних уровней, где не будет вложенных компонентов. Происходит рекурсивный обход.
Функция jsonParser:
```
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
```
Сеттеры:
* setAttributes - функция, которая мапит attributes и присваиввает их компоненту.
* setHandlers - функция, которая мапит handlers и присваиввает их компоненту.
* setCustomStyles - функция, которая мапит custom_styles и добавляет компоненте.
* setComponents - функция сетает вложенные компоненты.

Функция createComponent - сетает все свойства компоненту создаёт её и присваивает родителю.

## Форма регистрации
<a name="Форма-регистрации"></a> 
Я использовал стиль библиотеки [VKUI](https://vkcom.github.io/VKUI/).
Форма: 
![image](https://user-images.githubusercontent.com/44378669/123283993-902f1900-d514-11eb-9b97-3006ee6aab9d.png)

✅ Адаптивность.
  
✅ Есть светлая и тёмная тема.

✅ Реализована локализация.

✅ При перезагрузке страницы состаяния сохраняются. Используется LocalStorage.

✅ Инкапсуляция стилей.