<template>
    <div id="live-chat-room" class="w-[20%] bg-[#272727] mt-16">
            <p class="p-5 text-xl font-medium text-center text-white">
                <i class="fa-brands fa-rocketchat"></i> Trò chuyện
            </p>
            <div id="list-comment"
                class="flex flex-col h-[80%] overflow-y-scroll scrollbar-thumb-[#3e3e3e] scrollbar-track-transparent scrollbar">
                <ul class="flex flex-col gap-3">
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay
                            thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay
                            thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay
                            thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay
                            thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">hay quá ae tin tôi</p>
                    </li>
                    <li class="flex flex-col mx-4">
                        <div class="flex flex-row content-center gap-2">
                            <img src="/public/assets/W-02/avatar.jpg" class="rounded-full size-6" alt="">
                            <p class="text-base font-medium text-gray-200">Nguyengoc</p>
                        </div>
                        <p class="ml-8 text-base text-white">Combo 2 chiếc quần short kaki giá chỉ 115k,nhanh tay
                            thì
                            còn chậm tay là hết cả nhà ơi</p>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col h-[10%] px-5 py-2 gap-2 border-t-2 border-t-gray-500 border-opacity-50">
                <p class="text-white">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i> FeyD153 đã tham gia
                </p>
                <div class="flex flex-row items-center gap-3">
                    <input id="comment-box" type="text"
                        class="px-3 py-3 w-full pl-4 bg-[#444444] rounded-xl transition-all  outline outline-2 outline-transparent focus:outline-white scrollbar-none text-white placeholder:text-gray-400 resize-none"
                        placeholder="Hãy nói gì đó">
                    <div class="flex content-center text-xl text-white cursor-pointer size-5 hover:opacity-75">
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    //import Vue from 'vue'
    import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'

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
        },
    }
</script>

<style scoped>
/**
* Custom local style css
*/
</style>
