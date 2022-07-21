<template>
    <div id="app">
        <Button></Button>
    </div>
</template>

<script>
    import Button from './components/Button'

    export default {
        name: 'App',
        components: {
            Button
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-active-bg: #eee;
        --button-bg: white;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
    }



    #app {
        margin: 20px;
    }
</style>
