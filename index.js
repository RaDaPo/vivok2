javascript:!function(){"use strict";function a(){var a,b,c,d,e=function(){b=j(),c=k(),d=l(),f()},f=function(){var a=s('<span class="float_right" style="position: absolute; right: 5px;padding: 3px">Autor: <a href="%1">vivok</a></span>',TribalWars.buildURL("GET","info_player",{id:122897}));k().parents("table:first").attr("width",500),k().parent().after('<tr><td>Programeaza:</td><td style="position: relative"><table><tbody><tr><td>Mod:</td><td><input name="sa-mod" type="radio" value="arrival" checked="checked">Soseste%20la%20%3Cinput%20name=%22sa-mod%22%20type=%22radio%22%20value=%22launch%22%3ELanseaza%20la%20%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3EData:%3C/td%3E%3Ctd%3E%3Cinput%20name=%22sa-d%22%20type=%22date%22%20required=%22required%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3EOra:%3C/td%3E%3Ctd%3E%3Cinput%20name=%22sa-t-h%22%20type=%22number%22%20min=%220%22%20max=%2223%22%20value=%220%22%20style=%22width:%2040px%22%20required=%22required%22%3E:%3Cinput%20name=%22sa-t-m%22%20type=%22number%22%20min=%220%22%20max=%2259%22%20value=%220%22%20style=%22width:%2040px%22%20required=%22required%22%3E:%3Cinput%20name=%22sa-t-s%22%20type=%22number%22%20min=%220%22%20max=%2259%22%20value=%220%22%20style=%22width:%2040px%22%20required=%22required%22%3E:%3Cinput%20name=%22sa-t-ms%22%20type=%22number%22%20min=%220%22%20max=%22999%22%20value=%220%22%20style=%22width:%2040px%22%20required=%22required%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3ELansare:%3C/td%3E%3Ctd%20id=%22sa-launch%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3ESosire:%3C/td%3E%3Ctd%20id=%22sa-arrival%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3EIntoarcere:%3C/td%3E%3Ctd%20id=%22sa-return%22%3E%3C/td%3E%3C/tr%3E%3Ctr%3E%3Ctd%3E%3Cbutton%20type=%22button%22%20id=%22sa-save%22%20class=%22btn%20float_left%22%3ESalveaza%3C/button%3E%27+a+%22%3C/td%3E%3C/tr%3E%3C/tbody%3E%3C/table%3E%3C/td%3E%3C/tr%3E%22);var%20b=new%20Date;$(%27input[name=%22sa-d%22]%27).val(b.getFullYear()+%22-%22+Format.padLead(b.getMonth()+1,2)+%22-%22+Format.padLead(b.getDate(),2)),$(%27input[name=%22sa-t-h%22]%27).val(Format.padLead(b.getHours(),2)),$(%27input[name=%22sa-t-m%22]%27).val(Format.padLead(b.getMinutes(),2)),$(%27input[name=%22sa-t-s%22]%27).val(Format.padLead(b.getSeconds(),2)),$(%22#sa-save%22).click(function(a){h()})},g=function(){return%20Math.round(Timing.getCurrentServerTime())},h=function(){if($(%22#command-data-form%22)[0].reportValidity()){var%20c=n(),d=m(),e=o()?new%20Date(c.getTime()-d):c,f=o()?c:new%20Date(c.getTime()+d),h=new%20Date(1e3*Math.floor(f.getTime()/1e3)+d);i(),console.log(e.getTime()-g(), e.getTime(), g()),a=setTimeout(function(){b.click()},e.getTime()-g()),r(e),t(f),u(h)}},i=function(){a&&clearTimeout(a)},j=function(){return%20$(%22#troop_confirm_submit%22)},k=function(){return%20$(%22#date_arrival%22)},l=function(){return%20$(%22#command-data-form%22)},m=function(){return%201e3*c.find(%22.relative_time%22).data(%22duration%22)},n=function(){var%20a=new%20Date($('input[name=%22sa-d%22]').val());return%20a.setHours($('input[name=%22sa-t-h%22]').val()),a.setMinutes($('input[name=%22sa-t-m%22]').val()),a.setSeconds($('input[name=%22sa-t-s%22]').val()),a.setMilliseconds($('input[name=%22sa-t-ms%22]').val()),a},o=function(){return%22arrival%22===$('input[name=%22sa-mod%22]:checked').val()},q=function(a){return%20a%20instanceof%20Date?window.Format.date(a/1e3,!0)+%22:%22+window.Format.padLead(a.getUTCMilliseconds(),%203):0},r=function(a){$(%22#sa-launch%22).text(q(a))},t=function(a){$(%22#sa-arrival%22).text(q(a))},u=function(a){$(%22#sa-return%22).text(q(a))};e()}%20return%200===$(%22#command-data-form%22).length?void%20alert(%22Trebuie%20s%C4%82%E2%80%9E%C4%86%E2%80%99%20fii%20pe%20pagina%20de%20confirmare%20a%20comenzii!%22):void(window.ScheduleAttack=new%20a)}();
