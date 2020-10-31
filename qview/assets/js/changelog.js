var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/jurplel/qView/releases', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {

        const classMap = {
            h4: 'is-size-5',
        }
          
        const bindings = Object.keys(classMap)
        .map(key => ({
            type: 'output',
            regex: new RegExp(`<${key}(.*)>`, 'g'),
            replace: `<${key} class="${classMap[key]}" $1>`
        }));

        const converter = new showdown.Converter({
            extensions: [...bindings]
        });
        let data = JSON.parse(request.responseText);

        let logs = document.getElementsByClassName('log');
        for (i = 0; i < logs.length; i++) {
            let html = converter.makeHtml(data[i].body)
            let lines = html.split('\n');
            lines.splice(0,1);
            let newhtml = lines.join('\n');
            logs[i].innerHTML = newhtml;
            logs[i].innerHTML
        }

        let vers = document.getElementsByClassName('ver')
        for (i = 0; i < vers.length; i++)
        {
            vers[i].innerHTML = data[i].tag_name;
        }

        let dates = document.getElementsByClassName('date')
        for (i = 0; i < dates.length; i++)
        {
            dates[i].innerHTML = (data[i].published_at).substring(0,10);
        }
    }
};

request.send();