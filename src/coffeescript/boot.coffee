###
  boot.coffee

###

do ($ = jQuery) ->
  $ ->
    $window = $ window
    $window.scroll ->
      distance = $window.scrollTop()
      $nav = $ 'nav'

      if distance > 50
        $nav.removeClass 'navbar-large'
      else
        $nav.addClass 'navbar-large'