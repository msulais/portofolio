export default function Icon({name, block=true}){
    return (<span
        className="material-symbols-outlined icon"
        translate="no"
        style={{display: block? "block" : "inline-block"}}>
        { name }
    </span>);
}