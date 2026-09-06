<template>
    <div class="flex items-center justify-center h-screen bg-black">
        <div class="bg-white h-[65%] w-[50%] rounded-2xl flex">
            <div class="m-2 w-[600px] rounded-xl overflow-hidden">
                <div class="w-full h-full overflow-hidden rounded-xl">
                    <img class="object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-105 hover:blur-sm"
                        src="/public/assets/W-01/login3.jpg" alt="" />
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full gap-10">
                <h1 class="text-4xl font-bold text-center">Đăng nhập vào Uni Stream</h1>
                <div class="flex flex-col gap-3">
                    <button
                        @click="loginWithGoogle"
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="/public/assets/W-01/google.png" alt="google icon">
                        <p class="text-xl">Tiếp tục với Google</p>
                    </button>
                    <div class="flex items-center justify-center gap-4">
                        <hr class="w-48 text-gray-800">
                        <span class="text-gray-500">hoặc</span>
                        <hr class="w-48 text-gray-800">
                    </div>
                    <button
                        class="flex gap-4 border border-gray-300 w-[450px] p-5 rounded-2xl hover:border-gray-800 duration-200 transition-all">
                        <img class="w-8" src="/public/assets/W-01/facebook.png" alt="facebook icon">
                        <p class="text-xl">Tiếp tục với Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import Vue from 'vue'
    import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'
    import { googleTokenLogin } from "vue3-google-login";

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // props: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: 'Hello world!'
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log('Init created component and call to function get data from api server.');
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            msg() {
                console.log("When the value of the msg variable changes, this method will be executed.");
            }
        },
        computed: {
            appendMsg() {
                return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
            }
        },
        methods: {
            /***********************************************************************************************************
             ******************************* Default functions that handle local data **********************************
             **********************************************************************************************************/

            /**
             * Example default function not using param
             */
            defaultFunction() {
                this.msg = "Replace message here!";
            },

            /**
             * Example default function using param 
             *
             * @param int pageNum number of page
             * @return boolean
             */
            defaultFunctionUsingParam(pageNum) {
                console.log(pageNum);
                return false;
            },

            /***********************************************************************************************************
             ******* Async and await functions for manipulating server-side data through internal API protocols ********
             **********************************************************************************************************/

            /**
             * Call API sample
             */
            async callAPI() {
                try {
                    const callAPI = await axios.get('/apiendpoint', {
                        /************ Attach param for request here ***************/
                    });
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            },

            /** Method login via with Google. */
            async loginWithGoogle() {
                const googleUser = await googleTokenLogin();
                console.log("Google token:", googleUser.access_token);
                // Call to API login.
                this.callAPILogin(googleUser.access_token);
            },

            /**
             * Function call to api login and get access_token.
             * Save token from server in to local storage.
             * Encode token before save to localstorage.
             * Encode: append a random 6 string after token.
             * 
             * @param string access_token is token get from google callback.
             * @return mixed|boolean
             */
            async callAPILogin(access_token) {
                try {
                    const callAPI = await axios.post('http://localhost/unistream/public/api/login', {
                        /************ Attach param for request here ***************/
                        'access_token': access_token
                    }).then(function (responseToken) {
                        console.log(responseToken);
                    });
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            }
        },
    }
</script>

<style scoped>
/**
* Custom local style css
*/
</style>
