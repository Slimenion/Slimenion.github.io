$('change-lang').click(function() {
    history.pushState({foo: 'bar'}, 'Title', '/baz.html')
})