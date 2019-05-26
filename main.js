$(document).ready(function(){
  var template_html = $('#template_calendario').html();
  var template_function = Handlebars.compile(template_html);


  var min_date = '2018-01-01';
  var max_date = '2018-12-01';
  // imposto il primo gennaio del 2018
  var data = '2018-01-01';
  var data_corrente = moment(data);
  // variabili per visualizzarle nel display del mese
  disegnaMese(data_corrente);

  // all'inizio il tasto precedente deve essere disabilitato
  $('.precedente').addClass('disabled');

  // quando clicco su Successivo
  $('.successivo').click(function(){
    // aggiungo un mese alla data corrente
    data_corrente.add(1, 'months');
    // richiamo la funzione disegnaMese sulla data corrente
    disegnaMese(data_corrente);
    console.log(data_corrente.format('MMM'));
    // se la data corrente è == 2018-12-01
    if(data_corrente.isSameOrAfter(max_date)){
      // disabilito il pulsante successivo
      $(this).addClass('disabled');
    }
    // riattivo il pulsante precedente
    $('.precedente').removeClass('disabled');

  });


  // quando clicco su Precedente
  $('.precedente').click(function(){
    // sottraggo un mese alla data corrente
    data_corrente.subtract(1, 'months');
    // richiamo la funzione disegnaMese sulla data corrente
    disegnaMese(data_corrente);
    console.log(data_corrente.format('MMM'));
    if(data_corrente.isSameOrBefore(min_date)){
      $(this).addClass('disabled');
    }

    $('.successivo').removeClass('disabled');
  });

  function disegnaMese(moment_data){
    var giorno, giorni;
    $('ul').empty();
    // giorni totali nel mese corrente
    giorni = moment_data.daysInMonth();

    var mese = moment_data.format('MMMM');
    var anno = moment_data.format('YYYY');

    // visualizzo nell'h2 Mese 2018
    $('#month').text(mese + ' ' + anno);
    for (var i = 0; i < giorni; i++) {
      giorno = (i+1) + ' ' + mese;
      var variables = {
        'giorno_template': giorno,
        'data_giorno': moment_data.format('YYYY-MM-') + format_day(i+1)
      }
      $('ul').append(template_function(variables));
    }
  }
  // per aggiungere lo 0 davanti se è < 10 
  function format_day(day){
    if(day < 10){
      return '0' + day
    }
    return day;
  }
});
