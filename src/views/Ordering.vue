<template lang="pug">

.row.g-5
  .col-md-5.col-lg-4.order-md-last
    h4.d-flex.justify-content-between.align-items-center.mb-3
      span.text-dark Состав заказа
    ul.list-group.mb-3
      li.list-group-item.d-flex.justify-content-between.lh-sm
        div
          h6.my-0 Название товара
          small.text-muted Краткое описание
        span.text-muted 12₽
      li.list-group-item.d-flex.justify-content-between
        span Итого (₽)
        strong 20₽

  .col-md-7.col-lg-8
    h4.mb-3 Оформление заказа
    form.needs-validation(novalidate='')
      .row.g-3
        .col-12
          label.form-label(for='firstName') ФИО
          input#firstName.form-control(type='text', placeholder='', value='', required='')
          .invalid-feedback
            | Valid first name is required.
        .col-12
          label.form-label(for='email') Телефон
            span.text-muted
          input#email.form-control(type='email', placeholder='+8 (904) 555 35 35')
          .invalid-feedback
            | Please enter a valid email address for shipping updates.
        .col-12
          label.form-label(for='email')
            | &Ecy;&lcy;&iecy;&kcy;&tcy;&rcy;&ocy;&ncy;&ncy;&acy;&yacy; &pcy;&ocy;&chcy;&tcy;&acy; 
            span.text-muted (&Ncy;&iecy; &ocy;&bcy;&yacy;&zcy;&acy;&tcy;&iecy;&lcy;&softcy;&ncy;&ocy;)
          input#email.form-control(type='email', placeholder='order@pmt.ru')
          .invalid-feedback
            | Please enter a valid email address for shipping updates.
      hr.my-4
      button.w-100.btn.btn-warning.btn-lg(type='submit') &Scy;&dcy;&iecy;&lcy;&acy;&tcy;&softcy; &zcy;&acy;&kcy;&acy;&zcy;

</template>

<script>
export default {

}
</script>

<style>

</style>