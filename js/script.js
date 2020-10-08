$(function(){
// vong tron 
    var circleAlbum = $(".circle-album");
//    ten bai hat
    var playerTrack =$("#player-track");
// dang phat den s nao cua bai hat
    var currentTime = $("#current-time");
// do dai bai hat
    var trackLen = $("#track-lengt");
// thanh bar the hien dang phat den s nao cua bai hat
    var seekBar = $(".seek-bar");
// play or pasue BTN
    var playPause = $("play-pause");
    var i = playPasue.find('i');
// img anh 
    var albumImg = $(".album-img");
// pre, next buttom
    var prevBtn = $("prev"), nextBtn = $("#next"), currIndex = -1;
// songs 
    var songs = [
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
// phat ngau nhien 
    var seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
    function suffle(a){
        var j,x,i;
        for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
    }
    function playPasue(){
        setTimeout(function(){
            if(audio.paused){
                // neu an play ??
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else{
                // neu an pause
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }
// show tgian khi hover seek bar
    
    
    
    
    
    
    
    
    
    
    
//    ________________________________
    
    
    
    
// update thoi gian chay
    function updateCurrTime(){
        nTime = nw  Date();
        nTime = nTime.getTime();
        if (!tFlag){
            tFlag = true;
            // ????????????????????????? chua co active
            trackLen.addClass("active");
        }
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

        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);

        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);

        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');
        
        
        seekBar.width(playProgress+'%');
        if (playProgress ==100){
            i.attr('class', 'fa fa-play');
            seekBar.width(0);
            currentTime.text('00:00');
            clearInterval(buffInterval);
            selectTrack(1);
        }
    }
    
    
    function checkBuffering(){
        clearInterval(buffInterval);
        buffInterval = setInterval(function(){
            if((nTime == 0 ) || (bTime -nTime)>1000)
                circleAlbum.addClass('buffering');
            else
                circleAlbum.removeClass('buffering');
            bTime = new Date();
            bTime = bTime.getTime();
            
        },100);
    }
    function selectTrack(flag){
        if(flag ==0 || flag == 1)
            ++currIndex;
        else 
            --currIndex;
        if ((currIndex>-1) && (currIndex< songs.length)){
            if(flag == 0)
                i.attr('class', 'fa fa-play');
            else{
                circleAlbum.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }
            
            seekBar.width(0);
            trackLen.removeClass('active');
            currentTime.text('00:00');
            trackLen.text('00:00');
            playerTrack = songs[currIndex].name;
            
            
            nTime =0;
            bTime =new Date();
            bTime =bTime.getTime();
            
            if(flag!= 0){
                audio.play();
                playerTrack.addClass('active');
                
                
                clearInterval(buffInterval);
                checkBuffering();
            }
            playerTrack.text(playerTrack)
        }
        else{
             if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }
    function initPlayer()
	{
        audio = new Audio();

		selectTrack(0);

		audio.loop = false;

		playPause.on('click',playPause);

		sArea.mousemove(function(event){ showHover(event); });

        sArea.mouseout(hideHover);

        sArea.on('click',playFromClickedPos);

        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}

	initPlayer();
    
    
    
    
})