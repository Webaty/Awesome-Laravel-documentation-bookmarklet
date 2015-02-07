# Awesome Laravel documentation bookmarklet
For the official Laravel (4, 5) documentation website.

Features
---
- AJAX Pagination.
- All external links open up in a new window.
- Browser (back and forward).
- Left sidebar fixed position with scrollbar.

Usage
---
1. Open your browser.
2. Create a new bookmark.
3. Set the bookmarklet name and paste the code **below** as the URL.
4. Open http://laravel.com/docs/ then click on the new bookmarklet.
```javascript
javascript:(function()%7Bvar%20WebatyLaravelDocumentation%3D%7BlastUrl%3Afalse%2Cfire%3Afunction()%7Bvar%20e%3Dthis%3Be.lastUrl%3De.getCleanUrl(window.location.href)%3B%24('%3Cstyle%20type%3D%22text%2Fcss%22%3E%40media%20(max-width%3A900px)%7B.webaty-sidebar%7Bdisplay%3Anone%7Dnav.main%20a.brand%7Bdisplay%3Ablock!important%7D%7Dnav.main%20a.brand%7Bdisplay%3Anone%7D.webaty-sidebar%20ul%20li%20a%7Bdisplay%3Ablock%7D.webaty-sidebar%20ul%20li%20a%3Ahover%7Bcolor%3A%23666%7D.webaty-current%7Bbackground-color%3A%23f4645f%7D.webaty-sidebar%20ul%20li.webaty-current%20a%2C.webaty-sidebar%20ul%20li.webaty-current%20a%3Avisited%2C.webaty-sidebar%20ul%20li.webaty-current%20a%3Ahover%2C.webaty-sidebar%20ul%20li.webaty-current%20a%3Aactive%7Bcolor%3A%23FFF%7D.webaty-loader%7Bposition%3Afixed%3Bleft%3A50%25%3Btop%3A50px%3Bz-index%3A9999999%3Bfont-size%3A90px%3Btext-indent%3A-9999em%3Boverflow%3Ahidden%3Bwidth%3A1em%3Bheight%3A1em%3Bborder-radius%3A50%25%3Bmargin%3A.8em%20auto%3B-webkit-animation%3Aload6%201.7s%20infinite%20ease%3Banimation%3Aload6%201.7s%20infinite%20ease%7D%40-webkit-keyframes%20load6%7B0%25%7B-webkit-transform%3Arotate(0deg)%3Btransform%3Arotate(0deg)%3Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D5%25%2C95%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D30%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.51em%20-.66em%200%20-.42em%20%23F4645F%2C-.75em%20-.36em%200%20-.44em%20%23F4645F%2C-.83em%20-.03em%200%20-.46em%20%23F4645F%2C-.81em%20.21em%200%20-.477em%20%23fff%7D55%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.29em%20-.78em%200%20-.42em%20%23F4645F%2C-.43em%20-.72em%200%20-.44em%20%23F4645F%2C-.52em%20-.65em%200%20-.46em%20%23F4645F%2C-.57em%20-.61em%200%20-.477em%20%23fff%7D100%25%7B-webkit-transform%3Arotate(360deg)%3Btransform%3Arotate(360deg)%3Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D%7D%40keyframes%20load6%7B0%25%7B-webkit-transform%3Arotate(0deg)%3Btransform%3Arotate(0deg)%3Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D5%25%2C95%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D30%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.51em%20-.66em%200%20-.42em%20%23F4645F%2C-.75em%20-.36em%200%20-.44em%20%23F4645F%2C-.83em%20-.03em%200%20-.46em%20%23F4645F%2C-.81em%20.21em%200%20-.477em%20%23fff%7D55%25%7Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.29em%20-.78em%200%20-.42em%20%23F4645F%2C-.43em%20-.72em%200%20-.44em%20%23F4645F%2C-.52em%20-.65em%200%20-.46em%20%23F4645F%2C-.57em%20-.61em%200%20-.477em%20%23fff%7D100%25%7B-webkit-transform%3Arotate(360deg)%3Btransform%3Arotate(360deg)%3Bbox-shadow%3A-.11em%20-.83em%200%20-.4em%20%23F4645F%2C-.11em%20-.83em%200%20-.42em%20%23F4645F%2C-.11em%20-.83em%200%20-.44em%20%23F4645F%2C-.11em%20-.83em%200%20-.46em%20%23F4645F%2C-.11em%20-.83em%200%20-.477em%20%23fff%7D%7D%3C%2Fstyle%3E').appendTo(%24(%22head%22))%3B%24(%22body%22).prepend(%24(%22.container%20.sidebar%22).clone().css(%7Bposition%3A%22fixed%22%2C%22background-color%22%3A%22%23FFFFFF%22%2C%22z-index%22%3A%229999999%22%2Cleft%3A%220%22%2Ctop%3A%220%22%2C%22overflow-y%22%3A%22scroll%22%2Cheight%3A%24(window).height()%2B%22px%22%7D).addClass(%22webaty-sidebar%22).prepend(%24(%22nav.main%20a.brand%22).clone()))%3B%24(%22.container%20.sidebar%22).remove()%3B%24(window).resize(function()%7Be.sideBar().css(%22height%22%2C%24(window).height()%2B%22px%22)%7D)%3Be.sideBar().find(%22ul%20li%20a%22).click(function()%7Be.loadPage(this)%3Breturn%20false%7D)%3Be.articleLinks()%3Be.sideBar().bind(%22mousewheel%20DOMMouseScroll%22%2Cfunction(e)%7Bvar%20t%3De.originalEvent%2Cn%3Dt.wheelDelta%7C%7C-t.detail%3Bthis.scrollTop%2B%3D(n%3C0%3F1%3A-1)*30%3Be.preventDefault()%7D)%3Bwindow.onpopstate%3Dfunction(t)%7Bif(t.state)%7Bif(e.getCleanUrl(e.getQualifyURL(t.state.url))!%3De.lastUrl)%7Be.setCurrentPage(t.state.url)%7D%7Delse%7Bif(e.getCleanUrl(window.location.href)!%3De.lastUrl)%7Be.setCurrentPage(window.location.href)%7D%7D%7D%7D%2CgetQualifyURL%3Afunction(e)%7Bvar%20t%3D%24(%22%3Ca%20%2F%3E%22).attr(%22href%22%2Ce)%3Be%3Dt.prop(%22href%22)%3Bt.remove()%3Breturn%20e%7D%2CsideBar%3Afunction()%7Breturn%20%24(%22.webaty-sidebar%22)%7D%2CsiderBarURLs%3Afunction()%7Bvar%20e%3Dthis%3Breturn%20%24.makeArray(e.sideBar().find(%22ul%20li%20a%22).map(function(e%2Ct)%7Breturn%20%24(t).attr(%22href%22)%7D))%7D%2CisDocUrl%3Afunction(e)%7Bvar%20t%3Dthis%3Bif(%24.inArray(e%2Ct.siderBarURLs())!%3D%3D-1)%7Breturn%20true%7Delse%20if(e.match(%22%5E%2Fdocs%2F%22))%7Breturn%20true%7Delse%7Breturn%20false%7D%7D%2CgetCleanUrl%3Afunction(e)%7Bif(e)%7Be%3De.split(%22%23%22)%3Breturn%20e%5B0%5D%7Delse%7Breturn%20false%7D%7D%2CarticleLinks%3Afunction()%7Bvar%20e%3Dthis%3B%24(%22.docs%20article%20a%22).each(function()%7Bif(%24(%22%3Ca%3E%22).prop(%22href%22%2C%24(this).prop(%22href%22)).prop(%22hostname%22)!%3D%22laravel.com%22)%7B%24(this).attr(%22target%22%2C%22_blank%22)%7D%7D)%3B%24(%22.docs%20article%20a%22).on(%22click%22%2Cfunction()%7Bvar%20t%3De.getCleanUrl(%24(this).attr(%22href%22))%3Bif(t%26%26e.getCleanUrl(window.location.href)!%3Dt)%7Bif(e.isDocUrl(t))%7Be.loadPage(this)%3Breturn%20false%7D%7D%7D)%7D%2CloadPage%3Afunction(e)%7Bvar%20t%3Dthis%3Bhistory.pushState(%7Burl%3A%24(e).attr(%22href%22)%7D%2C%22%22%2C%24(e).attr(%22href%22))%3Bt.setCurrentPage(%24(e).attr(%22href%22))%7D%2CstartLoader%3Afunction()%7B%24(%22body%22).prepend(%24(%22%3Cdiv%20%2F%3E%22).addClass(%22webaty-loader%22))%7D%2CstopLoader%3Afunction()%7B%24(%22.webaty-loader%22).hide(1200%2Cfunction()%7B%24(this).remove()%7D)%7D%2CsetCurrentPage%3Afunction(e)%7Bvar%20t%3Dthis%3Bif(t.getCleanUrl(e))%7Bt.startLoader()%3Bt.sideBar().find(%22ul%20li%22).removeClass(%22webaty-current%22)%3Bt.sideBar().find('ul%20li%20a%5Bhref%3D%22'%2Bt.getCleanUrl(e)%2B'%22%5D').parent(%22li%22).addClass(%22webaty-current%22)%3B%24.ajax(%7Burl%3Ae%2Ctype%3A%22GET%22%2CdataType%3A%22html%22%2Csuccess%3Afunction(e)%7Bt.stopLoader()%3B%24(%22.docs%20article%22).html(%24(e).find(%22article%22).html())%3Bt.articleLinks()%3Bif(window.location.hash)%7Bif(%24(window.location.hash).length%3E0)%7B%24(%22html%2C%20body%22).animate(%7BscrollTop%3A%24(window.location.hash).offset().top%7D%2C0)%7D%7Delse%7B%24(%22html%2Cbody%22).animate(%7BscrollTop%3A%24(%22.docs%20article%22).offset().top%7D%2C200)%7Dt.lastUrl%3Dt.getCleanUrl(window.location.href)%7D%2Cerror%3Afunction(e%2Cn%2Cr)%7Bt.stopLoader()%3Balert(%22The%20requested%20content%20cannot%20be%20loaded.%20Please%20try%20again%20later.%22)%7D%7D)%7D%7D%7D%3Bif(history.pushState)%7BWebatyLaravelDocumentation.fire()%7Delse%7Balert(%22Your%20Browser%20is%20out%20of%20Date!%22)%7D%7D)()
```


Tested on the following browsers:
---
- Google Chrome
- Firefox
- Internet explorer 10, 11
- Opera

Author
---
Ayman Gado