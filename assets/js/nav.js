var navbarHTML = `
<nav class="navbar navbar-expand-sm navbar-fixed-top navbar-dark">
<a href="/" class="navbar-brand"><img style="height: 30px;" src="assets/img/intv_compact.svg" class="d-inline-block align-top"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span></button>
<div class="container-fluid">
    <div class="navbar-collapse collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/qview">qView</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/mc">Modpack</a>
            </li>
        </ul>
    </div>
    <div class="navbar-collapse collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="http://steamcommunity.com/groups/interverse">Steam</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://discord.gg/0lXeGE6soHgmQPT5">Discord</a>
            </li>
        </ul>
    </div>
</div>
</nav>`

var navbarCSS = `<link rel="stylesheet" href="assets/css/nav.css"><link href="https://fonts.googleapis.com/css?family=Exo+2" rel="stylesheet">`

$('header').prepend(navbarHTML)
$('head').append(navbarCSS)