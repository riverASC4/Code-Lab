$(document).ready(
    function () {
    var body = $('.container-header');
    var backgrounds = [
      'url(https://fsrn.org/wp-content/uploads/2014/07/hustlencode1-720x340.jpg)','url(https://media.npr.org/assets/img/2016/06/03/1_blackmencode-reddingrucker_computer-edit_wide-9f1fbcd2af0a9ebdd4a081fe27ac1ea6bfb95256.jpg?s=1400)','url(http://www.colorlines.com/sites/default/files/images/articles/2012/07/blackgirlscodetags.jpg)','url(http://c1038.r38.cf3.rackcdn.com/group1/building2664/media/zqeo_pmarella.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
    });