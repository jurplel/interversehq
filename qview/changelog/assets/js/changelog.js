$.getJSON("https://api.github.com/repos/jurplel/qView/releases", function(data) {
        converter = new showdown.Converter();
        for (i = 0; i < 3; i++) {
            var html = converter.makeHtml(data[i].body)
            var lines = html.split('\n');
            lines.splice(0,1);
            var newhtml = lines.join('\n');
            $('#log' + i).html(newhtml);
            $('#ver' + i).html(data[i].tag_name)
            $('#date' + i).html((data[i].published_at).substring(0,10))
        }
});
var text = document.getElementById('sourceTA').value,
target = document.getElementById('targetDiv'),
html = converter.makeHtml(text);

target.innerHTML = html;