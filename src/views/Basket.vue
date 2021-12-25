<template>
<div class="row mt-5 justify-content-center row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col-sm-6">
        <div class="row mb-5 justify-content-around">
            <div class="col-5 text-end">
                <img v-bind:src="`../assets/img/small/1.jpg`" class="img-fluid " alt="" style="max-width: 100px;">
            </div>
            <div class="col-7 text-start">
                <h5 class="lead">Заголовок карточки</h5>
                <p class="">9000 рублей <small class="text-muted">(2 х 4500)</small></p>
                <p class=""></p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-sm btn-outline-secondary">-</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" disabled>2</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">+</button>
                </div>
            </div>

        </div>
    </div>
    <div class="col-sm-6 text-center ">
        <div class="row justify-content-center">
            <div class="card" style="width: 18rem;">
                <div class="card-body text-center">
                    <p>К оплате: 4500 рублей</p>
                    <button class="btn btn-danger">Перейти к оформлению</button>
                </div>
            </div>
        </div>

    </div>
</div>

</template>

<script>
export default {

}
</script>

<style>

</style>