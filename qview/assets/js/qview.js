var navbarHTML = `
<div class="col-12">
    <nav class="navbar navbar-dark navbar-expand-md">
        <div class="container-fluid">
            <a class="navbar-brand" href="/qview"><img src="/qview/assets/img/qview.svg" style="height: 1em;">&nbsp;qView</a>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/qview/download">Download</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/qview/changelog">Changelog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/jurplel/qView">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/jurplel/qView/wiki/Keyboard-Shortcuts">Keyboard Shortcuts</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Interverse</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
        </div>
    </nav>
</div>`

var footerHTML =`
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <p class="credits">
                Copyright © 2018 jurplel and qView contributors&nbsp;-&nbsp;
                Background: Free B-Roll by <a href="http://www.videezy.com">Videezy!</a>
            </p>
        </div>
    </div>
</div>`

$('header').prepend(navbarHTML);
$('footer').prepend(footerHTML);