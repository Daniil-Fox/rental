import { validateForms } from './../functions/validate-forms.js';

const checks = [
  {
    selector: "#form-checks",
    errorMessage: "Выберите чекбоксы",
  }
];

const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-time',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните время!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  alert('Спасибо за заявку! С вами свяжутся в ближайшее время.')
};

validateForms('.modal__form', rules1, checks, afterForm);
