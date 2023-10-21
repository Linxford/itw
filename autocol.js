/* /js/Codebox.min.js */
(function() {
    var d = qSell("div.pre.pu");
    for (let t = 0; t < d.length; t++) {
        let a = d[t];
        a.classList.add("adv");
        var i = a.dataset.text || "File_" + (new Date).getTime();
        let l = a.dataset.file || i;
        var r = a.dataset.lang || ".txt"
          , c = void 0 !== a.dataset.time ? isNaN(Number(a.dataset.time)) ? "false" === a.dataset.time ? 0 : 10 : Number(a.dataset.time) : 10
          , p = void 0 === a.dataset.download || "true" == a.dataset.download
          , m = void 0 === a.dataset.copy || "true" == a.dataset.copy
          , v = void 0 === a.dataset.view || "true" == a.dataset.view
          , w = a.querySelector("pre")
          , L = w.innerText;
        a.insertAdjacentHTML("afterbegin", "<div class='preM'><div class='preT'><span class='prTl'>" + (null == i ? "&lt;/&gt;" : i) + "</span><span class='prCd'></span></div><div class='preA'>" + (v ? "\x3c!--[ Preview ]--\x3e<button class='prVw'><svg viewBox='0 0 24 24'><path d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z'/></svg></button>" : "") + (p ? "\x3c!--[ Download ]--\x3e<button class='prDl'><svg viewBox='0 0 24 24'><path class='a' d='M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z'/><path class='b' d='M13,2.03C17.73,2.5 21.5,6.25 21.95,11C22.5,16.5 18.5,21.38 13,21.93V19.93C16.64,19.5 19.5,16.61 19.96,12.97C20.5,8.58 17.39,4.59 13,4.05V2.05L13,2.03M11,2.06V4.06C9.57,4.26 8.22,4.84 7.1,5.74L5.67,4.26C7.19,3 9.05,2.25 11,2.06M4.26,5.67L5.69,7.1C4.8,8.23 4.24,9.58 4.05,11H2.05C2.25,9.04 3,7.19 4.26,5.67M2.06,13H4.06C4.24,14.42 4.81,15.77 5.69,16.9L4.27,18.33C3.03,16.81 2.26,14.96 2.06,13M7.1,18.37C8.23,19.25 9.58,19.82 11,20V22C9.04,21.79 7.18,21 5.67,19.74L7.1,18.37M12,16.5L7.5,12H11V8H13V12H16.5L12,16.5Z'/><path class='c' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M7,15H17V17H7V15M10.3,11.2L8.4,9.3L7,10.7L10.3,14L17,7.3L15.6,5.9L10.3,11.2Z'/></svg></button>" : "") + (m ? "\x3c!--[ Copy ]--\x3e<button class='prCp'><svg viewBox='0 0 24 24'><path class='a' d='M20,16V4H8V16H20M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z'/><path class='b' d='M20,16V10H22V16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H16V4H8V16H20M10.91,7.08L14,10.17L20.59,3.58L22,5L14,13L9.5,8.5L10.91,7.08M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z'/></svg></button>" : "") + "</div></div>");
        let e = a.querySelector(".prVw")
          , s = a.querySelector(".prDl")
          , n = a.querySelector(".prCp")
          , o = a.querySelector(".prCd");
        null !== e && e.addEventListener("click", ()=>{
            var e = !!qSel("body").classList.contains("drK") ? "#252526" : "#ffffff"
              , e = "<!DOCTYPE html><html><head><title>" + l.replace(/\./g, "").replace(/ /g, "_") + r + "</title><meta content='width=device-width,initial-scale=1,user-scalable=1,minimum-scale=1,maximum-scale=5' name='viewport'/><meta content='" + e + "' name='theme-color'/><meta content='" + e + "' name='msapplication-navbutton-color'/><meta content='" + e + "' name='apple-mobile-web-app-status-bar-style'/><link rel='shortcut icon' type='image/png' href='" + window.location.protocol + window.location.hostname + "/favicon.ico'><style>body{min-height:100vh;background:#fff;color:#000}body.drK{background:#252526;color:#fff}*{margin:0;padding:0}html{line-height:1em;background:#1d1f21;color:#c5c8c6} pre{white-space:pre-wrap;word-wrap:break-word;word-break:break-all;padding:12px} pre i{font-style:normal}</style></head><body class='" + (qSel("body").classList.contains("drK") ? "drK" : "lgT") + "'><div class='pre'>" + w.outerHTML + "</div></body></html>"
              , e = new Blob([e],{
                type: "text/html"
            });
            window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(blobObject, fileName) : (e = window.URL.createObjectURL(e),
            window.open(e, "_blank"),
            window.URL.revokeObjectURL(e))
        }
        ),
        null !== s && s.addEventListener("click", ()=>{
            s.disabled = !0;
            let e = c;
            a.classList.add("pnd", "str"),
            o.innerHTML = 0 !== c ? "Please wait " + e + "s..." : "Please wait...";
            let t = setInterval(()=>{
                0 !== c && --e,
                0 !== c && (o.innerHTML = "Please wait " + e + "s..."),
                e <= 0 && (clearInterval(t),
                setTimeout(()=>{
                    o.innerHTML = "Downloading...",
                    setTimeout(()=>{
                        a.classList.remove("pnd"),
                        a.classList.add("dwn"),
                        function(e, t, a) {
                            if (a = "string" == typeof a ? a : "text/plain",
                            t = "string" == typeof t ? t : "File_" + (new Date).getTime() + ".txt",
                            e) {
                                a = new Blob([e],{
                                    type: a
                                });
                                if (navigator.msSaveBlob)
                                    return navigator.msSaveBlob(a, t);
                                {
                                    a = window.URL.createObjectURL(a);
                                    let e = document.createElement("a");
                                    e.classList.add("hidden"),
                                    e.href = a,
                                    e.download = t,
                                    document.body.appendChild(e),
                                    e.click(),
                                    e.remove(),
                                    window.URL.revokeObjectURL(a)
                                }
                            }
                        }(L, l.replace(/\./g, "").replace(/ /g, "_") + r, "text/plain"),
                        o.innerHTML = "Download started...",
                        setTimeout(()=>{
                            a.classList.remove("dwn", "str"),
                            s.disabled = !1
                        }
                        , 3e3)
                    }
                    , 2e3)
                }
                , 1e3))
            }
            , 1e3)
        }
        ),
        null !== n && n.addEventListener("click", ()=>{
            var e = getSelection()
              , t = document.createRange();
            t.selectNodeContents(w),
            e.removeAllRanges(),
            e.addRange(t),
            document.execCommand("copy"),
            e.removeAllRanges(),
            n.disabled = !0,
            a.classList.add("cpd"),
            setTimeout(function() {
                a.classList.remove("cpd"),
                n.disabled = !1
            }, 3e3)
        }
        )
    }
}
)();


function _0x4d6d(_0x2c7710,_0x5eb846){var _0x3fbfb0=_0x3fbf();return _0x4d6d=function(_0x4d6df2,_0x19cc43){_0x4d6df2=_0x4d6df2-0xa6;var _0x117ffe=_0x3fbfb0[_0x4d6df2];return _0x117ffe;},_0x4d6d(_0x2c7710,_0x5eb846);}var _0x3bf62e=_0x4d6d;function _0x3fbf(){var _0x5d1e54=['55379','getEl','webTh','4328343VzcQIk','42534','14885','push','ement','14655','DOMCo','RyYUD','30JQSEUH','25748XZcjSK','shift','theme','entLi','17034xYVmtc','5kaSD','7FDzUKK','5HUDP','267XbvrFz','chang','eme','true','addEv','0GOFK','120Uu','KRp','heme','7147212fAXUKZ','-togg','false','gLS','sLS','stene','1WJhgOP','Loade','441704JaIejD','CRbL','473Lj','2525JDwlob','09Vrc','105259iZqhzC','onloa','TICu','GIl','1wIlJ','UOO','swsu','256fY','14287','check','repla','90YlJ','ById','Toggl','274312TTHqkt'];_0x3fbf=function(){return _0x5d1e54;};return _0x3fbf();}(function(_0x483d5e,_0x111b4c){var _0x55a697=_0x4d6d,_0x5c165d=_0x483d5e();while(!![]){try{var _0x1eb417=parseInt(_0x55a697(0xcc))/0x1*(-parseInt(_0x55a697(0xa8))/0x2)+-parseInt(_0x55a697(0xbd))/0x3*(-parseInt(_0x55a697(0xb5))/0x4)+-parseInt(_0x55a697(0xd1))/0x5*(-parseInt(_0x55a697(0xb9))/0x6)+-parseInt(_0x55a697(0xbb))/0x7*(parseInt(_0x55a697(0xce))/0x8)+-parseInt(_0x55a697(0xac))/0x9+-parseInt(_0x55a697(0xb4))/0xa*(-parseInt(_0x55a697(0xd3))/0xb)+-parseInt(_0x55a697(0xc6))/0xc;if(_0x1eb417===_0x111b4c)break;else _0x5c165d['push'](_0x5c165d['shift']());}catch(_0x41478b){_0x5c165d['push'](_0x5c165d['shift']());}}}(_0x3fbf,0xbb1be));function _0x583b(_0x46afce,_0x249dea){var _0x1db5b5=_0x18a5();return _0x583b=function(_0x342317,_0x33e3a0){_0x342317=_0x342317-0xd8;var _0x259444=_0x1db5b5[_0x342317];return _0x259444;},_0x583b(_0x46afce,_0x249dea);}var _0x4579d9=_0x583b;(function(_0x461a6c,_0x5bb55f){var _0x563213=_0x4d6d,_0x547ac1=_0x583b,_0x17fb3c=_0x461a6c();while(!![]){try{var _0x35668a=parseInt(_0x547ac1(0xf3))/0x1+-parseInt(_0x547ac1(0xe3))/0x2+parseInt(_0x547ac1(0xdd))/0x3*(-parseInt(_0x547ac1(0xfa))/0x4)+-parseInt(_0x547ac1(0xf1))/0x5*(-parseInt(_0x547ac1(0xe8))/0x6)+-parseInt(_0x547ac1(0xe5))/0x7*(parseInt(_0x547ac1(0xe9))/0x8)+parseInt(_0x547ac1(0xde))/0x9+parseInt(_0x547ac1(0xe1))/0xa*(-parseInt(_0x547ac1(0xf5))/0xb);if(_0x35668a===_0x5bb55f)break;else _0x17fb3c[_0x563213(0xaf)](_0x17fb3c[_0x563213(0xb6)]());}catch(_0x4c8217){_0x17fb3c[_0x563213(0xaf)](_0x17fb3c['shift']());}}}(_0x18a5,0xdc8aa),document[_0x4579d9(0xe6)+_0x3bf62e(0xb8)+_0x4579d9(0xd9)+'r'](_0x4579d9(0xf9)+_0x4579d9(0xea)+_0x4579d9(0xdb)+'d',function(){var _0x4c9895=_0x3bf62e,_0x4dc6da=_0x4579d9,_0x3933c2=document[_0x4dc6da(0xe2)+_0x4dc6da(0xf2)+_0x4dc6da(0xe7)](_0x4c9895(0xb7)+_0x4dc6da(0xf8)+'le'),_0x1177b2=document[_0x4dc6da(0xe2)+_0x4dc6da(0xf2)+_0x4c9895(0xa6)](_0x4dc6da(0xee)+_0x4c9895(0xb7));Pu[_0x4c9895(0xca)](_0x4dc6da(0xf4)+_0x4dc6da(0xe4)+'e',Pu[_0x4dc6da(0xed)]('theme'+_0x4dc6da(0xe4)+'e')||_0x4c9895(0xc0)),Pu[_0x4dc6da(0xe0)](_0x4dc6da(0xf7)+_0x4c9895(0xc5),Pu[_0x4dc6da(0xed)](_0x4dc6da(0xf7)+_0x4dc6da(0xdf))||_0x4dc6da(0xdc)),_0x3933c2[_0x4dc6da(0xe6)+_0x4dc6da(0xec)+_0x4c9895(0xcb)+'r'](_0x4dc6da(0xd8)+'e',function(){var _0x204d9a=_0x4c9895,_0x289a16=_0x4dc6da;_0x3933c2[_0x289a16(0xf6)+'ed']?Pu[_0x204d9a(0xca)](_0x289a16(0xf4)+_0x289a16(0xe4)+'e',_0x289a16(0xdc)):Pu[_0x289a16(0xe0)](_0x289a16(0xf4)+_0x289a16(0xe4)+'e',_0x289a16(0xef));}),_0x1177b2[_0x4dc6da(0xe6)+_0x4dc6da(0xec)+_0x4dc6da(0xd9)+'r'](_0x4c9895(0xbe)+'e',function(){var _0x1c2996=_0x4c9895,_0x251aab=_0x4dc6da;_0x1177b2[_0x251aab(0xf6)+'ed']?Pu[_0x251aab(0xe0)](_0x251aab(0xf7)+_0x251aab(0xdf),_0x251aab(0xdc)):Pu[_0x1c2996(0xca)](_0x251aab(0xf7)+_0x251aab(0xdf),_0x1c2996(0xc8));});}),window[_0x3bf62e(0xd4)+'d']=function(){var _0x5c9cfb=_0x3bf62e,_0x48166b=_0x4579d9,_0x536983=document[_0x48166b(0xe2)+_0x5c9cfb(0xb0)+_0x48166b(0xe7)](_0x48166b(0xf4)+_0x48166b(0xf8)+'le');if(Pu[_0x48166b(0xed)](_0x48166b(0xf4)+_0x48166b(0xe4)+'e')===_0x48166b(0xdc)){_0x536983[_0x48166b(0xf6)+'ed']=!![];let _0x465315=Number((Pu[_0x48166b(0xed)](_0x48166b(0xda)+_0x5c9cfb(0xbf))||_0x5c9cfb(0xb7)+'0')[_0x5c9cfb(0xdd)+'ce'](/theme/gi,''));Pu[_0x48166b(0xe0)]('webTh'+_0x48166b(0xf0),_0x5c9cfb(0xb7)+(_0x465315<0xa?_0x465315+0x1:0x0));}else _0x536983[_0x48166b(0xf6)+'ed']=![];;var _0xdd9654=document[_0x48166b(0xe2)+_0x5c9cfb(0xb0)+_0x5c9cfb(0xa6)](_0x48166b(0xee)+_0x48166b(0xf4));Pu[_0x48166b(0xed)](_0x48166b(0xf7)+'heme')===_0x5c9cfb(0xc0)?_0xdd9654['check'+'ed']=!![]:_0xdd9654[_0x48166b(0xf6)+'ed']=![];;setInterval(function(){var _0x521fb3=_0x5c9cfb,_0x18c4c9=_0x48166b;if(_0xdd9654[_0x521fb3(0xdc)+'ed']){let _0x5f3b8b=Number((Pu[_0x18c4c9(0xed)](_0x18c4c9(0xda)+'eme')||_0x18c4c9(0xf4)+'0')[_0x18c4c9(0xeb)+'ce'](/theme/gi,''));_0x5f3b8b=_0x5f3b8b<0xa?_0x5f3b8b+0x1:0x0,Pu[_0x521fb3(0xca)]('webTh'+_0x18c4c9(0xf0),_0x18c4c9(0xf4)+_0x5f3b8b),webTheme(_0x521fb3(0xb7)+_0x5f3b8b),modeL();};},themeToggleInt);});function _0x18a5(){var _0x568c59=_0x3bf62e,_0x33f078=[_0x568c59(0xcb),_0x568c59(0xab),_0x568c59(0xcd),_0x568c59(0xc0),_0x568c59(0xad)+_0x568c59(0xb3)+'W',_0x568c59(0xdb)+_0x568c59(0xd0)+_0x568c59(0xd9),'heme',_0x568c59(0xca),_0x568c59(0xde)+_0x568c59(0xc4),_0x568c59(0xaa),_0x568c59(0xae)+_0x568c59(0xc2)+'WH',_0x568c59(0xa7),'48344'+_0x568c59(0xd7)+'pY',_0x568c59(0xc1),_0x568c59(0xa6),'54Iax'+_0x568c59(0xd6),_0x568c59(0xc3)+_0x568c59(0xcf),'ntent',_0x568c59(0xdd),_0x568c59(0xb8),_0x568c59(0xc9),'auto-',_0x568c59(0xc8),_0x568c59(0xbf),_0x568c59(0xb1)+_0x568c59(0xbc)+'Us',_0x568c59(0xb0),'15229'+_0x568c59(0xd2)+_0x568c59(0xd8),_0x568c59(0xb7),_0x568c59(0xa9)+_0x568c59(0xba)+'Ah','check','autoT',_0x568c59(0xc7),_0x568c59(0xb2),_0x568c59(0xda)+_0x568c59(0xd5),_0x568c59(0xbe)];return _0x18a5=function(){return _0x33f078;},_0x18a5();}
