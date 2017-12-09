var replacementSearch = `
<div class="col-sm-7 col-md-8 col-lg-9"></div>
<div class="col-sm-5 col-md-4 col-lg-3">
    <div id="modlist_filter" style="inline-block">
        <div class="md-form">
            <i class="fas fa-search prefix"></i>
            <input type="text" id="searchForm" class="form-control">
            <label for="searchForm" class="">Search</label>
        </div>
    </div>
</div>
`;

$("#table").load("table.html", function() {
	$('#modlist').DataTable( {
		"scrollY": "65vh",
		"scrollCollapse": true,
		"paging": false,
        "info": false,
        "columns": [
            null,
            null,
            null,
            null,
            { "width": "40px" },
            null
        ],
        "initComplete": function(settings, json) {
            alert('initcomplete is run');
            $('#modlist_wrapper > div:first-child').html(replacementSearch);
            $('#searchForm').on('keyup', function () {
                $('#modlist').DataTable().search($(this).val()).draw();
            });
        }
    });
});

var toggle = false;
$('#hiddenText').hide();
$('#doSmth').click(function() {
    if(toggle===false) {
        $('#hiddenText').show();
        toggle = true;
    }
    else {
        $('#hiddenText').hide();
        toggle = false;
    }
});