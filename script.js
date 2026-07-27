// Mở trang chính
document.getElementById("startBtn").onclick = function () {

    document.getElementById("welcome").style.display = "none";

    document.getElementById("main").style.display = "block";

}

// Hiện / Ẩn Lineup
function toggleLineup(){

    let lineup = document.getElementById("lineup");

    if(lineup.style.display=="block"){

        lineup.style.display="none";

    }else{

        lineup.style.display="block";

    }

}

// Popup tuyển thủ
function showPlayer(name){

    let info="";

    switch(name){

        case "PER":

        info=`
        <h2>ASU.PER</h2>

        <p><b>TÊN THẬT</b></p>

        <p>CÔNG LÝ</p>

        <p>05/02/2007</p>

        <br>

        <p><b>TEAM THI ĐẤU</b></p>

        <p>ALLSTAR UNITED ESPORTS</p>
        `;

        break;



        case "KEN":

        info=`
        <h2>ASU.KEN</h2>

        <p><b>TÊN THẬT</b></p>

        <p>GIA NGUYỄN</p>

        <br>

        <p><b>TEAM THI ĐẤU</b></p>

        <p>ALLSTAR UNITED ESPORTS</p>
        `;

        break;



        case "MANJIRO":

        info=`
        <h2>ASU.MANJIRO</h2>

        <p><b>TÊN THẬT</b></p>

        <p>THÀNH DANH</p>

        <br>

        <p><b>TEAM THI ĐẤU</b></p>

        <p>ALLSTAR UNITED ESPORTS</p>
        `;

        break;



        case "HZE":

        info=`
        <h2>ASU.HZE</h2>

        <p><b>TÊN THẬT</b></p>

        <p>ANH KHOA</p>

        <p>28/06/2011</p>

        <br>

        <p><b>TEAM THI ĐẤU</b></p>

        <p>ALLSTAR UNITED ESPORTS</p>
        `;

        break;



        case "NOTAR7":

        info=`
        <h2>ASU.NOTAR7</h2>

        <p><b>TÊN THẬT</b></p>

        <p>NGUYỄN THÀNH CÔNG</p>

        <p>23/05/2010</p>

        <br>

        <p><b>
