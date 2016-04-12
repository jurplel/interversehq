        var webm1 = "https://zippy.gfycat.com/MemorableDearestHarlequinbug.webm";
        var mp41 = "https://giant.gfycat.com/MemorableDearestHarlequinbug.mp4";

        var webm2 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.webm"
        var mp42 = "https://giant.gfycat.com/ShamefulCompassionateBluebreastedkookaburra.mp4"
        
        var randomvid = Math.floor((Math.random() * 2) + 1);
        $('#vidBg').vide({
            webm: eval("webm" + randomvid),
            mp4: eval("mp4" + randomvid),
        }, {
        });