Vue.config.devtools = true;
const app = new Vue({
    el: '#root',
    data: {
        mails: [],
    },

    mounted(){
        let tmp = [];
        for(let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                tmp.push(result.data.response);

                if(tmp.length == 10){
                    this.mails = tmp;
                }  
            })   
        } 
    }
})