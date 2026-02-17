var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var site_data = JSON.parse(this.responseText);
                var num_arr = site_data.info.views.toString().split("");
                var num_str = "";
                let month;
                let day;
                //add commas to number count 
                for (i = 0; i < num_arr.length; i++) {
                    num_str += num_arr[i];
                    if ((num_arr.length - 1 - i) % 3 == 0 && (num_arr.length - 1 - i) != 0 ){   
                        num_str += ","; 
                    }
                    var date_obj = new Date(site_data.info.last_updated);
                    if (date_obj.getMonth() + 1 < 10) {
                        month = "0" + (date_obj.getMonth() + 1);
                    }
                    if (date_obj.getDate() < 10) {
                        day = "0" + date_obj.getDate();
                    }
                    document.getElementById("lastupdate").innerHTML = month + "/" + day + "/" + date_obj.getFullYear();
                }
                document.getElementById("hitcount").innerHTML = num_str;
            }
        };
        xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=chronodove", true);
        xhttp.send();