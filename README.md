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