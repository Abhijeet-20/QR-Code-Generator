        let imgbox = document.getElementById("imgbox");
        let qrimg1 = document.getElementById("qrimg1");
        let url = document.getElementById("url");

        function generate(){
            if(url.value.length > 0){
            qrimg1.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + url.value;
            imgbox.style.display="block";
            }
            else{
                url.classList.add('error');
                setTimeout(()=>{
                    url.classList.remove('error');
                },600);
            }
        }