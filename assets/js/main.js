var header = document.getElementById('header__navbar-id');
var mobileMenu = document.getElementById('menu');

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === 46;
    if(isClosed) {
        header.style.height = 'auto';
        document.getElementById('header__navbar-search-id').style.display = 'none';
        
    } else {
        header.style.height = '46px';
        document.getElementById('header__navbar-search-id').style.display = 'block';
        
    }
}
var a = new Date();
var b = a.getHours();
if(b >= 6 && b < 11) {
  document.getElementById('content').innerHTML = 'Chào Buổi Sáng ❤️';

    
} else if(b >= 11 && b < 13) {
    document.getElementById('content').innerHTML = 'Ăn Trưa Ngon Miệng ❤️';
} else if(b >= 13 & b < 18) {
    document.getElementById('content').innerHTML = 'Chào buổi chiều ❤️';
    
} else if(b >= 18 & b < 23) {
    document.getElementById('content').innerHTML = 'Chào buổi tối❤️';
  
} else if(b>=3 & b <6) {
		  document.getElementById('content').innerHTML = 'Sáng sớm tốt lành❤️';
		  } else{
        document.getElementById('content').innerHTML = 'Chúc ngủ ngon ❤️';
     
    }
    