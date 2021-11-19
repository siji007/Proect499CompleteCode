<template>
    <div class="mt-0">
        <div class="text-white" id="homeWrappper">
            <h1 class="text-bold text-center" id="headerText" style="font-family:Roboto;">Welcome to a web based platform, that study the negative effects of information technology on child education</h1>
            <router-link to="/questions" tag="button" style="textDecoration:none;">
            <div id="buttonDiv" class="">
                <button id="readMoreBtn" class="flex flex-row justify-center items-center mt-8 btn text-white bg-transparent border text-center border-success rounded-lg mr-auto ml-auto ">Click here to fill the questions</button>
            </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
@import url('../css/Home.css');
</style>