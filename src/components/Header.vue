<template>
    <section id="header">

        <b-navbar toggleable="md" type="dark" variant="info" sticky="true" fixed>

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand><img src="src/assets/images/logo-xs.png"/> </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#one">Продукция</b-nav-item>
                    <b-nav-item href="#two">Комплектация</b-nav-item>
                    <b-nav-item href="#five">Фото</b-nav-item>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-navbar>+7 495 374 90 60</b-navbar>
                    <b-navbar>email: info@preil.ru</b-navbar>
                    <b-nav-item href="#footer">Контакты</b-nav-item>
                    <!--<b-nav-form>-->
                        <!--<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>-->
                        <!--<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
                    <!--</b-nav-form>-->

                    <!--<b-nav-item-dropdown text="Lang" right>-->
                        <!--<b-dropdown-item href="#">EN</b-dropdown-item>-->
                        <!--<b-dropdown-item href="#">ES</b-dropdown-item>-->
                        <!--<b-dropdown-item href="#">RU</b-dropdown-item>-->
                        <!--<b-dropdown-item href="#">FA</b-dropdown-item>-->
                    <!--</b-nav-item-dropdown>-->

                    <!--<b-nav-item-dropdown right>-->
                        <!--&lt;!&ndash; Using button-content slot &ndash;&gt;-->
                        <!--<template slot="button-content">-->
                            <!--<em>User</em>-->
                        <!--</template>-->
                        <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
                        <!--<b-dropdown-item href="#">Signout</b-dropdown-item>-->
                    <!--</b-nav-item-dropdown>-->
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

        <!--<div id="navbar">-->
            <!--<nav class="navbar navbar-expand-lg ">-->
                <!--<div class="container-fluid">-->
                    <!--&lt;!&ndash;<a class="navbar-brand" href="#">Home</a>&ndash;&gt;-->
                    <!--<div class="navbar-nav navbar-fixed-top">-->
                        <!--<a class="nav-item nav-link active" href="#banner">Home <span-->
                                <!--class="sr-only">(current)</span></a>-->
                        <!--<a class="nav-item nav-link" href="#one">МГ Серия</a>-->
                        <!--<a class="nav-item nav-link" href="#two">Комплектация</a>-->
                        <!--<a class="nav-item nav-link" href="#three">Галерея</a>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</nav>-->
        <!--</div>-->
    </section>

</template>

<script>
    export default {
        methods: {

        }
    }


</script>

<style>
    .navbar {
        background-color: #535483 !important
    }
</style>