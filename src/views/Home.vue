<template lang="pug">
div.mx-2
    div.p-4.p-md-5.mb-4.text-white.rounded.bg-dark(
        :style="`background: url('./assets/index/index.png') no-repeat center center / cover`")
        div.col-md-12.px-0
        h1.display-6.fst-italic PMT - Высококачественные профессиональные покрышки для спорта.
        p.lead.my-3 Мы предоставляем консультационные услуги по выбору составов и давления в покрышках для всех возможных условий
        button.btn(@click="$router.push('/catalog')") Перейти в каталог
</template>