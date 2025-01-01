import House from './House'
import Island from './Island'

export default function Scene(props) {

    
    return <>
        <House nodes= { props.nodes }/>
        <Island nodes= { props.nodes } />
       
    
    </>

}