// Takes a DASH_OPTIONS object
export function renderDash(DASH_OPTIONS) {

    var dash = $('.practice-dashboard');

    for (var i = 0; i < DASH_OPTIONS.sections.length; i++) {

        var ul = $('<ul>').addClass('practice-dashboard__ul');

        $('<h3>').addClass('practice-dashboard__ul__title')
                .html(DASH_OPTIONS.sections[i].title)
                .appendTo(ul);
        $('<p>').addClass('practice-dashboard__ul__desc')
                .html(DASH_OPTIONS.sections[i].desc)
                .appendTo(ul);

        // Iterate over each subsection
        var subsections = DASH_OPTIONS.sections[i].subsections;

        for (var o = 0; o < subsections.length; o++) {

            $('<h4>').html(subsections[o].title)
                    .appendTo(ul);
            $('<p>').html(subsections[o].desc)
                    .appendTo(ul);
            $('<a>').addClass('dashboard__open-section')
                    .html('<i class="fa fa-caret-down" aria-hidden="true"></i>')
                    .appendTo(ul);

            var subUl = $('<ul>').addClass('subsection__ul').hide();

            // Iterate over each option in each subsection
            for (var p = 0; p < subsections[o].options.length; p++) {
                var li = $('<li>');
                
                $('<h5>').html(subsections[o].options[p].title)
                        .appendTo(li);

                var options = [
                    {
                        val: "any",
                        text: "Any Position"
                    },
                    {
                        val: "start",
                        text: "At Start"
                    },
                    {
                        val: "end",
                        text: "At End"
                    },
                    {
                        val: "beforeVowel",
                        text: "Before Vowel"
                    },
                    {
                        val: "beforeNonVowel",
                        text: "Before Non-Vowel"
                    }
                ];

                var sel = $('<select>').addClass('dashboard__select')
                        .appendTo(li);

                if (subsections[o].options[p].positionArr === undefined) {
                    $(options).each(function(q) {
                    
                        var o = $('<option>').attr('val', options[q].val)
                                    .html(options[q].text);
                        
                        o.appendTo(sel);
                    })
                } else {
                    
                    $(subsections[o].options[i].positionArr).each(function(q) {
                        var obj = $('<option>')
                        .attr('val', subsections[o].options[p].positionArr[q])
                        .html('N/A');
            
                        obj.appendTo(sel);
                    })
                }

                $('<a>').addClass('dashboard__search-button')
                        .attr('symArr',JSON.stringify(subsections[o].options[p].symArr))
                        .html('<i class="fa fa-search" aria-hidden="true"></i>')
                        .appendTo(li);

                $('<a>').addClass('dashboard__save-to-dash')
                        .attr('obj',JSON.stringify(subsections[o].options[p]))
                        .html('<i class="fa fa-save" aria-hidden="true"></i>')
                        .appendTo(li);
                
                li.appendTo(subUl);
            }

            subUl.appendTo(ul);

        }

        ul.appendTo(dash);

    }

}

export function renderSaves(saved_to_dash) {

    console.log("firing");

    var dash = $('.practice-dashboard');

    var ul = $('<ul>').addClass('practice-dashboard__ul');

    for (var i = 0; i < saved_to_dash.sections.length; i++) {

        $('<h3>').addClass('practice-dashboard__ul__title')
                .html(saved_to_dash.sections[i].title)
                .appendTo(ul);
        $('<a>').addClass('saved-to-dash__search-button')
                .html('<i class="fa fa-search" aria-hidden="true"></i>')
                .attr('symArr', JSON.stringify(saved_to_dash.sections[i].symArr))
                .attr('pos', saved_to_dash.sections[i].position)
                .appendTo(ul);
        
        $('<a>').addClass('saved-to-dash__remove-button')
                .html('<i class="fa fa-remove" aria-hidden="true"></i>')
                .attr('index', i)
                .appendTo(ul);
    }

    ul.appendTo(dash);

}