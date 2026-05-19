/*
 * ProcessWire AdminThemeUikit Konkat design system interactions.
 * Author: Maxim Semenov.
 * ProcessWire, UIkit, and other referenced trademarks/code belong to their respective creators.
 */
function setTheme(m,b){document.querySelectorAll('.ds-theme-fab button').forEach(x=>x.classList.remove('uk-active'));if(b)b.classList.add('uk-active');document.body.classList.remove('light-theme','dark-theme');if(m==='light')document.body.classList.add('light-theme');else if(m==='dark')document.body.classList.add('dark-theme');}
function setAccent(c,b){document.documentElement.style.setProperty('--pw-main-color',c);document.querySelectorAll('.ds-accent-btn').forEach(x=>x.classList.remove('uk-active'));b.classList.add('uk-active');}
// Close mobile sidebar on nav link click
document.querySelectorAll('.ds-mob-link').forEach(function(a){a.addEventListener('click',function(){document.getElementById('ds-mob-sidebar').classList.remove('open');document.getElementById('ds-mob-overlay').classList.remove('open');});});
