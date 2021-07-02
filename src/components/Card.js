import './Card.css';

function Card(props){
  //children will make sure all
  //contents between it(card) are
  //displayed
  const classes='card '+props.className;
  return <div className={classes}>{props.children}</div>
}
export default Card;