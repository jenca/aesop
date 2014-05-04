$(document).ready(function() {
    var stories = $('#storybook div');

    for(var i = 0; i < stories.length; i++) {
        var current_story = $(stories[i]);
        var current_title = current_story.children("h1");
        $('#toc').append('<li data-index="' + i + '"><span class="subtext">' + (i+1) + '</span>' + current_title.html() + '</li>');
    };

    $('#toc li').click(function() {
        $('#storybook .show').removeClass("show");
        var story_index = $(this).attr("data-index");
        var current_story = $(stories[story_index]);
        current_story.addClass("show");
    });


});