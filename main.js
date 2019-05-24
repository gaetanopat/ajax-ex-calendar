$(document).ready(function(){

  // imposto il primo gennaio del 2018
  var data = '2018-01-01'
  var moment_data = moment(data);

  // var mese = moment_date.format('MMMM');
  var anno = moment_data.format('YYYY');

  var arrayMesi = [];
  var set_month, get_month, mese_corrente;
  // per creare un array di 12 mesi
  for (var i = 0; i < 12; i++) {
    // setto il mese alla data iniziale da 0 a 11 (Gennaio - Dicembre)
    set_month = moment_data.set('month', i);
    // ogni volta prendo, appunto, il mese (in numero)
    get_month = moment_data.get(set_month);
    // trasformo questo numero in formato MMMM (stringa intera)
    mese_corrente = moment_data.format('MMMM');
    arrayMesi.push(mese_corrente);
  }
  var m = 0;
  // gennaio
  $('h2.active').text(arrayMesi[m] + ' ' + anno);
  var mese_attivo = $('h2.active').text();


  // se gennaio 2018 include gennaio
  if(mese_attivo.includes(arrayMesi[m])){
    // prendo i giorni totali del mese
    giorni_totali_mese = moment_data.daysInMonth();
    for (var k = 0; k < giorni_totali_mese; k++) {
      singolo_giorno = (k+1) + ' ' + arrayMesi[m];
      $('ul').append('<li>' + singolo_giorno + '</li>');
    }
  }
  // quando clicco sul successivo
  $('.successivo').click(function(){
    if(m < 11){
      $('ul').empty();

      m++;

      console.log(m);
      $('h2.active').text(arrayMesi[m] + ' ' + anno);
      var mese_attivo = $('h2.active').text();
      // assegno il mese m
      set_month = moment_data.set('month', m);

      // se gennaio 2018 include gennaio
      if(mese_attivo.includes(arrayMesi[m])){
        // prendo i giorni totali del mese
        giorni_totali_mese = set_month.daysInMonth();
        for (var k = 0; k < giorni_totali_mese; k++) {
          singolo_giorno = (k+1) + ' ' + arrayMesi[m];
          $('ul').append('<li>' + singolo_giorno + '</li>');
        }
      }
    } else {
      $(this).off();
    }
  });

  // quando clicco sul precedente
  $('.precedente').click(function(){
    if(m > 0){
      $('ul').empty();

      m--;
      console.log(m);
      $('h2.active').text(arrayMesi[m] + ' ' + anno);
      var mese_attivo = $('h2.active').text();
      // assegno il mese m
      set_month = moment_data.set('month', m);

      // se gennaio 2018 include gennaio
      if(mese_attivo.includes(arrayMesi[m])){
        // prendo i giorni totali del mese
        giorni_totali_mese = set_month.daysInMonth();
        for (var k = 0; k < giorni_totali_mese; k++) {
          singolo_giorno = (k+1) + ' ' + arrayMesi[m];
          $('ul').append('<li>' + singolo_giorno + '</li>');
        }
      }
    } else {
      $(this).off();
    }
  });

})
