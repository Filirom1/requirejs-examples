define [
    'cs!controllers/base'
    'jquery'
    'text!templates/tmpl.html'
    'cs!datas/data'
  ], (Base, $, tmpl, data)->
    class Controller extends Base
      el: $('#main')

      events:
        'click input.show': 'show'
        'click input.hide': 'hide'

      template: tmpl

      show: (event)=>
        console.log 'show'
        @render(data)
        $(event.target).removeClass('show')
        $(event.target).addClass('hide')

      hide: =>
        console.log 'hide'
        @el.empty()
        $(event.target).removeClass('hide')
        $(event.target).addClass('show')
