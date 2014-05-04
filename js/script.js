$(document).ready(function() {
    var stories = $('#storybook div');

    //applies changes to toc li
    var handle_toc = function(clicked_title) {
        $('.active').addClass("seen")
        $('#toc li').removeClass("active");
        var current_title = $(clicked_title).addClass("active");
    };

    var handle_story = function(clicked_title) {
        //removes story when a different title is selected
        $('#storybook .show').removeClass("show");
        //gets index associated with title
        var story_index = $(clicked_title).attr("data-index");
        //gets story associated with title
        var current_story = $(stories[story_index]);
        //shows story
        current_story.addClass("show");
    };

    //creates table of contents
    for(var i = 0; i < stories.length; i++) {
        var current_story = $(stories[i]);
        var current_title = current_story.children("h1");
        $('#toc').append('<li data-index="' + i + '"><span class="subtext">' + (i+1) + '</span>' + current_title.html() + '</li>');
    };

    $('#toc li').click(function(){
        handle_toc(this);
        handle_story(this);
    });
});