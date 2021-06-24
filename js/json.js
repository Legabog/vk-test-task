const components = {
  // Component FormTitle
  FormTitle: {
    tag: "div",
    attributes: [
      ["name", "Form-title-wrapper"],
      ["id", "form-title-wrapper"],
    ],
    custom_styles: ["form-title-wrapper"],
    components: [
      {
        tag: "span",
        attributes: [
          ["name", "Form-title"],
          ["id", "form-title"],
        ],
        custom_styles: ["VKUI-title"],
      },
      {
        tag: "hr",
      },
    ],
  },
  // Component EmailInput
  EmailInput: {
    tag: "div",
    attributes: [["id", "input-wrapper-1"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "email-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "email-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-1"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "email-input"],
              ["type", "email"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
    ],
  },
  // Component PasswordInput
  PasswordInput: {
    tag: "div",
    attributes: [["id", "input-wrapper-2"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "password-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "password-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-2"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "password-input-1"],
              ["type", "password"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-3"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "password-input-2"],
              ["type", "password"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "password-input-description-wrapper"]],
        custom_styles: ["form-input-description-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "password-input-description"]],
            custom_styles: ["VKUI-input-description"],
          },
        ],
      },
    ],
  },
  // Component NameSurnameDoubleInputs
  NameSurnameDoubleInputs: {
    tag: "div",
    attributes: [["id", "input-wrapper-4"]],
    custom_styles: ["form-input-flex-wrapper"],
    components: [
      // name
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-4"]],
        components: [
          {
            tag: "div",
            attributes: [["id", "name-input-title-wrapper"]],
            custom_styles: ["form-span-wrapper"],
            components: [
              {
                tag: "span",
                attributes: [["id", "name-input-title"]],
              },
            ],
          },
          {
            tag: "div",
            attributes: [["id", "input-second-wrapper-5"]],
            custom_styles: ["form-input-second-wrapper"],
            components: [
              {
                tag: "input",
                attributes: [
                  ["id", "name-input"],
                  ["type", "text"],
                ],
                custom_styles: ["VKUI-input"],
              },
            ],
          },
        ],
      },
      // surname
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-6"]],
        custom_styles: ["margin-for-inputs"],
        components: [
          {
            tag: "div",
            attributes: [["id", "surname-input-title-wrapper"]],
            custom_styles: ["form-span-wrapper"],
            components: [
              {
                tag: "span",
                attributes: [["id", "surname-input-title"]],
              },
            ],
          },
          {
            tag: "div",
            attributes: [["id", "input-second-wrapper-7"]],
            custom_styles: ["form-input-second-wrapper"],
            components: [
              {
                tag: "input",
                attributes: [
                  ["id", "surname-input"],
                  ["type", "text"],
                ],
                custom_styles: ["VKUI-input"],
              },
            ],
          },
        ],
      },
    ],
  },
  // Component GenderSelect
  GenderSelect: {
    tag: "div",
    attributes: [["id", "input-wrapper-5"]],
    components: [
      {
        tag: "div",
        attributes: [["id", "gender-select-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "gender-select-title"]],
          },
        ],
      },
      {
        tag: "select",
        attributes: [["id", "gender-select"]],
        custom_styles: ["form-select"],
        components: [
          {
            tag: "option",
            attributes: [
              ["id", "gender-default-option"],
              ["disabled", true],
              ["hidden", true],
              ["selected", true],
            ],
          },
          {
            tag: "option",
            attributes: [["id", "gender-option-1"]],
          },
          {
            tag: "option",
            attributes: [["id", "gender-option-2"]],
          },
        ],
      },
    ],
  },
  // Component DocumentCheckbox
  DocumentCheckbox: {
    tag: "div",
    attributes: [["id", "input-wrapper-6"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "document-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "document-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-8"]],
        custom_styles: ["form-checkbox-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "document-input-1"],
              ["type", "radio"],
            ],
            // custom_styles: ["VKUI-input"],
          },
          {
            tag: "span",
            attributes: [["id", "document-input-title-1"]],
            custom_styles: ["VKUI-label"],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-9"]],
        custom_styles: ["form-checkbox-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "document-input-2"],
              ["type", "radio"],
            ],
            // custom_styles: ["VKUI-input"],
          },
          {
            tag: "span",
            attributes: [["id", "document-input-title-2"]],
            custom_styles: ["VKUI-label"],
          },
        ],
      },
    ],
  },
  // Component PostCodeInput
  PostCodeInput: {
    tag: "div",
    attributes: [["id", "input-wrapper-7"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "postcode-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "postcode-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-10"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "postcode-input"],
              ["type", "text"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
    ],
  },
  // Component CountryInput
  CountryInput: {
    tag: "div",
    attributes: [["id", "input-wrapper-8"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "country-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "country-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-11"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "country-input"],
              ["type", "text"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
    ],
  },

  // Component CityInput
  CityInput: {
    tag: "div",
    attributes: [["id", "input-wrapper-9"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "city-input-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "city-input-title"]],
          },
        ],
      },
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-12"]],
        custom_styles: ["form-input-second-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "city-input"],
              ["type", "text"],
            ],
            custom_styles: ["VKUI-input"],
          },
        ],
      },
    ],
  },
  // Component PurposeSelect
  PurposeSelect: {
    tag: "div",
    attributes: [["id", "input-wrapper-10"]],
    components: [
      {
        tag: "div",
        attributes: [["id", "purpose-select-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "purpose-select-title"]],
          },
        ],
      },
      {
        tag: "select",
        attributes: [["id", "purpose-select"]],
        custom_styles: ["form-select"],
        components: [
          {
            tag: "option",
            attributes: [
              ["id", "purpose-default-option"],
              ["disabled", true],
              ["hidden", true],
              ["selected", true],
            ],
          },
          {
            tag: "option",
            attributes: [["id", "purpose-option-1"]],
          },
          {
            tag: "option",
            attributes: [["id", "purpose-option-2"]],
          },
          {
            tag: "option",
            attributes: [["id", "purpose-option-3"]],
          },
        ],
      },
    ],
  },
  // Component MyInfoTextarea
  MyInfoTextarea: {
    tag: "div",
    attributes: [["id", "input-wrapper-11"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "myinfo-textarea-title-wrapper"]],
        custom_styles: ["form-span-wrapper"],
        components: [
          {
            tag: "span",
            attributes: [["id", "myinfo-textarea-title"]],
          },
        ],
      },
      {
        tag: "textarea",
        attributes: [["id", "myinfo-textarea"]],
        custom_styles: ["VKUI-textarea"],
      },
    ],
  },
  // Component AgreeCheckbox
  AgreeCheckbox: {
    tag: "div",
    attributes: [["id", "input-wrapper-12"]],
    custom_styles: ["form-input-wrapper"],
    components: [
      {
        tag: "div",
        attributes: [["id", "input-second-wrapper-13"]],
        custom_styles: ["form-checkbox-wrapper"],
        components: [
          {
            tag: "input",
            attributes: [
              ["id", "agree-input"],
              ["type", "checkbox"],
            ],
          },
          {
            tag: "span",
            attributes: [["id", "agree-input-title"]],
            custom_styles: ["VKUI-label"],
          },
        ],
      },
    ],
  },
  // Component RegistrationButton
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
};

window.jsonData = {
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
};
