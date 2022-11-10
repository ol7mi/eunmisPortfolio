// 전역변수라 어디에서든 갖다 쓸 수 있음.
var today = new Date();
var nowYear = today.getFullYear(); //2022
var nowMonth = today.getMonth(); //3 (4월)
var nowDay = today.getDate(); //1
// document.write(nowDay)


function prevMonth(){//월 감소하는 함수
    nowMonth--;
    if(nowMonth < 0){
        nowYear--;
        nowMonth = 11;
    }
    calendarFunc();
}

function nextMonth(){//월 증가하는 함수
    nowMonth++;
    if(nowMonth > 11){
        nowYear++;
        nowMonth = 0;
    }
    calendarFunc();
}

function calendarFunc(){
    var firstDay = new Date(nowYear,nowMonth,1);
    var blankNum = firstDay.getDay(); //일~토 (0~6) 금요일 5 / 빈칸개수
    // console.log(blankNum)

    var totDay=[31,28,31,30,31,30,31,31,30,31,30,31]
    if((nowYear%4==0 && nowYear%100 !=0) ||nowYear%400==0){
        totDay[1]=29;
    }
    var total = totDay[nowMonth]; //이달의 전체일수 30일이다.
    // console.log(theTag)
    var rowNum = Math.ceil((blankNum+total)/7); //필요한 행 개수
    var theTag = "";
    theTag += "<h1>" + nowYear + "년</h1>"
    theTag += '<ul><li><a href="#" onclick="prevMonth()"> &lt;&lt; </a></li>';
    theTag += "<li>" + (nowMonth+1) + "월</li>";
    theTag += '<li><a href="#" onclick="nextMonth()"> &gt;&gt; </a></li></ul>';

    theTag += "<table>";

    theTag += "<thead><tr>"
    theTag +="<th style='color:red;'>일</th> <th>월</th> <th>화</th> <th>수</th> <th>목</th> <th>금</th> <th style='color:blue;'>토</th>"
    theTag +="</tr></thead>"

    theTag += "<tbody>";

        var num=1;
        for(var i=1; i<=rowNum; i++){ //5행
            theTag += "<tr>";
                for(var col=1; col<=7; col++){ //7열
                    // theTag += "<td></td>"
                    if( i==1 && col<=blankNum || num > total ){ //blankNum이랑 같을때까지 빈칸만 넣어줘라
                        theTag += "<td></td>"; //빈칸
                    }else{
                        // theTag += "<td>" + num +"</td>";

                        var theColor = "";
                        var bgColor = "";

                        if(col==1) theColor = 'color:red;';
                        if(col==7) theColor = 'color:blue;';
                        if(num==nowDay) bgColor = 'background-color:lightcyan';

                        theTag += "<td style="+bgColor+ theColor +">"+num+"</td>";
                        num++;
                    }
                }
            theTag += "</tr>";
        }

    theTag += "</tbody>"

    theTag += "</table>"

    document.getElementById("calendar").innerHTML = theTag;
}
window.addEventListener('load',calendarFunc,false);