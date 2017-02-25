function timeget() {
                    var date = new Date();
                    var Hour = date.getHours();
                    var Minute = date.getMinutes();
                    var Second = date.getSeconds();
                    var Day = date.getDate();
                    var Year = date.getFullYear();
                    var Month = date.getMonth();
                    var draw = function () {
                        document.getElementById("merples").innerHTML = Hour + " : " + Minute + " : " + Second + ", " + Month + "/" + Day + "/" + Year;
                    };
                    draw();
                }
                ;
                var repeat = setInterval(timeget, 1000);