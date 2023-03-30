import Card from './Card';
import s from "./Cards.module.css";
export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={s.divcards}>
   {characters.map((x,i)=>(<Card key={x.id} id={x.id} name={x.name} species={x.species} gender={x.gender} image={x.image} status={x.status} origin={x.origin}onClose={()=>onClose(x.id)}/>))}
   </div>;
}
