$(function(){
    var audio =new Audio();
    var currentSong =0;
//songs
    var songs =  [
    {
        artist: "unknown",
        name:"7 Years__Lukas Graham__500" ,
        url: "Musics/7 Years__Lukas Graham__500.m4a"},
    {
        artist:"Imagine Dragons",
        name: "Bad Liar",
        url: "Musics/Bad Liar__Imagine Dragons__320.mp3"},
    {
        artist: "unknown",
        name:"Bánh Mì Không__Đạt G;   DuUyen__500" ,
        url: "Musics/Bánh Mì Không__Đạt G;   DuUyen__500.m4a"},
    {
        artist:"Kina,  Adriana Proenza",
        name: "Can We Kiss Forever?",
        url: "Musics/Can We Kiss Forever __Kina; Adriana Proenza__320.mp3"},
    {
        artist: "unknown",
        name:"Có Chàng Trai Viết Lên Cây__Phan Mạnh Quỳnh__500" ,
        url: "Musics/Có Chàng Trai Viết Lên Cây__Phan Mạnh Quỳnh__500.m4a"},
    {
        artist: "unknown",
        name:"Dancing" ,
        url: "Musics/Dancing.m4a"},
    {
        artist:"Vương Thất Thất",
        name: "Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh (我愿意平凡的陪在你身旁) DjYaha",
        url: "Musics/Em Bằng Lòng Làm Một Người Bình Thường Ở Bên Cạnh Anh (我愿意平凡的陪在你身旁) DjYaha__Vương Thất Thất__320.mp3"},
    {
        artist:"Ngô Lan Hương",
        name: "Hãy Trao Cho Anh (remix) - Ngô Lan Hương{Vinahouse}",
        url: "Musics/Hãy Trao Cho Anh (remix) - Ngô Lan Hương{Vinahouse}__Ngô Lan Hương__320.mp3"},
    {
        artist: "unknown",
        name:"Hết Thương Cạn Nhớ__Đức Phúc__500" ,
        url: "Musics/Hết Thương Cạn Nhớ__Đức Phúc__500.m4a"},
    {
        artist:"Đạt G,   Du Uyên",
        name: "Khó Vẽ Nụ Cười",
        url: "Musics/Khó Vẽ Nụ Cười__Đạt G;    Du Uyên__320.mp3"},
    {
        artist: "unknown",
        name:"Lily__Alan Walker; K-391; Emelie Hollow__500" ,
        url: "Musics/Lily__Alan Walker; K-391; Emelie Hollow__500.m4a"},
    {
        artist: "unknown",
        name:"Lost Control__Alan Walker; Sorana__500" ,
        url: "Musics/Lost Control__Alan Walker; Sorana__500.m4a"},
    {
        artist: "unknown",
        name:"Lấy Chồng Sớm Làm Gì (Acoustic Version)__Huy R;  Tuấn Cry__500" ,
        url: "Musics/Lấy Chồng Sớm Làm Gì (Acoustic Version)__Huy R;  Tuấn Cry__500.m4a"},
    {
        artist: "unknown",
        name:"Lối Nhỏ__Đen; Phương Anh Đào__500" ,
        url: "Musics/Lối Nhỏ__Đen; Phương Anh Đào__500.m4a"},
    {
        artist:"Bán Dương",
        name: "Một Khúc Tương Tư (一曲相思)",
        url: "Musics/mktt.mp3"},
    {
        artist:"Dig DiDzay",
        name: "Nếu Anh Đi Cover",
        url: "Musics/NeuAnhDi.mp3"},
    {
        artist: "unknown",
        name:"Người Lạ Ơi__Oi-Karik-Orange-Superbrothers__500" ,
        url: "Musics/Người Lạ Ơi__Oi-Karik-Orange-Superbrothers__500.m4a"},
    {
        artist: "unknown",
        name:"Nơi Em Muốn Tới__Xesi;Hoaprox__500" ,
        url: "Musics/Nơi Em Muốn Tới__Xesi;Hoaprox__500.m4a"},
    {
        artist:"DIG DIDZAY",
        name: "Nếu Em Đi (Cover)",
        url: "Musics/Nếu Em Đi (Cover)__DIG DIDZAY__320.mp3"},
    {
        artist: "unknown",
        name:"On My Way__Alan Walker;Sabrina Carpenter;Farruko__500" ,
        url: "Musics/On My Way__Alan Walker;Sabrina Carpenter;Farruko__500.m4a"},
    {
        artist:"Ed Sheeran",
        name: "Shape Of You",
        url: "Musics/Shape Of You__Ed Sheeran__128.mp3"},
    {
        artist: "unknown",
        name:"Ta Còn Yêu Nhau__Đức Phúc__500" ,
        url: "Musics/Ta Còn Yêu Nhau__Đức Phúc__500.m4a"},
    {
        artist:"Olly Murs",
        name: "That Girl",
        url: "Musics/thatgirl.mp3"},
    {
        artist: "unknown",
        name:"Tát Nhật Lãng Rực Rỡ (火红的萨日朗)__Yếu Bất Yếu Mãi Thái__500" ,
        url: "Musics/Tát Nhật Lãng Rực Rỡ (火红的萨日朗)__Yếu Bất Yếu Mãi Thái__500.m4a"},
    {
        artist:"Ice Paper",
        name: "Tâm Lặng Như Nước (心如止水)",
        url: "Musics/Tâm Lặng Như Nước (心如止水)__Ice Paper__320.mp3"},
    {
        artist: "unknown",
        name:"Vì Yêu Cứ Đâm Đầu__Min;   Đen;   JustaTee__500" ,
        url: "Musics/Vì Yêu Cứ Đâm Đầu__Min;   Đen;   JustaTee__500.m4a"},
    {
        artist:"Avicii; Aloe Blacc",
        name: "Wake Me Up",
        url: "Musics/wakemeup.mp3"},
    {
        artist:"Avicii; Sandro Cavazza",
        name: "Without You",
        url: "Musics/withoutyou.mp3"}
    ]
    var rotaleImg = $("#circle-album");
    function showList(){
        var txt = "";
        for(var i=0;i<songs.length;i++){

            songName = songs[i].name;
            if (songName.length>15){
                songName = songs[i].name.substr(0,10)+"....";
            }
            txt+=
                "<li class='list-track'><i class='fas fa-play'></i><span class='li-album-name' size='20'>" + songName+ "</span><span class='leng-track'>"+"03:30"+"</span>";
        }
        document.getElementById("song-list").innerHTML = txt;
    }
// nut an play pause
    var seekBar = $(".seek-bar");
    var playPauseButton = $("#play-pause"), i=playPauseButton.find('i');
    function playPauseClick(){
        setTimeout(function(){
            if(audio.paused)
            {
                rotaleImg.addClass('active');
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                rotaleImg.removeClass('active');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300)
    }
// prev next song
    var prevButton = $('#prev'), nextButton = $('#next');
    function playFromClickseek(){
        audio.currentTime = seekLoc;
        seekBar.width(seekTime);
    }
// update hover
    var seekArea = $(".seek-leght");
    var insTime = $("#ins-time");
    var seekbarpos,seekTime,seekLoc,cM,cMinutes,cSeconds;
    function updateHoverTime(event){
        seekbarPos = seekArea.offset();
        seekTime = event.clientX-seekbarPos.left;
        seekLoc = audio.duration * (seekTime /seekArea.outerWidth());
        cM = seekLoc / 60;

		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;

        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;

		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
                if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
        insTime.css('left',seekTime*2);
    }
// update current time
var curMinutes,curSeconds,durMinutes,durSeconds,playProgress;
var tProgress = $("#current-time");
var tTime = $(".track-length");
var tName = $("#player-track");
    function updateCurTime(){
        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);

        playProgress = (audio.currentTime / audio.duration) * 100;

        if(curMinutes < 10)
            curMinutes = '0'+curMinutes;
        if(curSeconds < 10)
            curSeconds = '0'+curSeconds;

        if(durMinutes < 10)
            durMinutes = '0'+durMinutes;
        if(durSeconds < 10)
            durSeconds = '0'+durSeconds;

        seekBar.width(playProgress+'%');
        tProgress.text(curMinutes+':'+curSeconds);
        tTime.text(durMinutes+':'+durSeconds);
    }
    var x= $('li.list-track');

    function updateList(){
        x.eq(currentSong).addClass('active');
    }
// khoi tao audio
    function initAudio(){
        //??
        audio.src = songs[currentSong].url;
        tName.text(songs[currentSong].name.substr(0,15));
        //done
        playPauseButton.on('click',playPauseClick);
        seekArea.mousemove(function(e){ updateHoverTime(e);});
        seekArea.click(playFromClickseek);
        //
        nextButton.on('click',function(){
            currentSong+=1;
            tName.text(songs[currentSong].name.substr(0,15));
            audio.src = songs[currentSong].url;
            i.attr('class','fas fa-pause');
            audio.play();
            updateList();
            $(audio).on("timeupdate", updateCurTime);
        });
        prevButton.on('click',function(){
            currentSong-=1;
            audio.src = songs[currentSong].url;
            tName.text(songs[currentSong].name.substr(0,15));
            i.attr('class','fas fa-pause');
            audio.play();
            updateList();
            $(audio).on("timeupdate", updateCurTime);
        });;
        //done
        showList();
        // done 1/3

        // updateCurTime();
        $(audio).on("timeupdate", updateCurTime);
    }
    initAudio();

})
