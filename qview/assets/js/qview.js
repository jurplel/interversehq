var navbarHTML = `
<div class="col-12">
    <nav class="navbar navbar-dark navbar-expand-md">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/qview/assets/img/qview.svg" style="height: 1em;">&nbsp;qView</a>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/qview/download">Downloads</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/qview/changelog">Changelog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/jeep70/qView">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/qview/about">About</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Return to Interverse</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
        </div>
    </nav>
</div>`

$('header').prepend(navbarHTML);