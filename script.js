$(document).ready(function() {
    for(var i = 0; i < stories.length; i++) {
        var current_story = stories[i];
        $('#toc').append('<li><span class="subtext">' + (i+1) + '</span>' + current_story.title + '</li>');
    }
})