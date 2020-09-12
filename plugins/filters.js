import Vue from 'vue'

Vue.filter('price', num => {
  const decimal=0;
  const separator=' ';
  const decpoint = '.';
  const format_string = '# $/h';

  let r = parseFloat(num)

  const  exp10=Math.pow(10,decimal);// приводим к правильному множителю
  r = Math.round(r*exp10)/exp10;// округляем до необходимого числа знаков после запятой

  const rr = Number(r).toFixed(decimal).toString().split('.');

  const b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"\$1"+separator);

  r = (rr[1]?b+ decpoint +rr[1]:b);
  return format_string.replace('#', r);
})


Vue.filter('mode')
