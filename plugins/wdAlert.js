// import Vue from 'vue'
// import swal from 'vue-sweetalert2'
import Vue from 'vue';
import swal from 'vue-sweetalert2';

Vue.use(swal);

const wdAlert = {
    name: 'wdAlert',
    // ping() {
    //     console.log('Ping')
    // },
    async alertSuccess(title, text , times) {
        let time = 2000;
        if (times) {
          time = times
        }
        Vue.swal({
          position: "center",
          icon: "success",
          title: title,
          text: text,
          showConfirmButton: false,
          timer: time,
        });
      },
      async alertSuccessConfirm(title, text , confirmTexts) {
        let confirmText = "OK";
        if (confirmTexts) {
          confirmText = confirmTexts
        }
        
        Vue.swal({
          position: "center",
          icon: "success",
          title: title,
          text: text,
          showConfirmButton: true,
          confirmButtonText: confirmText,
        });
        
      },
      async alertError(title, text , times) {
        let time = 2000;
        if (times) {
          time = times
        }
        Vue.swal({
          position: "center",
          icon: "warning",
          title: title,
          text: text,
          showConfirmButton: false,
          timer: time,
        });
      },
      async alertErrorConfirm(title, text , confirmTexts) {
        let confirmText = "OK";
        if (confirmTexts) {
          confirmText = confirmTexts
        }
        
        Vue.swal({
          position: "center",
          icon: "warning",
          title: title,
          text: text,
          showConfirmButton: true,
          confirmButtonText: confirmText,
        });
        
      }
  }
  
  export default ({ app }, inject) => {
    inject('wdAlert', wdAlert)
  }

  