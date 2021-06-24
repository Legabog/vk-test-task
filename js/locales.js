window.locales = {
  en: {
    pageTitle: "Test app",
    header: {
      title: "Test app",
    },
    body: {
      form: {
        title: "Registration",
        email_input: {
          title: "E-mail",
          placeholder: "Enter email",
        },
        password_inputs: {
          title: "Password",
          placeholder_1: "Enter password",
          placeholder_2: "Repeat password",
          description:
            "The password can only contain Latin letters and numbers.",
        },
        name_surname_inputs: {
          title_1: "Name",
          title_2: "Surname",
          placeholder_1: "Enter name",
          placeholder_2: "Enter surname",
        },
        gender_select: {
          title: "Gender",
          default_value: "Choose gender",
          value_1: "Female",
          value_2: "Male",
        },
        document_inputs: {
          title: "Type of document",
          value_1: "Passport",
          value_2: "Tourist Passport",
        },
        postcode_input: {
          title: "Postcode",
          placeholder: "Enter postcode",
        },
        country_input: {
          title: "Country",
          placeholder: "Enter country",
        },
        city_input: {
          title: "City",
          placeholder: "Enter city",
        },
        purpose_select: {
          title: "Purpose of trip",
          default_value: "Choose purpose of trip",
          value_1: "Business or work",
          value_2: "Individual tourism",
          value_3: "Visiting close relatives",
        },
        myinfo_textarea: {
          title: "About yourself",
        },
        agree_input: {
          title: "Agree with this",
        },
        button: {
          title: "Registration",
        },
      },
    },
    footer: {
      author: "2021 © Author: Dosov O.E.",
    },
  },

  ru: {
    pageTitle: "Тестовое",
    header: {
      title: "Тестовое",
    },
    body: {
      form: {
        title: "Регистрация",
        email_input: {
          title: "E-mail",
          placeholder: "Введите e-mail",
        },
        password_inputs: {
          title: "Пароль",
          placeholder_1: "Введите пароль",
          placeholder_2: "Повторите пароль",
          description: "Пароль может содержать только латинские буквы и цифры.",
        },

        name_surname_inputs: {
          title_1: "Имя",
          title_2: "Фамилия",
          placeholder_1: "Введите имя",
          placeholder_2: "Введите фамилию",
        },
        gender_select: {
          title: "Пол",
          default_value: "Выберите пол",
          value_1: "Женский",
          value_2: "Мужской",
        },
        document_inputs: {
          title: "Тип документа",
          value_1: "Паспорт",
          value_2: "Загран",
        },
        postcode_input: {
          title: "Почтовый индекс",
          placeholder: "Введите почтовый индекс",
        },
        country_input: {
          title: "Страна",
          placeholder: "Введите страну",
        },
        city_input: {
          title: "Город",
          placeholder: "Введите город",
        },
        purpose_select: {
          title: "Цель поездки",
          default_value: "Выберите цель поездки",
          value_1: "Бизнес или работа",
          value_2: "Индивидуальный туризм",
          value_3: "Посещение близких родственников",
        },
        myinfo_textarea: {
          title: "О себе",
        },
        agree_input: {
          title: "Согласен с этим",
        },
        button: {
          title: "Зарегистрироваться",
        },
      },
    },
    footer: {
      author: "2021 © Автор: Досов О.Е.",
    },
  },
};

window.setTextToComponents = () => {
  // Page
  document.title = locales[`${localStorage.language}`].pageTitle;

  // Header
  document.getElementById("title").children[0].innerText =
    locales[`${localStorage.language}`].header.title;

  // Body
  // Form
  // Title
  document.getElementById("form-title").innerText =
    locales[`${localStorage.language}`].body.form.title;
  // Email Input
  // Title
  document.getElementById("email-input-title").innerText =
    locales[`${localStorage.language}`].body.form.email_input.title;
  // Placeholder
  document.getElementById("email-input").placeholder =
    locales[`${localStorage.language}`].body.form.email_input.placeholder;
  //
  // Password Input
  // Title
  document.getElementById("password-input-title").innerText =
    locales[`${localStorage.language}`].body.form.password_inputs.title;
  // Placeholder 1
  document.getElementById("password-input-1").placeholder =
    locales[`${localStorage.language}`].body.form.password_inputs.placeholder_1;
  // Placeholder 2
  document.getElementById("password-input-2").placeholder =
    locales[`${localStorage.language}`].body.form.password_inputs.placeholder_2;
  // Description
  document.getElementById("password-input-description").innerText =
    locales[`${localStorage.language}`].body.form.password_inputs.description;
  // Name surname Input
  // Name
  document.getElementById("name-input-title").innerText =
    locales[`${localStorage.language}`].body.form.name_surname_inputs.title_1;
  // Placeholder
  document.getElementById("name-input").placeholder =
    locales[
      `${localStorage.language}`
    ].body.form.name_surname_inputs.placeholder_1;
  // Surname
  document.getElementById("surname-input-title").innerText =
    locales[`${localStorage.language}`].body.form.name_surname_inputs.title_2;
  // Placeholder
  document.getElementById("surname-input").placeholder =
    locales[
      `${localStorage.language}`
    ].body.form.name_surname_inputs.placeholder_2;
  // Gender select
  // Title
  document.getElementById("gender-select-title").innerText =
    locales[`${localStorage.language}`].body.form.gender_select.title;
  // Default value
  document.getElementById("gender-default-option").innerText =
    locales[`${localStorage.language}`].body.form.gender_select.default_value;
  // Value 1
  document.getElementById("gender-option-1").innerText =
    locales[`${localStorage.language}`].body.form.gender_select.value_1;
  // Value 2
  document.getElementById("gender-option-2").innerText =
    locales[`${localStorage.language}`].body.form.gender_select.value_2;
  // Document inputs
  // Title
  document.getElementById("document-input-title").innerText =
    locales[`${localStorage.language}`].body.form.document_inputs.title;
  // Label 1
  document.getElementById("document-input-title-1").innerText =
    locales[`${localStorage.language}`].body.form.document_inputs.value_1;
  // Label 2
  document.getElementById("document-input-title-2").innerText =
    locales[`${localStorage.language}`].body.form.document_inputs.value_2;
  // Postcode input
  // Title
  document.getElementById("postcode-input-title").innerText =
    locales[`${localStorage.language}`].body.form.postcode_input.title;
  // Placeholder
  document.getElementById("postcode-input").placeholder =
    locales[`${localStorage.language}`].body.form.postcode_input.placeholder;
  // Country input
  // Title
  document.getElementById("country-input-title").innerText =
    locales[`${localStorage.language}`].body.form.country_input.title;
  // Placeholder
  document.getElementById("country-input").placeholder =
    locales[`${localStorage.language}`].body.form.country_input.placeholder;
  // City input
  // Title
  document.getElementById("city-input-title").innerText =
    locales[`${localStorage.language}`].body.form.city_input.title;
  // Placeholder
  document.getElementById("city-input").placeholder =
    locales[`${localStorage.language}`].body.form.city_input.placeholder;
  // Purpose select
  // Title
  document.getElementById("purpose-select-title").innerText =
    locales[`${localStorage.language}`].body.form.purpose_select.title;
  // Default value
  document.getElementById("purpose-default-option").innerText =
    locales[`${localStorage.language}`].body.form.purpose_select.default_value;
  // Value 1
  document.getElementById("purpose-option-1").innerText =
    locales[`${localStorage.language}`].body.form.purpose_select.value_1;
  // Value 2
  document.getElementById("purpose-option-2").innerText =
    locales[`${localStorage.language}`].body.form.purpose_select.value_2;
  // Value 3
  document.getElementById("purpose-option-3").innerText =
    locales[`${localStorage.language}`].body.form.purpose_select.value_3;
  // My info textarea
  // Title
  document.getElementById("myinfo-textarea-title").innerText =
    locales[`${localStorage.language}`].body.form.myinfo_textarea.title;
  // Agree input
  // Title
  document.getElementById("agree-input-title").innerText =
    locales[`${localStorage.language}`].body.form.agree_input.title;
  // Registration button
  // Title
  document.getElementById("registration-button-title").innerText =
    locales[`${localStorage.language}`].body.form.button.title;

  // Footer
  document.getElementById("footer").children[0].innerText =
    locales[`${localStorage.language}`].footer.author;
};

const language = window.navigator.language.slice(0, 2);

// default language
if (!localStorage.language) localStorage.language = language;
