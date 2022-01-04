<template>
<div class="row g-5">

      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-dark">Состав заказа</span>
        </h4>
        <ul class="list-group mb-3">

          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">12₽</span>
          </li>

          <li class="list-group-item d-flex justify-content-between">
            <span>Итого (₽)</span>
            <strong>20₽</strong>
          </li>

        </ul>
      </div>


      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Оформление заказа</h4>
        <form class="needs-validation" novalidate="">

          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">ФИО</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Телефон для связи<span class="text-muted"></span></label>
              <input type="email" class="form-control" id="email" placeholder="+8 (904) 555 35 35">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Электронная почта <span class="text-muted">(Не обязательно)</span></label>
              <input type="email" class="form-control" id="email" placeholder="order@pmt.ru">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-warning btn-lg" type="submit">Сделать заказ</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>