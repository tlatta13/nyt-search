
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val().trim();
    var $recordsNum = $("#retrieveRecords").val();
    var startYr = $("#startYear").val().trim();
    var endYr = $("#endYear").val().trim();
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&facet_fields=source&facet=true&begin_date=" + startYr + "&end_date=" + endYr + "&api-key=WPLroE3v7pTb2wkTCwIgwLAR9GsvC8qA"

    $("#articleReturn").empty();

    $.ajax({
        url: queryURL,
        method: "GET"
    }) .then(function (response) {
        console.log(response)
    
        for (var i = 0; i < $recordsNum; i++) {
            $("#articleReturn").append($("<h4>").text(response.response.docs[i].headline.print_headline));
            $("#articleReturn").append($("<h6>").text(response.response.docs[i].byline.original));
            $("#articleReturn").append($("<h6>").text(response.response.docs[i].pub_date));
            $("#articleReturn").append($("<p>").text(response.response.docs[i].abstract));
        }
    });
});