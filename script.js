(function(w, d, s, i) {
    var script = d.createElement(s);
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = function() {
        new SimplybookWidget({
            "widget_type":"iframe",
            "url":"https:\/\/lushbymk.simplybook.me",
            "theme":"bookingtroll",
            "theme_settings":{
                "timeline_hide_unavailable":"1",
                "hide_past_days":"1",
                "timeline_show_end_time":"0",
                "timeline_modern_display":"as_slots",
                "sb_base_color":"#ffc2cc",
                "display_item_mode":"list",
                "body_bg_color":"orange",
                "sb_review_image":"",
                "dark_font_color":"#474747",
                "light_font_color":"#ffffff",
                "btn_color_1":"#ffc2cc",
                "sb_company_label_color":"#ffffff",
                "hide_img_mode":"1","sb_busy":"#c7b3b3",
                "sb_available":"#ffc2cc"},"timeline":"modern_week",
                "datepicker":"top_calendar",
                "is_rtl":false,
                "app_config":{
                    "clear_session":0,
                    "allow_switch_to_ada":0,
                    "predefined":[]
                },
            "container_id":"sbw_d4p4wy"});
    };
    d.head.appendChild(script);
})(window, document, 'script', 'sbw_d4p4wy');