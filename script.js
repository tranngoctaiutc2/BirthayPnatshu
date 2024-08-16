$('.start').click(function(){
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png','Biết làm bánh không?','Ngày hôm nay, bầu trời trong xanh như một bức tranh vẽ. Em và anh cùng nhau dạo quanh thế giới, chậm rãi và tận hưởng từng khoảnh khắc. Nhớ lại ngày hôm ấy, em là cô gái tuổi đôi mươi với đôi mắt sáng ngời. Anh đã yêu em ngay từ cái nhìn đầu tiên, một tình yêu trong sáng và mãnh liệt. Giờ đây, em đã trở thành cô dâu xinh đẹp, còn anh vẫn là chàng trai đến từ vùng quê nghèo khó. Nhưng tình yêu dành cho em luôn là động lực lớn nhất để anh cố gắng. Anh đã phải vượt qua bao khó khăn để có thể đến bên em. Thiên lý ơi, em có thể ở lại đây không? Để chúng ta cùng nhau xây dựng một tổ ấm nhỏ, nơi tình yêu của chúng ta luôn nở rộ như một đóa hoa hồng giữa sa mạc');
})

progress = 1;

$('.modal_content button').click(function(){
    progress++;
    close_modal(progress)
})

function close_modal(callback){
    modal.css('transform','translateY(-50%) scale(0)')
    setTimeout(function(){
        $('.stage' + callback).fadeIn();
    },600)
}


function fire_modal(imgurl,title,content){

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title);
    modal.find('img').attr('src',imgurl);
    modal.find('p').html(content);
    setTimeout(function(){
        modal.css('transform','translateY(-50%) scale(1)')
    },1000)


}


mixing = false;
mixtimes = 0;

$('.mixer').click(function(){
    if(mixing == false){
        mixing = true
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function(){
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        },1000)
    }
    if(mixtimes == 6){
        $('.stage2').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png','Chưa xong làm tiếp mau lên!!','Hồng trần trên đôi cánh tay, họa đời em trong phút giây. Từ ngày thơ ấy còn ngủ mơ đến khi em thờ ơ (hờ, hờ). Lòng người anh đâu có hay, một ngày khi vỗ cánh bay. Từ người yêu hóa thành người dưng đến khi ta tự xưng à (hà, hà). Thương em bờ vai nhỏ nhoi, 1  đôi mắt hóa mây đêm. Thương sao mùi dạ lý hương vương vấn mãi bên thềm. Đời phiêu du cố tìm một người thật lòng. Dẫu trời mênh mông, anh nhớ em (anh nhớ em). Chim kia về vẫn có đôi, sao chẳng số phu thê? Em ơi đừng xa cách tôi, trăng cố níu em về. Bình yên trên mái nhà, nhìn đời ngược dòng. Em còn bên anh có phải không? 2  (Có phải không?) Trời ban ánh sáng, năm tháng tư bề, dáng ai về chung lối. Người mang tia nắng nhưng cớ sao còn tăm tối? Một mai em lỡ vấp ngã trên đời thay đổi. Nhìn về anh, người chẳng khiến em lẻ loi.');

    }

})

$('.tin').draggable({
    revert:true
})
$( ".oven" ).droppable({
    drop: function( event, ui ) {
        $('.stage3').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png','Cháy loz rồi!!','Ai gieo tình này, ai mang tình này để lệ trên khóe mi cay. Ai đưa về nhà, ai cho ngọc ngà giờ người xa cách ta. Từng là một thời thiếu nữ trong vùng quê nghèo, hồn nhiên cài hoa mái đầu. Dòng người vội vàng em hóa thân đời bẽ bàng, rời xa tình anh năm tháng. Ôi phút giây tương phùng anh nhớ và mong. Dòng lưu bút năm xưa in dấu mãi đậm sâu. Trong nỗi đau anh mệt nhoài, trong phút giây anh tìm hoài. Muốn giữ em ở lại một lần này vì anh mãi thương. Xa cách nhau thật rồi, sương trắng chiều thu. Ngày em bước ra đi, nước mắt ấy biệt ly. Hoa vẫn rơi bên thềm nhà, lá xát xơ đi nhiều và. Anh chúc em yên bình, mối tình mình, hẹn em kiếp sau.');
    }
})

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function(){
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if(bases < 6){
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function(){
    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if(fillings < 7){
        add_filling(f)
    }
})

function add_sponge(t){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function(){
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
     $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})
function add_filling(f){

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin(){
    $('h1,h2,.options,.startagain,.add').fadeOut();
    
    setTimeout(function(){
        $('.cakemake').fadeIn()
        $('.cakemake').animate({'margin-top':'0px'})
    },1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle(){
    var stages = $('.cakemake > div').length;
    var h = (stages/2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="./7.jpg" /></div>')
    $('svg').show()
    setTimeout(function(){
        $('.sa').fadeIn()
    },2200)
    
}

$('.add').click(function(){
    fin();
})

$('.sa').click(function(){
    window.location.reload();
})


var radius = 240; 
var autoRotate = true;
var rotateSpeed = -60; 
var imgWidth = 120; 
var imgHeight = 170; 

setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid];


ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";


var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {

  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;


  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}


document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};