var menuitem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuitem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}
menuitem.forEach((item)=>
    item.addEventListener('click', selectlink)
)
var btnExp = document.querySelector('#btn-exp')
var menusite = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menusite.classList.toggle('expandir')
})
