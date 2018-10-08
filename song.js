$(function () {

    $.get('./lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/

        array = array.map(function(string, index){
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1], words: matches[2]}
            }
        })
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time', object.time).text(object.words)
            $p.appendTo($lyric.children('.lines'))
        })
    })

    let audio = document.createElement('audio')
    audio.src = 'http://isure.stream.qqmusic.qq.com/C4000031Owpo1DSLye.m4a?guid=5923384933&vkey=51C4424C7BE3A8C5EC20DA119D3B43B1DECEC52AFD4CFB86C890A7F5393217E3B7EA84F371332A885ED900E4DC36FC2A8A28E32C3180FBA5&uin=0&fromtag=66'
    audio.oncanplay = function(){
        audio.play()
        $('.disc-container').addClass('playing')
    }
    $('.icon-pause').on('click', function () {
        audio.pause()
        $('.disc-container').removeClass('playing')
    })
    $('.icon-play').on('click', function () {
        audio.play()
        $('.disc-container').addClass('playing')
    })
    
});