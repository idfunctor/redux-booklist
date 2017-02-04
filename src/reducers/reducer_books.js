export default function(){
  function rand(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
  return [
    {title: 'Nausea', pages: rand(150,200)},
    {title: 'Master and Margarita', pages: rand(250,300)},
    {title: 'Kane and Abel',pages: rand(350,450)},
    {title: 'Collin\'s Easy Learning French', pages: rand(120,180)},
    {title: 'Loop', pages: rand(400,550)}
  ];
};
