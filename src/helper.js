export function createButton(game,textOfButton,x,y,w,h,callback){
  let button1 = game.add.button(x,y,'platform',callback,this,2,1,0);
  
  button1.anchor.setTo(0.5,0.5);
  button1.width = w;
  button1.height = h;

  let txt = createText(game, textOfButton, x, y, '14px Arial', '#FFF', 'center');
  txt.anchor.setTo(0.5,0.5);
}

export function createText(game, str, x, y, font, fill, align){
  let txt = game.add.text(x, y, str, {
    font: font,
    fill: fill,
    align: align
  });
  return txt;
}