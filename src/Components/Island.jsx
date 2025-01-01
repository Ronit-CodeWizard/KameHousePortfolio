import Sand from './Outdoor/Sand'
import Rock from './Outdoor/Rock'
import Bush from './Outdoor/Bush'
import Outdoor from './Outdoor/Outdoor'
import Palm from './Outdoor/Palm'

export default function Island(props) {


    return <>
        <Sand nodes= { props.nodes } />
        <Rock nodes= { props.nodes } />
        <Bush nodes= { props.nodes } />
        <Outdoor nodes= { props.nodes } />
        <Palm nodes= { props.nodes } />
    
    </>

}