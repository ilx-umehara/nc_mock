document.addEventListener('DOMContentLoaded', function(){

    const tabs = document.getElementsByClassName('tab');

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch(){
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        
        this.classList.add('is-active');

        document.getElementsByClassName('is-show')[0].classList.remove('is-show');

        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);

        document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
}, false);

document.addEventListener('DOMContentLoaded', function(){

    const tabs = document.getElementsByClassName('tab_area_2');

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch(){
        document.getElementsByClassName('is-active_area_2')[0].classList.remove('is-active_area_2');
        
        this.classList.add('is-active_area_2');

        document.getElementsByClassName('is-show_area_2')[0].classList.remove('is-show_area_2');

        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);

        document.getElementsByClassName('panel_area_2')[index].classList.add('is-show_area_2');
    };
}, false);

document.addEventListener('DOMContentLoaded', function(){

    const tabs = document.getElementsByClassName('tab_edit');

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch(){
        document.getElementsByClassName('is-active_edit')[0].classList.remove('is-active_edit');
        
        this.classList.add('is-active_edit');

        document.getElementsByClassName('is-show_edit')[0].classList.remove('is-show_edit');

        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);

        document.getElementsByClassName('panel_edit')[index].classList.add('is-show_edit');
    };
}, false);

document.addEventListener('DOMContentLoaded', function(){

    const tabs = document.getElementsByClassName('tab_edit_area_2');

    for(let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }

    function tabSwitch(){
        document.getElementsByClassName('is-active_edit_area_2')[0].classList.remove('is-active_edit_area_2');
        
        this.classList.add('is-active_edit_area_2');

        document.getElementsByClassName('is-show_edit_area_2')[0].classList.remove('is-show_edit_area_2');

        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);

        document.getElementsByClassName('panel_edit_area_2')[index].classList.add('is-show_edit_area_2');
    };
}, false);